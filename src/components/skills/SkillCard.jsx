import { motion } from "framer-motion";

export const SkillCard = ({ icon: Icon, name, level = 90, description }) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="card-hover"
			variants={containerVariants}
			whileHover={{ y: -5 }}
		>
			<div className="flex flex-col items-center">
				{/* Icon */}
				<motion.div
					className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-shadow"
					whileHover={{ scale: 1.1, rotate: 5 }}
				>
					<Icon size={32} />
				</motion.div>

				{/* Name */}
				<h3 className="text-lg font-semibold text-text-primary mb-2">{name}</h3>

				{/* Description */}
				{description && (
					<p className="text-sm text-text-secondary text-center mb-4">
						{description}
					</p>
				)}

				{/* Skill Level */}
				<div className="w-full">
					<div className="flex justify-between items-center mb-2">
						<span className="text-xs font-semibold text-text-secondary">
							Proficiency
						</span>
						<span className="text-xs font-bold text-primary">{level}%</span>
					</div>
					<div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-gradient-to-r from-primary to-secondary"
							initial={{ width: 0 }}
							whileInView={{ width: `${level}%` }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default SkillCard;
