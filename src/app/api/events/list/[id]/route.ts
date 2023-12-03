import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"
import Event from "@/models/Event";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const userId = params.id;

    await connect()
    const user = await User.findById(userId).select('events')

    const eventId = user.events.map((events: any) => events._id)

    const userEvents = await Event.find({_id: {$in: eventId}})

    return NextResponse.json(userEvents, { status: 200 })


}

