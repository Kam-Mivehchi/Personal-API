import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
interface IUserRequest extends Request {
   query: string
}
export async function GET(
   request: IUserRequest,
   { params }: { params: { uid: string } }
) {
   try {
      const { searchParams } = new URL(request.url)
      console.log(searchParams)
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