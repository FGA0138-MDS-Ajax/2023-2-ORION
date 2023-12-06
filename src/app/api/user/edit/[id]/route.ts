import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    const userId = params.id;
    const { alias, bio } = await req.json()

    await connect()

    const user = await User.findById(userId)

    if (!user) {
        return new NextResponse("Usuário inválido", { status: 500 })
    }

    const newInfo = await User.findByIdAndUpdate(userId,
        {
            alias,
            bio

        }, { new: true })

    user.save()

    return NextResponse.json(user, { status: 200 })
}