import { Resend } from "resend";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/src/emails/ContactEmail";
// FOR dev from:onboarding@resend.dev
// const resend = new Resend(process.env.RESEND_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
export async function POST(request: Request) {
	try {
		const { senderEmail, message } = await request.json();
		// await resend.emails.send({
		// 	from: "onboarding@resend.dev",
		// 	to: "cemrekur@gmail.com",
		// 	subject: "Portfolio Contact",
		// 	react: ContactEmail({ authorName: senderEmail, message }),
		// });
		await new Promise((res, rej) => {
			setTimeout(() => {
				rej("test");
			}, 1000);
		});
		const emailHtml = await render(ContactEmail({ authorName: senderEmail, message }));
		// await sgMail.send({
		// 	to: "cemrekur@gmail.com",
		// 	from: "cemrekur@gmail.com", // Verified sender email
		// 	subject: "Portfolio",
		// 	html: emailHtml,
		// });
		return NextResponse.json({ message: "Successfully sent an email" }, { status: 200 });
	} catch (error) {
		console.error("Failed to send email:", error);
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
