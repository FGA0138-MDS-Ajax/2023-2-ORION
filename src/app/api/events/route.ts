import { NextResponse } from "next/server"
import Event from "@/models/Event"
import connect from '@/lib/mongodb'

export const GET = async () => {
    try {
        await connect()
        const events = await Event.find().sort({createdAt: -1})
        return NextResponse.json(events, { status: 200 })
    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }
}