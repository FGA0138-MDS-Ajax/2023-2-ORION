import { NextResponse } from "next/server";
import events from "@/app/api/database/events.json"

export async function GET(){
    return NextResponse.json(events, {status: 200})
    
}