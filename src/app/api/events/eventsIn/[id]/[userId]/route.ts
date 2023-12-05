import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"
import Event from "@/models/Event";

export async function DELETE(req: NextRequest, { params }: { params: { id: string, userId: string } }) {
    const eventId = params.id;
    const userId = params.userId;

    await connect();

    const eventExist = await Event.findById(eventId);

    if (!eventExist) {
        return new NextResponse("Evento não existe", { status: 400 }) //retorna erro caso o evento não exista
    }

    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    try {
        user.eventsIn.pull(eventId);
        event.participants.pull(userId);

        await user.save();
        await event.save();

        return new NextResponse(JSON.stringify({
            message: "Saiu com sucesso",
            success: true,
        }), { status: 200 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })

    }
}