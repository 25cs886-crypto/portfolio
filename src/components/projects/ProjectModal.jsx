import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";

export const ProjectModal = ({ project, isOpen, onClose }) => {
	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.95, y: 20 },
		visible: { opacity: 1, scale: 1, y: 0 },
	};

	return (
		<AnimatePresence>
			{isOpen && project && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					onClick={onClose}
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						aria-hidden="true"
					/>

					{/* Modal */}
					<motion.div
						className="relative bg-bg-primary rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
						variants={modalVariants}
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={onClose}
							className="absolute top-4 right-4 z-10 p-2 bg-bg-tertiary hover:bg-border-color rounded-lg transition-colors"
							aria-label="Close modal"
						>
							<FiX size={24} />
						</motion.button>

						{/* Project Image */}
						{project.image && (
							<div className="w-full h-64 md:h-96 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
								/>
							</div>
						)}

						{/* Content */}
						<div className="p-6 md:p-8">
							{/* Header */}
							<div className="mb-6">
								{project.featured && (
									<span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
										Featured Project
									</span>
								)}
								<h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
									{project.title}
								</h2>
								<p className="text-text-secondary text-lg">
									{project.description}
								</p>
							</div>

							{/* Technologies */}
							{project.techStack && project.techStack.length > 0 && (
								<div className="mb-6">
									<h3 className="text-lg font-semibold text-text-primary mb-3">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-3">
										{project.techStack.map((tech, idx) => (
											<span
												key={idx}
												className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-lg font-semibold text-sm border border-primary/20"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Links */}
							<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-color">
								{project.githubLink && (
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 px-6 py-3 bg-bg-tertiary text-text-primary rounded-lg hover:bg-border-color transition-colors font-semibold"
									>
										<FiGithub size={20} />
										View Code
									</a>
								)}
								{project.liveLink && (
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all font-semibold"
									>
										<FiExternalLink size={20} />
										Live Demo
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ProjectModal;
