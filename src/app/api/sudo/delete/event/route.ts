import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


//deletando um evento (admin)
export async function DELETE(req: NextRequest) {

    const data = await req.json()
    const eventId = { "_id": data.eventId}

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
