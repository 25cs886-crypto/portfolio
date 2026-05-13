import { motion } from "framer-motion";

export const Loader = ({ fullScreen = false, message = "Loading..." }) => {
	const container = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	const item = {
		hidden: { scale: 0.8, opacity: 0 },
		show: { scale: 1, opacity: 1 },
	};

	return (
		<motion.div
			className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" : "py-12"}`}
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.div className="relative w-12 h-12" variants={item}>
				<motion.div
					className="absolute inset-0 rounded-full border-4 border-primary/20"
					animate={{ rotate: 360 }}
					transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
				/>
				<motion.div
					className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
					animate={{ rotate: -360 }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
				/>
			</motion.div>
			{message && (
				<motion.p className="text-text-primary font-medium" variants={item}>
					{message}
				</motion.p>
			)}
		</motion.div>
	);
};

export default Loader;
