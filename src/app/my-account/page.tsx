'use client'
import Nav from "@/components/Nav/page"
import Button from "@/components/Button/page"
import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSession } from "next-auth/react"
import { container, form, back } from "../edit-profile/styles.css"

export default function MyAccount() {
    const { data: session } = useSession();
    
    return (
        <div >
            <Nav />
            <div className={container}>
                <h1 className={`font-bold text-[3rem] my-5"`}>Criar um evento</h1>

                <div>
                    <form className={form}>
                        <label className="text-left">Nome</label>
                        <input type="text" placeholder={session?.user.name} disabled />
                        <label className="text-left">Email</label>
                        <input type="text" placeholder={session?.user.email} disabled />
                        <input type="text" placeholder="Descrição" />
                        <Button
                            text="Criar evento"
                            justify="center"
                            width="w-full"
                        />
                        <Link className={back}
                            href='/'><ArrowBackIcon />voltar</Link>
                    </form>

                </div>
            </div>

        </div>
    )
}