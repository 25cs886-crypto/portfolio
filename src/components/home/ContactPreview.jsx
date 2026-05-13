import { Link } from "react-router-dom";
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export const ContactPreview = () => {
	const contactMethods = [
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
		<section className="section">
			<div className="container-custom">
				<SectionTitle subtitle="Get in Touch" title="Let's Work Together" />

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					{contactMethods.map((method, idx) => {
						const Icon = method.icon;
						return (
							<motion.a
								key={idx}
								href={method.href}
								variants={itemVariants}
								className="card-hover"
							>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
										<Icon size={24} />
									</div>
									<div>
										<p className="text-sm text-text-secondary">
											{method.label}
										</p>
										<p className="font-semibold text-text-primary">
											{method.value}
										</p>
									</div>
								</div>
							</motion.a>
						);
					})}
				</motion.div>

				<motion.div
					className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
					variants={itemVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					<h3 className="text-2xl font-bold text-text-primary mb-4">
						Ready to start your project?
					</h3>
					<p className="text-text-secondary mb-6">
						I'm always interested in hearing about new projects and
						opportunities.
					</p>
					<Link to="/contact">
						<Button variant="primary" size="lg" className="group">
							Send Me a Message
							<FiArrowRight
								className="group-hover:translate-x-2 transition-transform"
								size={20}
							/>
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactPreview;
