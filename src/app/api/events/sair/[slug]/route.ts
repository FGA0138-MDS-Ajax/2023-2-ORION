import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


//removendo participante a um evento
export async function PUT(req: NextRequest, { params}: {params :{ slug: number}}) {
    const { participants} = await req.json();
    const slug = params.slug
    const _id = { "_id": slug}
    await connect();

    const eventExist = await Event.findOne({_id});

    if(!eventExist){
        return new NextResponse("Evento não existe", {status: 400}) //retorna erro caso o evento não exista
    }

    const participantIsHere = await Event.findOne({participants});

    if(!participantIsHere){
        return new NextResponse("Participante não esta aqui", {status: 400}) //retorna erro caso o participante não esteja no evento
    }

    try {
        const leaveEvent = await Event.findByIdAndUpdate(_id, {
        
            $pull: {participants}
    
        }, {new: true});
    
        await leaveEvent.save();

        return new NextResponse(JSON.stringify({
            message: "Event created successfully",
            OldEvent: leaveEvent,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}