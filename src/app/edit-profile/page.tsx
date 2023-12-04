"use client"
import { input, container, form, back } from './styles.css';
import Image from "next/image";
import Button from "@/components/Button/page"
import Nav from '@/components/Nav/page';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import MyEvents from '@/components/MyEvents/page';
import { useRouter } from "next/navigation";



export default function EditProfile() {
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const router = useRouter()
    const { data: session } = useSession();


    useEffect(() => {
        if (!session) {
            router.replace('/')
        }
    }, [session])

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
        <div>
            <Nav />
            <div className={container}>
                <Link className={back}
                    href='/'>
                    <ArrowBackIcon className={`
                                    flex 
                                    justify-center 
                                    items-center
                                `} />
                    voltar
                </Link>
                <h1 className="font-light text-black text-[3rem] mb-5">Minha conta</h1>
                <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />

                <div className='md:grid grid-cols-2 gap-[5rem] mt-10 p-5'>
                    <form className={form} onSubmit={newPassord}>
                        <p className='text-left font-semibold'>Nome: <span className='font-normal'>{session?.user.name}</span></p>
                        <p className='text-left font-semibold'>Email: <span className='font-normal'>{session?.user.email}</span></p>
                        <div className='flex flex-col'>
                            <button className={`
                                text-left text-primary 
                                font-semibold 
                                hover:text-primaryDark 
                                transition duration-100 ease-in-out
                            `} onClick={handleChangePassword}> Alterar senha </button>
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
                    <div>
                        <Image
                            src="/img/edit.svg"
                            alt="Logo"
                            width={400} height={400}
                            loading="lazy"
                            className=" hidden md:block md:top-10 md:left-10"
                        />
                    </div>
                </div>

                <MyEvents />
            </div>

        </div>
    )
}