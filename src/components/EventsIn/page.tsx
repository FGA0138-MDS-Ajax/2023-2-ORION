'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { eventsContainer, input } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import Button from "../Button/page";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogTitle,
    DialogActions,
} from '@mui/material'
import Link from "next/link";


type Event = {
    _id: string;
    name: string;
    description: string;
    creator: string;
    date: string;
    createdAt: string;
};

export default function EventsIn() {
    const [events, setEvents] = useState<Event[]>([])
    const [reload, setReload] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data: session } = useSession();
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user._id) {
                const response = await fetch(`/api/events/eventsIn/${session?.user._id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json())

                setEvents(response)
            }
        }
        fetchData()


    }, [session?.user._id])


    async function deleteEvent(eventId: any) {
        const response = await fetch(`/api/events/eventsIn/${eventId}/${session?.user._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })

        if (!response.ok) {
            throw new Error('Falha ao deletar evento');
        }

        if (response.ok) {
            window.location.reload()
        }
    }

    return (
        <div>
            <div className={eventsContainer}>

                <h1 className="font-bold text-2xl my-5 text-center">Eventos</h1>
                {events.map((events: any) => (
                    <div key={events._id} className="gap-0">
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
                                <Link
                                    className="hover:text-primaryDark transition duration-100 ease-in-out"
                                    href={`/event/${events._id}`}>
                                    <p><InfoIcon />Informações</p>
                                </Link>

                                <button
                                    onClick={() => setDialogOpen(true)}
                                    className={`
                                        flex 
                                        items-center
                                        gap-1
                                        hover:text-primaryDark
                                        transition duration-100 ease-in-out
                                        `}>Sair do evento<ExitToAppIcon /></button>

                                <Dialog open={dialogOpen} className="p-5">
                                    <DialogTitle>Deseja sair do evento?</DialogTitle>
                                    <DialogActions className="flex items-center">
                                        <Button onClick={() => deleteEvent(events._id)} text='Sim' width="" />
                                        <button className="p-5" onClick={() => setDialogOpen(false)}>Não</button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                        <hr className="text-black w-full flex justify-start items-center my-5 opacity-10" />
                    </div>
                ))}
            </div>
            {events.length === 0 && (<p className="text-center p-10">Você não entrou em um evento</p>)}
        </div>
    );
}