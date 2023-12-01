'use client'

import Button from "@/components/Button/page"
import { input } from "./styles.css"
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Alert } from "@mui/material";

export default function login() {
    const [error, setError] = useState<string>('');
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.replace('/')
        }
    }, [session, router])


    const isValidEmail = (email: string) => {
        return email.endsWith('@aluno.unb.br');
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;

        if (!isValidEmail(email)) {
            setError('Email inválido')
            return;
        }

        const response = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: '/'
        })

        if (response?.error) {
            setError('email ou senha inválidos')

            if (response?.url) router.replace("/")
        } else {
            setError('')
            
        }
    }
    return (
        <div className="bg-[white] m-auto h-screen w-screen text-center relative overflow-hidden flex justify-center items-center">
            <div className="w-[400px] text-center text-[#45bf55]">
                <Link href="/">
                    <Image
                        src="/img/logo2.svg"
                        alt="Logo"
                        width={150} height={100}
                        loading="lazy"
                        className=" hidden md:block absolute md:top-10 md:left-10"
                    />
                </Link>
                {error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <h1 className="font-normal text-black  tex text-[3rem]">Acesse sua conta</h1>
                    <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
                    <input placeholder="Seu email" type="email" className={input} />
                    <input type='password' placeholder="Sua senha" className={input} required />
                    {/* <span>
                                <Link
                                    className={`hover:text-primaryDark hover:font-bold transition duration-500 ease-in-out`}
                                    href="/recover-password">
                                    Esqueci minha senha
                                </Link>
                            </span> */}
                    <Button
                        text="Entrar"
                        width="w-[300px]"
                    />
                </form>
                <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
                <span>
                    <Link
                        className={`hover:text-primaryDark hover:font-bold transition duration-500 ease-in-out`}
                        href="/signup">
                        Não possui conta?
                    </Link>
                </span>
                <Link href="/">
                    <Image
                        src="/img/logo2.svg"
                        alt="Logo"
                        width={120} height={100}
                        loading="lazy"
                        className="fixed bottom-10 left-[50%] translate-x-[-50%] translate-y-[-50%]  md:hidden "
                    />
                </Link>
            </div>

        </div>
    )
}