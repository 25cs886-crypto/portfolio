import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export const AboutPreview = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
	};

	return (
		<section className="section bg-bg-secondary">
			<div className="container-custom">
				<SectionTitle
					subtitle="About Me"
					title="Get to Know Me Better"
					center={false}
				/>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					{/* Image */}
					<motion.div variants={itemVariants} className="order-2 md:order-1">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30" />
							<img
								src="https://via.placeholder.com/400x400"
								alt="Profile"
								className="relative w-full rounded-2xl shadow-xl"
							/>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						variants={itemVariants}
						className="order-1 md:order-2 space-y-6"
					>
						<p className="text-lg text-text-secondary leading-relaxed">
							I'm a passionate full-stack developer with a keen eye for design.
							I love transforming complex problems into simple, elegant
							solutions.
						</p>

						<p className="text-lg text-text-secondary leading-relaxed">
							With experience in modern web technologies, I create performant,
							scalable applications that deliver real value to users.
						</p>

						<div className="space-y-3 pt-4">
							{[
								"Full Stack Development",
								"UI/UX Design",
								"Cloud Solutions",
								"API Development",
							].map((skill, idx) => (
								<motion.div
									key={idx}
									className="flex items-center gap-3"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.1 }}
									viewport={{ once: true }}
								>
									<div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
									<span className="text-text-primary font-medium">{skill}</span>
								</motion.div>
							))}
						</div>

						<Link to="/about">
							<Button variant="primary" size="lg" className="group mt-8">
								Learn More About Me
								<FiArrowRight
									className="group-hover:translate-x-2 transition-transform"
									size={20}
								/>
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutPreview;
