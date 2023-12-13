import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// interface ContactRequest extends NextRequest {
//   body: {
//
//   };
// }
export type ContactAPIPostHandler = (
  req: NextRequest,
  res: NextResponse
) => void;
export const POST: ContactAPIPostHandler = async (req) => {
  const body = await req.json();
  const { email, name, message } = body as any;
  const user = process.env.user;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.pass,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "tomskill527@gmail.com",
      replyTo: email,
      subject: `Contact from submission from: ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    });
    console.log("Message sent:", mail.messageId);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not send message." },
      { status: 500 }
    );
  }
};
