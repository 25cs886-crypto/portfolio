import { motion } from "framer-motion";
import {
	FiMail,
	FiPhone,
	FiMapPin,
	FiLinkedin,
	FiGithub,
	FiTwitter,
} from "react-icons/fi";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";

export const Contact = () => {
	const contactInfo = [
		{
			icon: FiMail,
			label: "Email",
			value: "contact@example.com",
			href: "mailto:contact@example.com",
		},
		{
			icon: FiPhone,
			label: "Phone",
			value: "+1 (555) 123-4567",
			href: "tel:+15551234567",
		},
		{
			icon: FiMapPin,
			label: "Location",
			value: "San Francisco, CA",
			href: "#",
		},
	];

	const socialLinks = [
		{
			icon: FiGithub,
			label: "GitHub",
			href: "https://github.com",
		},
		{
			icon: FiLinkedin,
			label: "LinkedIn",
			href: "https://linkedin.com",
		},
		{
			icon: FiTwitter,
			label: "Twitter",
			href: "https://twitter.com",
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<section className="py-16 md:py-24 bg-bg-secondary">
				<div className="container-custom">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-2xl"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
							Get In Touch
						</h1>
						<p className="text-lg text-text-secondary">
							I'd love to hear from you. Whether you have a question or just
							want to say hi, feel free to get in touch!
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="section">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
						{/* Contact Info */}
						<motion.div
							className="lg:col-span-1"
							variants={containerVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-100px" }}
						>
							<SectionTitle
								subtitle="Contact"
								title="Get In Touch"
								center={false}
							/>

							<div className="space-y-6">
								{contactInfo.map((info, idx) => {
									const Icon = info.icon;
									return (
										<motion.a
											key={idx}
											href={info.href}
											variants={itemVariants}
											className="flex items-start gap-4 group"
										>
											<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0 mt-1">
												<Icon size={24} />
											</div>
											<div>
												<p className="text-sm text-text-secondary">
													{info.label}
												</p>
												<p className="font-semibold text-text-primary group-hover:text-primary transition-colors">
													{info.value}
												</p>
											</div>
										</motion.a>
									);
								})}

								{/* Social Links */}
								<div className="pt-6 border-t border-border-color">
									<p className="text-sm font-semibold text-text-primary mb-4">
										Follow Me
									</p>
									<div className="flex gap-4">
										{socialLinks.map((social, idx) => {
											const Icon = social.icon;
											return (
												<motion.a
													key={idx}
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													className="w-10 h-10 rounded-lg bg-bg-tertiary hover:bg-primary text-text-secondary hover:text-white transition-all flex items-center justify-center"
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.95 }}
													aria-label={social.label}
												>
													<Icon size={20} />
												</motion.a>
											);
										})}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							className="lg:col-span-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<ContactForm />
						</motion.div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Contact;
