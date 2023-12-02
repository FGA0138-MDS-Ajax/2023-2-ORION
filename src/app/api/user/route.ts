import { NextResponse, NextRequest } from "next/server"
import connect from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest, res: NextResponse) => {


    const user = req.query
 
    try {

        const session = await getServerSession()
        // if(!session){
        //     return new NextResponse("Usuário não autenticado", { status: 401 })
        // }
        await connect()
        const users = await User.find(user, '_id name')
        return NextResponse.json(users, { status: 200 })


    } catch (error) {
        return new NextResponse("Erro", { status: 500 })
    }


}

