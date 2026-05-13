import Contact from "../models/Contact.js";
import { sendEmail } from "../services/mailService.js";

// Get all contact messages
export const getContacts = async (req, res, next) => {
	try {
		const contacts = await Contact.find().sort({ createdAt: -1 });
		res.status(200).json({
			success: true,
			count: contacts.length,
			data: contacts,
		});
	} catch (error) {
		next(error);
	}
};

// Create contact message
export const createContact = async (req, res, next) => {
	try {
		const { name, email, message } = req.body;

		// Validation
		if (!name || !email || !message) {
			return res
				.status(400)
				.json({ message: "Please provide all required fields" });
		}

		const contact = new Contact({
			name,
			email,
			message,
		});

		await contact.save();

		// Send email notification
		try {
			await sendEmail({
				to: process.env.ADMIN_EMAIL,
				subject: `New Contact Message from ${name}`,
				text: `You have a new contact message from ${name} (${email}):\n\n${message}`,
			});
		} catch (emailError) {
			console.error("Email error:", emailError);
			// Don't fail the request if email fails
		}

		res.status(201).json({
			success: true,
			message: "Message sent successfully",
			data: contact,
		});
	} catch (error) {
		next(error);
	}
};
