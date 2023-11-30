import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


//deletando um evento
export async function DELETE(req: NextRequest, { params}: {params :{ slug: number}}) {
    const slug = params.slug
    const _id = { "_id": slug}
    await connect();

    const eventExist = await Event.findOne({_id});

    if(!eventExist){
        return new NextResponse("Evento não existe", {status: 400}) //retorna erro caso o evento não exista
    }

    try {
        const deletedEvent = await Event.findByIdAndDelete(_id);

        return new NextResponse(JSON.stringify({
            message: "Event created successfully",
            DeletedEvent: deletedEvent,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}