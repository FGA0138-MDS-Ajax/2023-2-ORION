import connect from "@/lib/mongodb";
import Comment from "@/models/Comments";
import Comment_ from "@/models/Comments";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";


//deletando um comentario ( admin)
export async function DELETE(req: NextRequest) {
    const data = await req.json()
    const id_comment = { "_id": data.id_comment}
    await connect();

    const commentExist = await Comment.findOne({_id: id_comment})

    if(!commentExist){
        return new NextResponse("Comentário não existe", {status: 400}) //retorna erro caso o comentario não exista
    }

    try {
        const deletedComment = await Comment_.findOneAndDelete({_id: id_comment})

        return new NextResponse(JSON.stringify({
            message: "Comment deleted successfully",
            DeletedComment: deletedComment,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}