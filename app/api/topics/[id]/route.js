import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export const DELETE = async (request, { params }) => {
  const { id } = params;
 
  try {
    await connectMongoDB();

    await Topic.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectMongoDB();

    const message = await Topic.findById(id);

    return new NextResponse(JSON.stringify(message), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};;
export const PUT = async (request, { params }) => {
  const { id } = params;
  const {newTitle:title, newDescription:description}=await request.json()
  try {
    await connectMongoDB();

    await Topic.findByIdAndUpdate(id,{title,description});

    return new NextResponse("Message Update", { status: 200 });
  } catch (err) {
    return new NextResponse("Update Error", { status: 500 });
  }
};