import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Name, email, and message are required." }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: "New Contact Submission",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ message: "Sending failed", error }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Email sent!", data }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Server error:", err);
    return new Response(
      JSON.stringify({ message: "Server error", err }),
      { status: 500 }
    );
  }
}
