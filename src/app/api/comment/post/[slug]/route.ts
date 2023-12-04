import connect from "@/lib/mongodb";
import Comment from "@/models/Comments";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params}: {params :{ slug: number}}) {
    const { creator, text } = await request.json();
    const slug = params.slug
    const _id = { "_id": slug}

    await connect();

    const eventExist = await Event.findOne({_id});

    if(!eventExist){
        return new NextResponse("Evento não existe", {status: 400}) //retorna erro caso o evento não exista
    }

    try {
        const newComment = new Comment({
            _id,
            creator,
            text
        });

        await newComment.save();

        return new NextResponse(JSON.stringify({
            message: "Comment created successfully",
            NewComment: newComment,
            success: true,
        }), { status: 201 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }

}