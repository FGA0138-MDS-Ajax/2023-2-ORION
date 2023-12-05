import connect from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const { _id } = await request.json();

    await connect();

    const adminExist = await Admin.findById(_id);

    if (!adminExist) {
        return new NextResponse("Admin não existe", { status: 400 }) //retorna erro caso o Admin não exista
    }

    //remove um admin
    try {

        const deletedAdmin = await Admin.findByIdAndDelete(_id);

        return new NextResponse(JSON.stringify({
            message: "Admin created successfully",
            admin: deletedAdmin,
            success: true,
        }), { status: 201 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }

}