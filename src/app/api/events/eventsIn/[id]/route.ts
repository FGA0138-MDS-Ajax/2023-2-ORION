import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"
import Event from "@/models/Event";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const userId = params.id;

    await connect()
    const user = await User.findById(userId).select('eventsIn')

    const eventId = user.eventsIn.map((eventsIn: any) => eventsIn._id)

    const userEventsIn = await Event.find({ _id: { $in: eventId } })

    return NextResponse.json(userEventsIn, { status: 200 })

}