'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { eventsContainer, container } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Nav from "@/components/Nav/page";
import Button from "@/components/Button/page";


type Event = {
    name: string;
    description: string;
    creator: string;
    date: string;
    createdAt: string;
};

export default function MyEvents() {
    const [events, setEvents] = useState<Event[]>([])


    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user._id) {
                const response = await fetch(`/api/events/list/${session?.user._id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => res.json())

                setEvents(response)
            }
        }
        fetchData()
    }, [session?.user._id])

    return (
        <div>
            <div className={eventsContainer}>

                <h1 className="font-bold text-2xl my-5 text-center">Meus eventos</h1>
                {events.map((events: any, index: any) => (
                    <div key={index} className="gap-0">
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
                        <div>
                            <Button
                                text="Entrar"
                                justify="flex justify-end"
                                width="w-20"
                            />
                        </div>
                        <hr className="text-black w-full flex justify-start items-center my-5 opacity-10" />
                    </div>
                ))}
            </div>
        </div>
    );
}