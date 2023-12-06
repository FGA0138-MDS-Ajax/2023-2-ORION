'use client'

import Button from "@/components/Button/page"
import { input } from "./styles.css"
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export default function login() {
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.replace('/admin/dashboard')
        }
    }, [session, router])


    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const username = event.target[0].value;
        const password = event.target[1].value;


        const response = await signIn("admin-credentials", {
            redirect: false,
            username,
            password,
            callbackUrl: '/admin/dashboard'
        })

        if (response?.error) {
            toast({
                title: 'Erro',
                description: 'Usuário ou senha incorretos',
                variant: "destructive"
            })

            if (response?.url) router.replace("/admin/login")
        } else {
            toast({
                title: 'Sucesso',
                description: 'Você está logado',
                variant: "constructive"
            })

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
                <form onSubmit={handleSubmit}>
                    <h1 className="font-normal text-black  tex text-[2.5rem]">Área restrita</h1>
                    <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
                    <input placeholder="Usuário" type="text" className={input} />
                    <input type='password' placeholder="Sua senha" className={input} required />
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