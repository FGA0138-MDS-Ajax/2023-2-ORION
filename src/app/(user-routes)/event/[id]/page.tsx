import Nav from "@/components/Nav/page"
import Button from "@/components/Button/page"
import BackButton from "@/components/BackButton/page"
import { container } from './styles.css';
import Event from '@/models/Event';
import User from "@/models/User"
import connect from "@/lib/mongodb";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Avatar from "@/components/Avatar/page"
import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


async function fetchEvent(eventId: string) {
    await connect();
    const event = await Event.findById(eventId);
    const { name, description, location, date, participants, creator } = event;
    return event;
}

type EventProps = {
    params: {
        id: string
    }
}
export default async function EventShow({ params }: EventProps) {
    const eventId = params.id
    const event = await fetchEvent(eventId)

    async function listParticipant() {
        const id = event.participants
        const participant = await Promise.all(id.map((id: string) => User.findById(id)));
        return participant
    }


    async function handler() {
        const session = await getServerSession(authOptions)
        return session
    }

    const userName = await User.findById(event.creator)
    const { name } = userName
    const participants = await listParticipant()

    return (
        <div>
            <Nav />
            <div className={container}>
                <header className="flex items-center">
                    <h2 className='text-[3em] font-bold p-5'>{event.name}</h2>

                    <div className="w-full flex justify-end my-auto ">
                        <BackButton />
                    </div>

                </header>
                <p>Criado por<Link className="hover:text-primary transition duration-100 ease-in-out" href={`/user/${event.creator}`}> {name}</Link></p>

                <hr />
                <div className="flex flex-col">
                    <h3 className='text-[1.5rem] font-medium'>
                        Descrição:
                    </h3>
                    <p className='text-[1rem] font-medium'>
                        {event.description}
                    </p>
                </div>

                <div className="flex gap-8">
                    <span className="flex gap-2">
                        <p className="font-bold text-[1rem] flex items-center">
                            <LocationOnIcon className="text-primary" /> Onde vai ser:
                        </p>
                        <p>{event.location}</p>
                    </span>
                    <span className="flex gap-2">
                        <p className="font-bold text-[1rem] flex items-center">
                            <CalendarMonthIcon className="text-primary" /> Quando vai ser:
                        </p>
                        <p>{event.date.toLocaleDateString()}</p>
                    </span>
                </div>

                Participantes: {participants.map(
                    (participant: any) =>
                        participant && <p
                            className="flex items-center gap-2"
                            key={participant._id}>
                            <Avatar
                                name={participant.name} />
                            {participant.name}
                        </p>
                )}
            </div>


        </div >
    )

}



