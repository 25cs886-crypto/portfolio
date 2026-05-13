import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{
			title: "Navigation",
			links: [
				{ name: "Home", path: "/" },
				{ name: "About", path: "/about" },
				{ name: "Projects", path: "/projects" },
				{ name: "Contact", path: "/contact" },
			],
		},
		{
			title: "Legal",
			links: [
				{ name: "Privacy Policy", path: "#" },
				{ name: "Terms of Service", path: "#" },
			],
		},
	];

	const socialLinks = [
		{ icon: FiGithub, href: "#", label: "GitHub" },
		{ icon: FiLinkedin, href: "#", label: "LinkedIn" },
		{ icon: FiTwitter, href: "#", label: "Twitter" },
		{ icon: FiMail, href: "mailto:contact@example.com", label: "Email" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<footer className="bg-bg-secondary dark:bg-bg-secondary border-t border-border-color mt-16 md:mt-24">
			<div className="container-custom py-12 md:py-16">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{/* Brand Section */}
					<motion.div variants={itemVariants}>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
								<span className="text-white font-bold">V</span>
							</div>
							<span className="font-bold text-lg text-text-primary">
								Vishwa
							</span>
						</div>
						<p className="text-text-secondary text-sm">
							Full Stack Developer passionate about building amazing web
							experiences.
						</p>
					</motion.div>

					{/* Footer Links */}
					{footerLinks.map((section, idx) => (
						<motion.div key={idx} variants={itemVariants}>
							<h4 className="font-semibold text-text-primary mb-4">
								{section.title}
							</h4>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.path}>
										<Link
											to={link.path}
											className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}

					{/* Social Links */}
					<motion.div variants={itemVariants}>
						<h4 className="font-semibold text-text-primary mb-4">Follow</h4>
						<div className="flex gap-4">
							{socialLinks.map((social, idx) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={idx}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-primary hover:bg-primary hover:text-white transition-colors duration-200 text-text-secondary"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										aria-label={social.label}
									>
										<Icon size={20} />
									</motion.a>
								);
							})}
						</div>
					</motion.div>
				</motion.div>

				{/* Bottom Section */}
				<motion.div
					className="border-t border-border-color pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
					variants={itemVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<p className="text-text-secondary text-sm text-center md:text-left">
						&copy; {currentYear} Vishwa Portfolio. All rights reserved.
					</p>
					<p className="text-text-secondary text-sm">
						Crafted with <span className="text-red-500">❤</span> by Vishwa
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
