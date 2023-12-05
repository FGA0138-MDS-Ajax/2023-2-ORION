import connect from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { name, password } = await request.json();

    await connect();

    //adiciona um admin
    try {

        const newAdmin = new Admin({
            name,
            password
        });

        await newAdmin.save();

        return new NextResponse(JSON.stringify({
            message: "Admin created successfully",
            admin: newAdmin,
            success: true,
        }), { status: 201 })
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }

}