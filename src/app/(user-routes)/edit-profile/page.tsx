"use client"
import { input, container, form, back } from './styles.css';
import Image from "next/image";
import Button from "@/components/Button/page"
import Nav from '@/components/Nav/page';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MyEvents from '@/components/MyEvents/page';
import EventsIn from '@/components/EventsIn/page';



export default function EditProfile() {
    const [open, setOpen] = useState('ProfileInfo');
    const { data: session } = useSession();

    return (
        <div>
            <Nav />
            <div className={container}>
                {/* <Link className={back}
                    href='/'>
                    <ArrowBackIcon className={`
                                    flex 
                                    justify-center 
                                    items-center
                                `} />
                    voltar
                </Link> */}
                <h1 className="font-light text-black md:text-[2rem] text-[1.5rem] mb-5">Minha conta</h1>
                <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />

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


const ProfileInfo = () => {
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { data: session } = useSession();


    function handleChangePassword(e: any) {
        e.preventDefault()
        setChangePassword(!changePassword)
    }

    async function newPassord(e: any) {
        e.preventDefault()

        const oldPassword = e.target[1].value
        const newPassword = e.target[2].value

        if (!oldPassword || !newPassword) {
            setError('Both old and new passwords are required');
            return;
        }

        if (typeof oldPassword !== 'string' || typeof newPassword !== 'string') {
            setError('Both old and new passwords must be strings');
            return;
        }

        try {
            const response = await fetch(`api/user/${session?.user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldPassword, newPassword })
            })

        } catch (error) {
            setError('Senha inválida')
            return { error: 400 }
        }
    }

    return (
        <div className='flex justify-center p-10 '>
            <form className={form} onSubmit={newPassord}>
                <p className='text-left font-semibold'>Nome: <span className='font-normal'>{session?.user.name}</span></p>
                <p className='text-left font-semibold'>Email: <span className='font-normal'>{session?.user.email}</span></p>
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

                        </div>
                        : ''}
                </div>
                <Button
                    text="Enviar"
                    width="w-full"
                />
            </form>
        </div>
    )
}