import { Resend } from "resend";
import Welcome from "@/src/emails/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
	console.log(process.env.RESEND_API_KEY);
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: "cemrekur@gmail.com",
		subject: "welcome !",
		react: Welcome(),
	});
}
