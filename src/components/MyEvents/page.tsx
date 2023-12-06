'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { eventsContainer, input } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Button from "../Button/page";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Image from 'next/image'

import {
    Dialog,
    DialogTitle,
    DialogActions,
} from '@mui/material'



type Event = {
    _id: string;
    name: string;
    description: string;
    creator: string;
    date: string;
    createdAt: string;
};

export default function MyEvents() {
    const [events, setEvents] = useState<Event[]>([])
    const [editingEventId, setEditingEventId] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [trigger, setTrigger] = useState(false);
    const [loading, setLoading] = useState(true)
    const { data: session } = useSession();
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user._id) {
                const response = await fetch(`/api/events/list/${session?.user._id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json())

                setEvents(response)
                setLoading(false)
            }
        }
        fetchData()
    }, [session?.user._id])

    async function deleteEvent(eventId: any) {
        const response = await fetch(`/api/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })

        if (response.status == 200) {
            toast({
                title: 'Sucesso',
                description: 'Evento excluído',
                variant: "constructive"
            })
            window.location.reload()
        }

        if (response.status == 400) {
            toast({
                title: 'Erro',
                description: 'O evento não existe',
                variant: "constructive"
            })
        }


        if (response.status == 500) {
            toast({
                title: 'Erro',
                description: 'Algo deu errado',
                variant: "constructive"
            })
        }
    }

    async function updateEvent(e: any, eventId: any) {
        e.preventDefault()

        const name = e.target[0].value
        const description = e.target[1].value
        const location = e.target[2].value
        const date = e.target[3].value

        const response = await fetch(`/api/events/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, location, date })
        })

        if (response.status === 200) {
            toast({
                title: 'Sucesso',
                description: 'Evento alterado',
                variant: "constructive"
            })
            window.location.reload()
        }

        if (response.status === 400) {
            toast({
                title: 'Erro',
                description: 'O evento não existe',
                variant: "destructive"
            })
        }

        if (response.status === 500) {
            toast({
                title: 'Erro',
                description: 'Algo deu errado',
                variant: "destructive"
            })
        }

    }

    const handleToggleEdit = (eventId: any) => {
        if (editingEventId === eventId) {
            setEditingEventId(null);
        } else {
            setEditingEventId(eventId);
        }
    };
    return (
        <div>
            <div className={eventsContainer}>

                <h1 className="font-bold text-2xl my-5 text-center">Meus eventos</h1>
                {events.map((events: any) => (
                    <div key={events._id} className="gap-0">

                        {editingEventId === events._id ? (

                            <div>
                                <form onSubmit={(e) => updateEvent(e, events._id)} className="flex flex-col">
                                    <span className="flex flex-col items-start mb-5">
                                        <label>Nome do evento</label>
                                        <input className={input} type="text" defaultValue={events.name} required />
                                    </span>
                                    <span className="flex flex-col items-start mb-5">
                                        <label>Descrição</label>
                                        <textarea defaultValue={events.description} className={input} cols={30} rows={10} required></textarea>
                                    </span>
                                    <span className="flex flex-col items-start mb-5">
                                        <label>Localização</label>
                                        <input className={input} type="text" defaultValue={events.location} required />
                                    </span>
                                    <span className="flex flex-col items-start mb-5">
                                        <label>Data do evento</label>
                                        <input className={input} type="date" defaultValue={events.date} required />
                                    </span>
                                    <div className="flex justify-end gap-5 m-10">

                                        <button onClick={() => handleToggleEdit(events._id)} className={`
                                        flex 
                                        items-center
                                        gap-1
                                        hover:text-primaryDark
                                        transition duration-100 ease-in-out
                                        `}> <CloseIcon /> Fechar</button>

                                        <Button
                                            text="Salvar"
                                            width=""

                                        />

                                    </div>
                                </form>
                            </div>

                        ) : (

                            <div>
                                <h3 className="font-bold text-2xl my-5">{events.name}</h3>
                                <p>{events.description}</p>
                                <span className="flex gap-5 my-5">
                                    <p className="flex items-end gap-1">
                                        <i>
                                            <CalendarMonthIcon />
                                        </i>
                                        {new Date(events.date).toLocaleDateString('pt-BR')}
                                    </p>
                                    <p className="flex items-end gap-1">
                                        <i>
                                            <LocationOnIcon />
                                        </i>
                                        {events.location}
                                    </p>
                                </span>


                                <div className="flex justify-end gap-5">

                                    <button onClick={() => handleToggleEdit(events._id)} className={`
                                        flex 
                                        items-center
                                        gap-1
                                        hover:text-primaryDark
                                        transition duration-100 ease-in-out
                                        `}> <EditIcon /> Editar</button>


                                    <button
                                        onClick={() => setDialogOpen(true)}
                                        className={`
                                        flex 
                                        items-center
                                        gap-1
                                        hover:text-primaryDark
                                        transition duration-100 ease-in-out
                                        `}> <DeleteIcon /> Excluir</button>

                                    <Dialog open={dialogOpen} className="p-5">
                                        <DialogTitle>Deseja excluir o evento?</DialogTitle>
                                        <DialogActions className="flex items-center">
                                            <Button onClick={() => deleteEvent(events._id)} text='Sim' width="" />
                                            <button className="p-5" onClick={() => setDialogOpen(false)}>Não</button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                        )}

                        <hr className="text-black w-full flex justify-start items-center my-5 opacity-10" />
                    </div>
                ))}
            </div>
            {loading ? (<p className="text-center p-10 animate-pulse">Carregando eventos..</p>)
                : events.length == 0 && !loading ? (
                    <div className="flex flex-col justify-center items-center m-auto">
                        <Image src='/img/not-found.svg' alt="sem eventos" width={450} height={300} />
                        <p className="text-center font-medium text-[1.5em] p-10" >Nenhum evento encontrado </p>
                    </div>
                )
                    : null}
        </div>
    );
}