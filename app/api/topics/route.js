import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"


export const GET = async () => {
  try {
    await connectMongoDB()

    const contacts = await Topic.find()

    return new NextResponse(JSON.stringify(contacts), { status: 200 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}


export const POST = async (request) => {
  const body = await request.json()

  const newTopic = new Topic(body)
  console.log(newTopic)
  try {
    await connectMongoDB()

    await newTopic.save()

    return new NextResponse('Wiadomość została utworzona', { status: 201 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}

