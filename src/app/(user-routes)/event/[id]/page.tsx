import Nav from "@/components/Nav/page"
import Button from "@/components/Button/page"
import { container } from './styles.css';
import Event from '@/models/Event';
import User from "@/models/User"
import connect from "@/lib/mongodb";

async function fetchEvent(eventId: string) {
    await connect();

    const event = await Event.findById(eventId);
    const { name, description, location, date, participants } = event;

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

    const participants = await listParticipant()
    return (
        <div>
            <Nav />
            <div className={container}>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date.toLocaleDateString()}</p>
                Participants: {participants.map(
                    (participant: any) =>
                        participant && <p key={participant._id}>
                            {participant.name}
                        </p>
                )}
            </div>
        </div>
    )

}



