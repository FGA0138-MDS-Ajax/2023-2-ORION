import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/mongodb"
import User from "@/models/User"
import { getServerSession } from "next-auth";

export async function GET (req: NextRequest, {params}: {params: {id: string}}) {
    
    const userId = params.id;
    
    await connect()
    const user = await User.findById(userId)
    return NextResponse.json(user, { status: 200 })

}

