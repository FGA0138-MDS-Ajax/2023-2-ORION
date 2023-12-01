'use client'
import Nav from "@/components/Nav/page"
import { container, form, back } from "./styles.css"
import Button from "@/components/Button/page"
import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"

export default function CreateEvent() {
    const [error, setError] = useState<string>('');
    const router = useRouter()

    const { data: session } = useSession();

    const handleCreate = async (event: any) => {
        event.preventDefault();

        const name = event.target[0].value;
        const location = event.target[1].value;
        const description = event.target[2].value;
        const date = event.target[3].value;
        const creator = session?.user?._id
        const participants = []

        console.log(name, location, description, creator)
        

        try {
            const response = await fetch('/api/events/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, location, description, date, creator, participants: []})
            })
            if (response.status == 400) {
                setError('Erro ao criar evento')
            }
            if (response.status == 201) {
                setError('');
                router.push('/')
            }

            console.log(response)
        } catch (error) {
            setError('Erro ao criar evento')
            console.error(error);
        }

    }

    

    return (
        <div >
            <Nav />
            <div className={container}>
                <h1 className={`font-bold text-2xl my-5"`}>Criar um evento</h1>



                <div>
                    <form className={form} onSubmit={handleCreate}>
                        <input type="text" placeholder="Nome do evento" />
                        <input type="text" placeholder="Local (ex: quadra de esportes)" />
                        <input type="text" placeholder="Descrição" />
                        <label className="text-left">Data</label>
                        <input type="date" />
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