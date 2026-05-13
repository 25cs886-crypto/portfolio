import nodemailer from "nodemailer";

// Configure email service
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export const sendEmail = async (options) => {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: options.to,
		subject: options.subject,
		text: options.text,
		html: options.html,
	};

	return transporter.sendMail(mailOptions);
};
