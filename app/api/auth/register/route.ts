import { NextResponse } from "next/server";
import prisma from '@/app/Libs/prismadb'
import bcrypt from 'bcrypt'

export async function POST(request:Request){
    const data = await request.json()

    const{
        username,
        email,
        password,
    } = data

    if(!username || !email || !password){
        return NextResponse.json({message:'All fields are required'},{status:500})
    }

    const checkMail = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(checkMail){
        return NextResponse.json({message:'Email is already registered'},{status:500})
    }

    const hashedPassword = await bcrypt.hash(password,12)
    try{

        await prisma.user.createMany({
            data:{
                username,
                email,
                hashedPassword
            }
        })
        return NextResponse.json({message:'Sucesfully registered'},{status:200})
    }catch(error){
        return NextResponse.json({message:'Something went wrong'},{status:500})
    }

}