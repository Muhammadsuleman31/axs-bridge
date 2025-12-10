import { Resend } from "resend";

const resend = new Resend({ apiKey: process.env.RESEND_API_KEY });

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `New Contact Form Submission`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      { status: 500 }
    );
  }
}
