import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'

export const GET = async () => {
    try {
        await connect()
        const events = await Event.find()
        return NextResponse.json(events, { status: 200 })
    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }
}


//adicionando participante a um evento
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { participants } = await req.json();

    const eventId = params.id;

    await connect();

    const event = await Event.findById(eventId);

    try {
        event.participants.push(participants);
        await event.save();
        return new NextResponse(JSON.stringify({
            message: "Participante adicionado com sucesso",
            success: true,
        }), { status: 201 })

    } catch (error: any) {
        return new NextResponse(error, { status: 500 })

    }
}

