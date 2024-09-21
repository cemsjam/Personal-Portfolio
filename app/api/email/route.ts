import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/src/emails/ContactEmail";
// FOR dev from:onboarding@resend.dev
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { senderEmail, message } = await request.json();
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "cemrekur@gmail.com",
			subject: "Portfolio Contact",
			react: ContactEmail({ authorName: senderEmail, message }),
		});
		return NextResponse.json({ message: "Successfully sent an email" }, { status: 200 });
	} catch (error) {
		console.error("Failed to send email:", error);
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
