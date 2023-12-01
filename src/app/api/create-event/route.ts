import connect from "@/lib/mongodb";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { name, description, location, creator, participants } = await request.json();

    await connect();

    try {
        const newEvent = new Event({
            name,
            location,
            description,
            creator,
            participants
        });

        await newEvent.save();

        return new NextResponse(JSON.stringify({
            message: "Event created successfully",
            success: true,
        }), { status: 201 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }

}