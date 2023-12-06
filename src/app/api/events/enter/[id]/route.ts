import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'
import User from "@/models/User"


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { participants } = await req.json();

    const eventId = params.id;
    const userId = participants;

    await connect();

    const event = await Event.findById(eventId);
    if (!event) {
        return new NextResponse("Evento não existe", { status: 400 }) 
    }

    for (const participant of event.participants) {
        if (participant == userId) {
            return new NextResponse("Você é o criador do evento", { status: 409 }) 
        }
    }

    try {
        event.participants.push(participants);
        await event.save();

        const user = await User.findByIdAndUpdate(userId, {
            $push: { eventsIn: eventId }
        }, {
            new: true
        });

        await user.save();
        
        return new NextResponse(JSON.stringify({
            message: "Participante adicionado com sucesso",
            success: true,
        }), { status: 201 })


    } catch (error: any) {
        return new NextResponse('Algo deu errado', { status: 500 })

    }

}

