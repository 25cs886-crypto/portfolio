import { motion } from "framer-motion";

export const SectionTitle = ({
	title,
	subtitle,
	gradient = true,
	center = true,
	className = "",
	variant = "default",
}) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const variants = {
		default: "text-4xl md:text-5xl font-bold",
		large: "text-5xl md:text-6xl font-bold",
		small: "text-3xl md:text-4xl font-bold",
	};

	return (
		<motion.div
			className={`${center ? "text-center" : ""} mb-12`}
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-100px" }}
		>
			{subtitle && (
				<motion.p
					className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm"
					variants={item}
				>
					{subtitle}
				</motion.p>
			)}

			<motion.h2
				className={`${variants[variant]} ${gradient ? "gradient-text" : "text-text-primary"} ${className}`}
				variants={item}
			>
				{title}
			</motion.h2>
		</motion.div>
	);
};

export default SectionTitle;
