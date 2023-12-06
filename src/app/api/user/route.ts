import { NextResponse, NextRequest } from "next/server"
import connect from "@/lib/mongodb";
import User from "@/models/User";


const bcrypt = require('bcryptjs')

export const GET = async (req: NextRequest, res: NextResponse) => {

    // const user = req.query

    try {

        await connect()
        const users = await User.find()
        return NextResponse.json(users, { status: 200 })

    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }

}