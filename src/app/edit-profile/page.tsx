"use client"
import { input, container, form, back } from './styles.css';
import Image from "next/image";
import Button from "@/components/Button/page"
import Nav from '@/components/Nav/page';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSession } from 'next-auth/react';
import { useState } from 'react';



export default function EditProfile() {
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [events, setEvents] = useState([])

    function handleChangePassword(e: any) {
        e.preventDefault()
        setChangePassword(!changePassword)
    }

    const { data: session } = useSession();

    console.log(session)

    async function listEvent() {
        const userEvents = await fetch(`/api/user/`)
            .then((res) => res.json())
            .then((data) => data.map((event: any) => event.events))

    }

    listEvent()

    return (
        <div>
            <Nav />
            <div className={container}>
                <h1 className="font-light text-black text-[3rem] mb-5">Minha conta</h1>
                <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />

                <div className='grid grid-cols-2 gap-[5rem] mt-10'>
                    <form className={form}>
                        <p className='text-left font-semibold'>Nome: <span className='font-normal'>{session?.user.name}</span></p>
                        <p className='text-left font-semibold'>Email: <span className='font-normal'>{session?.user.email}</span></p>
                        <div className='flex flex-col'>
                            <button className={`
                                text-left text-primary 
                                font-semibold 
                                hover:text-primaryDark 
                                transition duration-100 ease-in-out
                            `} onClick={handleChangePassword}> Alterar senha </button>
                            {changePassword ? <input type='password' placeholder="Nova senha" className={input} /> : ''}
                        </div>

                        {/* <span>
                                    <Link
                                        className={`hover:text-primaryDark hover:font-bold transition duration-500 ease-in-out`}
                                        href="/recover-password">
                                        Esqueci minha senha
                                    </Link>
                                </span> */}
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
                    <Link className={back}
                                href='/'>
                                <ArrowBackIcon className={`
                                    flex 
                                    justify-center 
                                    items-center
                                `} />
                                voltar
                            </Link>
                </div>
            </div>
        </div>
    )
}