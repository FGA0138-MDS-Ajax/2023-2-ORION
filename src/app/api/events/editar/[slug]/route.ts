import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


//editando um evento
export async function PUT(req: NextRequest, { params}: {params :{ slug: number}}) {
    const { name, startDate, endDate, participants, creator, category} = await req.json();
    const slug = params.slug
    const _id = { "_id": slug}
    await connect();

    const eventExist = await Event.findOne({_id});

    if(!eventExist){
        return new NextResponse("Evento não existe", {status: 400}) //retorna erro caso o evento não exista
    }

    try {
        const oldEvent = await Event.findByIdAndUpdate(_id, {

            name,
            startDate,
            endDate,
            participants,
            creator,
            category
    
        }, {new: true});
    
        await oldEvent.save();

        return new NextResponse(JSON.stringify({
            message: "Event created successfully",
            OldEvent: oldEvent,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}