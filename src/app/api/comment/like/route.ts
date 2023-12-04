import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/Comments";
import connect from '@/lib/mongodb'


//adicionando usuario da lista de likes
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

    if(userLiked){
        return new NextResponse("Usuário ja deu like", {status: 400}) //retorna erro caso o usuario ja deu like
    }

    try {
        const likeIt = await Comment.findByIdAndUpdate(id_comment, {
        
            $push: {likes}
    
        }, {new: true});
    
        await likeIt.save();

        return new NextResponse(JSON.stringify({
            message: "Liked successfully",
            liked: likeIt,
            success: true,
        }), {status: 201})
    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}