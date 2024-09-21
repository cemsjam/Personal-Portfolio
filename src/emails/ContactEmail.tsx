import { Body, Container, Head, Hr, Html, Preview, Row, Section, Text } from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
	authorName?: string;
	message?: string;
}

export const ContactEmail = ({ authorName, message }: ContactEmailProps) => {
	const previewText = `Read ${authorName}'s contact message`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>

			<Body style={main}>
				<Container style={container}>
					<Section style={{ paddingBottom: "20px" }}>
						<Row>
							<Text style={heading}>Here's what {authorName} wrote</Text>
							<Text style={review}>“{message}”</Text>
						</Row>
					</Section>

					<Hr style={hr} />
				</Container>
			</Body>
		</Html>
	);
};

export default ContactEmail;
ContactEmail.PreviewProps = {
	authorName: "Customer",
	message: `“I would like to get in touch for an opportunity”`,
} as ContactEmailProps;
const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
	maxWidth: "100%",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const review = {
	...paragraph,
	padding: "24px",
	backgroundColor: "#f2f3f3",
	borderRadius: "4px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};
