import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/Comments";
import connect from '@/lib/mongodb'


//removendo usuario da lista de likes
export async function PUT(req: NextRequest) {
    const data = await req.json()
    const likes = data.likes
    const id_comment = { "_id": data._id}
    await connect();

    const commentExist = await Comment.findOne(id_comment);

    if(!commentExist){
        return new NextResponse("Comentário não existe", {status: 400}) //retorna erro caso o comentário não exista
    }

    const userLiked = await commentExist.likes.includes(likes) //verifica se o usuario esta no array de likes

    if(!userLiked){
        return new NextResponse("Usuário não deu like", {status: 400}) //retorna erro caso o usuario não tenha dado like
    }

    try {
        const dislikeIt = await Comment.findByIdAndUpdate(id_comment, {
        
            $pull: {likes}
    
        }, {new: true});
    
        await dislikeIt.save();

        return new NextResponse(JSON.stringify({
            message: "Disliked successfully",
            dislike: dislikeIt,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}