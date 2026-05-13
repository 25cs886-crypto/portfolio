import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "../common/Button";

export const ProjectCard = ({ project, onClick }) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="card-hover h-full flex flex-col"
			variants={containerVariants}
			whileHover={{ y: -8 }}
		>
			{/* Project Image */}
			<div
				className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-bg-tertiary cursor-pointer group"
				onClick={onClick}
			>
				{project.image ? (
					<motion.img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
						<span className="text-text-secondary">No Image</span>
					</div>
				)}
				{project.featured && (
					<div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
						Featured
					</div>
				)}
			</div>

			{/* Content */}
			<div className="flex-grow flex flex-col">
				{/* Title */}
				<h3 className="text-xl font-bold text-text-primary mb-2">
					{project.title}
				</h3>

				{/* Description */}
				<p className="text-text-secondary text-sm mb-4 line-clamp-3">
					{project.description}
				</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mb-4">
					{project.techStack?.slice(0, 3).map((tech, idx) => (
						<span
							key={idx}
							className="px-2 py-1 bg-bg-tertiary text-text-primary text-xs rounded-full font-medium"
						>
							{tech}
						</span>
					))}
					{project.techStack?.length > 3 && (
						<span className="px-2 py-1 bg-bg-tertiary text-text-secondary text-xs rounded-full">
							+{project.techStack.length - 3}
						</span>
					)}
				</div>

				{/* Actions */}
				<div className="flex gap-2 mt-auto">
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-bg-tertiary text-text-primary rounded-lg hover:bg-border-color transition-colors text-sm font-semibold"
						>
							<FiGithub size={16} />
							Code
						</a>
					)}
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold"
						>
							<FiExternalLink size={16} />
							Live Demo
						</a>
					)}
				</div>

				{/* View Details Button */}
				{!project.liveLink && (
					<Button
						variant="secondary"
						size="sm"
						onClick={onClick}
						className="w-full mt-2"
					>
						View Details
					</Button>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
