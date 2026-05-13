import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import Button from "../common/Button";
import { contactService } from "../../services/api";

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email format";
		}
		if (!formData.subject.trim()) newErrors.subject = "Subject is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		else if (formData.message.length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setLoading(true);
		try {
			await contactService.submit(formData);
			setSuccessMessage(
				"Message sent successfully! We'll get back to you soon.",
			);
			setFormData({ name: "", email: "", subject: "", message: "" });

			setTimeout(() => setSuccessMessage(""), 5000);
		} catch (error) {
			setErrors({
				submit:
					error.response?.data?.message ||
					"Failed to send message. Please try again.",
			});
		} finally {
			setLoading(false);
		}
	};

	const formFields = [
		{
			label: "Name",
			name: "name",
			type: "text",
			icon: FiUser,
			placeholder: "Your name",
		},
		{
			label: "Email",
			name: "email",
			type: "email",
			icon: FiMail,
			placeholder: "your@email.com",
		},
		{
			label: "Subject",
			name: "subject",
			type: "text",
			icon: FiMessageSquare,
			placeholder: "Message subject",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.form
			className="max-w-2xl mx-auto"
			onSubmit={handleSubmit}
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Success Message */}
			{successMessage && (
				<motion.div
					className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg animation-slideInDown"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					{successMessage}
				</motion.div>
			)}

			{/* Error Message */}
			{errors.submit && (
				<motion.div
					className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-600 rounded-lg"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					{errors.submit}
				</motion.div>
			)}

			{/* Form Fields */}
			<div className="space-y-5">
				{/* Text Inputs */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{formFields.map((field) => {
						const Icon = field.icon;
						return (
							<motion.div key={field.name} variants={itemVariants}>
								<label className="block text-sm font-semibold text-text-primary mb-2">
									{field.label}
								</label>
								<div className="relative">
									<Icon
										className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
										size={20}
									/>
									<input
										type={field.type}
										name={field.name}
										value={formData[field.name]}
										onChange={handleChange}
										placeholder={field.placeholder}
										className={`input-field pl-12 w-full ${
											errors[field.name]
												? "border-red-500 focus:ring-red-500"
												: ""
										}`}
									/>
								</div>
								{errors[field.name] && (
									<p className="text-red-500 text-sm mt-1">
										{errors[field.name]}
									</p>
								)}
							</motion.div>
						);
					})}
				</div>

				{/* Message Textarea */}
				<motion.div variants={itemVariants}>
					<label className="block text-sm font-semibold text-text-primary mb-2">
						Message
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Tell me about your project or inquiry..."
						rows={6}
						className={`input-field w-full resize-none ${
							errors.message ? "border-red-500 focus:ring-red-500" : ""
						}`}
					/>
					{errors.message && (
						<p className="text-red-500 text-sm mt-1">{errors.message}</p>
					)}
				</motion.div>

				{/* Submit Button */}
				<motion.div variants={itemVariants} className="pt-4">
					<Button
						type="submit"
						variant="primary"
						size="lg"
						loading={loading}
						className="w-full"
					>
						Send Message
					</Button>
				</motion.div>
			</div>
		</motion.form>
	);
};

export default ContactForm;
