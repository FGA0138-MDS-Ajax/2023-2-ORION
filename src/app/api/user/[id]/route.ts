import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"

const bcrypt = require('bcryptjs');

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const userId = params.id;

    await connect()
    const user = await User.findById(userId)
    return NextResponse.json(user, { status: 200 })

}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    const userId = params.id;
    const { oldPassword, newPassword } = await req.json()

    await connect()

    const user = await User.findById(userId)

    if (!user) {
        return new NextResponse("Usuário inválido", { status: 500 })
    }

    const match = await bcrypt.compare(oldPassword, user.password)

    if (!match) {
        return new NextResponse("Senha incorreta", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 5)
    user.password = hashedPassword

    user.save()

    return NextResponse.json(user, { status: 200 })







}