'use client'
import Nav from "@/components/Nav/page"
import { container, form, back, input } from "./styles.css"
import Button from "@/components/Button/page"
import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

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
        const creator = session?.user._id
        const participants = []
        const participantsIn = []


        const response = await fetch('/api/events/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, location, description, date, creator, participants: [], participantsIn: [] })
        })
        if (response.status == 400) {
            toast({
                title: 'Erro',
                description: 'Erro ao criar o evento',
                variant: "destructive"
            })
        }
        if (response.status == 201) {
            toast({
                title: 'Sucesso',
                description: 'Evento criado',
                variant: "constructive"

            })
            router.push('/edit-profile')
        }
        if (response.status == 500) {
            toast({
                title: 'Erro',
                description: 'Erro ao criar o evento',
                variant: "destructive"

            })
        }
    }

    return (
        <div >
            <Nav />
            <div className={container}>
                <h1 className={`font-bold text-2xl mt-10`}>Criar um evento</h1>
                <br />
                <div>
                    <form className={form} onSubmit={handleCreate}>
                        <input className={input} type="text" placeholder="Nome do evento" />
                        <input className={input} type="text" placeholder="Local (ex: quadra de esportes)" />
                        {/* <input className={input} type="" placeholder="Descrição" /> */}
                        <textarea placeholder="Descrição" className={input} cols={30} rows={10}></textarea>

                        <div className="flex flex-col items-left ">
                            <label className="text-left ml-[16px]  opacity-40">Data do evento</label>
                            <input className={input} type="date" />
                        </div>

                        <div className="flex flex-row-reverse p-5 justify-between">
                            <Button
                                text="Criar evento"
                                justify="center"
                                width=""
                            />
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
                    </form>

                </div>
            </div>

        </div>
    )
}