import { NextResponse, NextRequest } from "next/server"
import connect from "@/lib/mongodb";
import User from "@/models/User";
import { getSession } from "next-auth/react";

export const GET = async (req: NextRequest, res: NextResponse) => {

    // const user = req.query
    const session = await getSession()
    console.log(typeof session)

    try {
        // if(!session){
        //     return new NextResponse("Usuário não autenticado", { status: 401 })
        // }
        await connect()
        const users = await User.find()
        return NextResponse.json(session, { status: 200 })


    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }


}

