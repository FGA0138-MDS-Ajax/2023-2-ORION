import connect from '@/lib/mongodb'
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

const bcrypt = require('bcryptjs');

export async function POST(request: NextRequest) {
    const { email, password } = await request.json(); //Deestruturando o body da requisição

    await connect(); //chama a variável de conexão com o banco de dados da pasta lib

    const userExist = await User.findOne({email}); //validar se o email já está cadastrado

    if(userExist){
        return new NextResponse("O email já está em uso", {status: 400}) //retorna erro caso o email já esteja cadastrado
    }

    const hashedPassword = await bcrypt.hash(password, 5); //criptografando a senha

    try{
        // criando um novo usuário
        const newUser = new User({
            email,
            password: hashedPassword
        });

        // salvando o usuário no banco de dados
        await newUser.save();

        // retornando uma resposta de sucesso
        return new NextResponse(JSON.stringify({
            message: "User created successfully",
            success: true,
        }), {status: 201})

    } catch(error: any) {
        return new NextResponse(error, {status: 500})
    }
}