import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    //todos in the body of the POST req
    const { todos } = await request.json();
    console.log(todos);

    //communicate with openai 

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n:1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as Mr.Shubham and say Welcome to the JARVIS TODO APP! Limit the response to 200 characters`,
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos. Count how many todos are there in each category such as TO DO, IN PROGRESS and DONE, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
            },
        ],
    });

    const {data} = response;

    console.log("Data is:", data);
    console.log(data.choices[0].message);

    return NextResponse.json(data.choices[0].message);
}