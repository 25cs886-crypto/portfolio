import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Button from "../components/common/Button";

export const NotFound = () => {
	const navigate = useNavigate();

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-bg-secondary to-bg-primary flex items-center justify-center px-4 py-20">
			{/* Background Decorations */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
					animate={{ y: [0, 30, 0] }}
					transition={{ duration: 7, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
					animate={{ y: [0, -30, 0] }}
					transition={{ duration: 7, repeat: Infinity }}
				/>
			</div>

			<motion.div
				className="relative z-10 text-center max-w-2xl"
				variants={containerVariants}
				initial="hidden"
				animate="show"
			>
				{/* 404 Text */}
				<motion.div className="mb-8" variants={itemVariants}>
					<div className="relative inline-block">
						<motion.span
							className="text-9xl md:text-10xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
							animate={{ scale: [1, 1.05, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							404
						</motion.span>
						<motion.div
							className="absolute inset-0 text-9xl md:text-10xl font-bold text-primary/10 blur-xl"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							404
						</motion.div>
					</div>
				</motion.div>

				{/* Heading */}
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
					variants={itemVariants}
				>
					Page Not Found
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-lg text-text-secondary mb-8 leading-relaxed"
					variants={itemVariants}
				>
					Oops! The page you're looking for doesn't exist or has been moved.
					Let's get you back on track.
				</motion.p>

				{/* Suggestions */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 py-8 px-6 bg-bg-secondary rounded-lg border border-border-color/50"
					variants={itemVariants}
				>
					{[
						{ label: "Return Home", action: () => navigate("/") },
						{ label: "View Projects", action: () => navigate("/projects") },
						{ label: "Contact Us", action: () => navigate("/contact") },
					].map((item, idx) => (
						<motion.button
							key={idx}
							onClick={item.action}
							className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{item.label}
						</motion.button>
					))}
				</motion.div>

				{/* CTA Button */}
				<motion.div variants={itemVariants}>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => navigate("/")}
						className="inline-block"
					>
						<Button
							variant="primary"
							className="flex items-center gap-2 px-8 py-3"
						>
							<FiHome size={20} />
							Go Back Home
						</Button>
					</motion.button>
				</motion.div>

				{/* Floating Elements */}
				<motion.div
					className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-primary/20 text-6xl font-bold"
					animate={{ rotate: 360 }}
					transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
				>
					?
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NotFound;
