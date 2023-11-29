import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event"
import connect from '@/lib/mongodb'


//postando um evento
export async function POST(req: NextRequest) {
    const { name, startDate, endDate, participants, creator, category } = await req.json();
    try {
        await connect()
        const newEvent = new Event({

            name,
            startDate,
            endDate,
            participants,
            creator,
            category
        });
    
        await newEvent.save();

        const events = await Event.find()
        return new NextResponse(JSON.stringify({
            message: "Event created successfully",
            NewEvent: newEvent,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}