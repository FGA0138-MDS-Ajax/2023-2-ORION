"use client"
import { input, container, form } from './styles.css';
import Button from "@/components/Button/page"
import Nav from '@/components/Nav/page';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MyEvents from '@/components/MyEvents/page';
import EventsIn from '@/components/EventsIn/page';
import { toast } from '@/components/ui/use-toast';
import BackButton from '@/components/BackButton/page';

export default function EditProfile() {
    const [open, setOpen] = useState('ProfileInfo');
    const { data: session } = useSession();

    return (
        <div>
            <Nav />
            <div className={container}>
                <h1 className="font-light text-black md:text-[2rem] text-[1.5rem] mb-5">Minha conta</h1>

                <div className='flex justify-center'>
                    <ul className='flex gap-5'>
                        <li className='md:text-[2rem]'>
                            <button
                                className={`${open === 'ProfileInfo' ? 'border-b-4 border-primary font-semibold' : 'text-black'}`}
                                onClick={() => setOpen('ProfileInfo')}
                            >Informações
                            </button>
                        </li>
                        <li className='md:text-[2rem]'>
                            <button
                                className={`${open === 'MyEvents' ? 'border-b-4 border-primary font-semibold' : 'text-black'}`}
                                onClick={() => setOpen('MyEvents')}>Meus eventos
                            </button>
                        </li>
                        <li className='md:text-[2rem]'>
                            <button
                                className={`${open === 'EventsIn' ? 'border-b-4 border-primary font-semibold' : 'text-black'}`}
                                onClick={() => setOpen('EventsIn')}>Eventos
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    {open === 'ProfileInfo' && <ProfileInfo />}
                    {open === 'MyEvents' && <MyEvents />}
                    {open === 'EventsIn' && <EventsIn />}
                </div>
            </div>

        </div >
    )
}

type User = {
    _id: string;
    name: string;
    alias: string;
    bio: string;
};

const ProfileInfo = () => {
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [user, setUser] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [change, setChange] = useState<boolean>(true);
    const { data: session } = useSession();

    function handleChangePassword(e: any) {
        e.preventDefault()
        setChangePassword(!changePassword)
    }


    function handleChange(e: any) {
        e.preventDefault()
        setChange(!change)
    }

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user._id) {
                const response = await fetch(`/api/user/${session?.user._id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json())

                setUser(response)
                setLoading(false)
            }
        }
        fetchData()
    }, [session?.user._id])



    async function editProfile(e: any) {
        e.preventDefault()
        const alias = e.target[1].value
        const bio = e.target[2].value

        console.log(e.target[1].value, e.target[2].value)

        const response = await fetch(`api/user/edit/${session?.user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ alias, bio })
        })

        if (response.status == 200) {
            toast({
                title: 'Sucesso',
                description: 'Informações alteradas',
                variant: "constructive"
            })
            window.location.reload()
        }

        if (response.status == 400) {
            toast({
                title: 'Erro',
                description: 'Algo deu errado',
                variant: "destructive"
            })
            return
        }

    }

    async function newPassord(e: any) {
        e.preventDefault()

        const oldPassword = e.target[1].value
        const newPassword = e.target[2].value

        if (!oldPassword || !newPassword) {
            toast({
                title: 'Erro',
                description: 'Email já cadastrado',
                variant: "destructive"
            })

            return;
        }

        const response = await fetch(`api/user/${session?.user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ oldPassword, newPassword })
        })
        if (response.status == 200) {
            toast({
                title: 'Sucesso',
                description: 'Senha alterada',
                variant: "constructive"
            })
            window.location.reload()
        }

        if (response.status == 400) {
            toast({
                title: 'Erro',
                description: response.statusText,
                variant: "destructive"
            })
        }
    }




    return (
        <div className='flex flex-col gap-5 justify-center p-10 '>
            <div>
                <p className='text-left font-semibold text-[1.5rem]'>Nome: <span className='font-normal'>{(user as any).name}</span></p>
                <p className='text-left font-semibold text-[1.5rem]'>Email: <span className='font-normal'>{(user as any).email}</span></p>
            </div>

            <form className={form} onSubmit={editProfile}>
                <div className='flex flex-col'>
                    <button className={`
                    text-left text-primary 
                    font-semibold 
                    hover:text-primaryDark 
                    transition duration-100 ease-in-out
                `} onClick={handleChange}>{!change ?
                            <span>Alterar dados < ArrowRightIcon /></span>
                            : <span>Alterar dados < ArrowDropDownIcon /></span>}</button>
                    {change ?
                        <div className='flexflex-col'>
                            <p className='text-left font-semibold text-[1.5rem]'>Apelido: <span className='font-normal'>{(user as any).alias}</span></p>
                            <p className='text-left font-semibold text-[1.5rem]'>Sobre mim: <span className='font-normal'>{(user as any).bio}</span></p>
                        </div>
                        :
                        <div className='flex  gap-5 flex-col'>
                            <input type='text' placeholder="Apelido" className={input} />
                            <textarea className={input} placeholder='sobe mim' id="" cols={30} rows={10}></textarea>
                            <Button
                                text="Enviar"
                                width="w-full"
                            />
                        </div>}
                </div>

            </form>

            <hr />

            <form className={form} onSubmit={newPassord}>
                <div className='flex flex-col'>
                    <button className={`
                    text-left text-primary 
                    font-semibold 
                    hover:text-primaryDark 
                    transition duration-100 ease-in-out
                `} onClick={handleChangePassword}>{!changePassword ?
                            <span>Alterar senha< ArrowDropDownIcon /></span>
                            : <span>Alterar senha< ArrowRightIcon /></span>}
                    </button>
                    {changePassword
                        ? <div className='flex flex-col gap-5 mt-5'>
                            <input type='password' placeholder="Senha antiga" className={input} />
                            <input type='password' placeholder="Nova senha" className={input} />
                            <Button
                                text="Enviar"
                                width="w-full"
                            />
                        </div>
                        : ''}
                </div>
            </form>
        </div >
    )
}