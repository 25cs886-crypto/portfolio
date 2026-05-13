import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../common/Button";

export const Hero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	return (
		<section className="min-h-screen flex items-center justify-center py-20 md:py-32 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			<div className="container-custom max-w-5xl">
				<motion.div
					className="text-center"
					variants={containerVariants}
					initial="hidden"
					animate="show"
				>
					{/* Greeting Badge */}
					<motion.div
						variants={itemVariants}
						className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
					>
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						<span className="text-primary font-semibold text-sm">
							Welcome to my portfolio
						</span>
					</motion.div>

					{/* Main Title */}
					<motion.h1
						variants={itemVariants}
						className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight"
					>
						Creative Full Stack
						<br />
						<span className="gradient-text">Developer & Designer</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
					>
						I build beautiful, responsive web applications with modern
						technologies. Specialized in React, Node.js, and cloud solutions.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
					>
						<Link to="/projects">
							<Button variant="primary" size="lg" className="group">
								View My Work
								<FiArrowRight
									className="group-hover:translate-x-2 transition-transform"
									size={20}
								/>
							</Button>
						</Link>
						<Link to="/contact">
							<Button variant="outline" size="lg">
								Get In Touch
							</Button>
						</Link>
					</motion.div>

					{/* Stats */}
					<motion.div
						variants={itemVariants}
						className="grid grid-cols-3 gap-8 max-w-xl mx-auto py-8 border-y border-border-color"
					>
						{[
							{ label: "Projects", value: "20+" },
							{ label: "Experience", value: "3+ yrs" },
							{ label: "Clients", value: "50+" },
						].map((stat, idx) => (
							<div key={idx} className="flex flex-col items-center">
								<p className="text-2xl md:text-3xl font-bold gradient-text">
									{stat.value}
								</p>
								<p className="text-text-secondary text-sm">{stat.label}</p>
							</div>
						))}
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center mt-12"
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<div className="flex flex-col items-center gap-2">
							<span className="text-sm text-text-secondary">
								Scroll to explore
							</span>
							<div className="w-6 h-10 border-2 border-border-color rounded-full flex items-start justify-center p-2">
								<div className="w-1 h-2 bg-primary rounded-full" />
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
