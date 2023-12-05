// import { NextRequest, NextResponse } from "next/server";
// import Event from "@/models/Event"
// import User from "@/models/User"
// import connect from '@/lib/mongodb'


// // Se registrando em um evento

// export async function PUT(req: NextRequest) {
    
//     const data = await req.json()
//     const eventId = data.eventid
//     const userId = data.userid
//     await connect();
//     const eventExist = await Event.findOne({_id:eventId});

//     if(!eventExist){
//         return new NextResponse("Evento não existe", {status: 400}) //retorna erro caso o evento não exista
//     }
//     else{
//         for(const participante of eventExist.participants){
//             if (participante == userId){
//                 console.log("Ja euras")
//                 return new NextResponse("Já registrado", {status: 409}) //retorna erro caso o usuário já esteja cadastrado
//             }
//         }
//     }
    
//     try {
//         // Adiciona o participante no evento
//         const event = await Event.findByIdAndUpdate(eventId, {
//             $push: {participants: userId}
//         }, {new: true});
//         await event.save();

//         // Adiciona o evento no participante
//         const user = await User.findByIdAndUpdate(userId, {
//             $push: {events: eventId}
//         }, {new: true});

//         await user.save();

//         return new NextResponse(JSON.stringify({
//             message: "Participant added successfully",
//             OldEvent: event,
//             success: true,
//         }), {status: 201})
        
//     } catch(error: any) {
//         return new NextResponse(error, {status: 500})
//     }
// }