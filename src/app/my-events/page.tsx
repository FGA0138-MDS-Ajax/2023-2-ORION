'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { container } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
        <div className={container}>
            {events.map((events: any, index: any) => (
                <div key={index}>
                    
                </div>
            ))}
        </div>
    );
}