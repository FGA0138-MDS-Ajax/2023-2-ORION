import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const eventId = params.id;

    try {
        await connect()
        const events = await Event.findById(eventId)
        return NextResponse.json(events, { status: 200 })
    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }
}


//deletando um evento
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    const eventId = params.id;

    await connect();


    const eventExist = await Event.findById(eventId);

    if (!eventExist) {
        return new NextResponse("Evento não existe", { status: 400 }) //retorna erro caso o evento não exista
    }

    try {
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        return new NextResponse(JSON.stringify({
            message: "Evento deletado com sucesso",
            DeletedEvent: deletedEvent,
            success: true,
        }), { status: 200 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }
}

//editando um evento
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { name, description, location, date, creator, participants } = await req.json();

    const eventId = params.id;

    await connect();

    const eventExist = await Event.findById(eventId);

    if (!eventExist) {
        return new NextResponse("Evento não existe", { status: 400 }) //retorna erro caso o evento não exista
    }

    try {
        const oldEvent = await Event.findByIdAndUpdate(eventId, {

            name,
            description,
            location,
            date,
            creator,
            participants,

        }, { new: true });

        await oldEvent.save();

        return new NextResponse('Evento editado com sucesso', { status: 200 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }
}