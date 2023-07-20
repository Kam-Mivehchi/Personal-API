import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
   request: Request,
   { params }: { params: { uid: string } }
) {
   try {

      const { uid } = params
      const user = await prisma.user.findUnique({
         where: {
            id: uid,
         },
         include: {
            projects: true,
            experience: true,
            education: true,
            skills: true,
            tags: true
         },
      })

      return NextResponse.json(user)

   } catch (error) {

   }
}