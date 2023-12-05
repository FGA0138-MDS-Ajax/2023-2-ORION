import connect from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


//deletando um user ( admin)
export async function DELETE(req: NextRequest) {
    const data = await req.json()
    const id_user = { "_id": data.id_user}
    await connect();

    const userExist = await User.findOne({_id: id_user})

    if(!userExist){
        return new NextResponse("User não existe", {status: 400}) //retorna erro caso o user não exista
    }

    try {
        const deletedUser = await User.findOneAndDelete({_id: id_user})

        return new NextResponse(JSON.stringify({
            message: "User deleted successfully",
            DeletedComment: deletedUser,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}