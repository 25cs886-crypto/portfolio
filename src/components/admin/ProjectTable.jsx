import { motion } from "framer-motion";
import { FiEdit2, FiTrash2, FiStar } from "react-icons/fi";

export const ProjectTable = ({ projects, loading, onEdit, onDelete }) => {
	if (loading) {
		return (
			<div className="py-12 text-center">
				<div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
			</div>
		);
	}

	if (!projects || projects.length === 0) {
		return (
			<div className="text-center py-12">
				<p className="text-text-secondary text-lg">
					No projects found. Create your first project!
				</p>
			</div>
		);
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.05 },
		},
	};

	const rowVariants = {
		hidden: { opacity: 0, x: -20 },
		show: { opacity: 1, x: 0 },
	};

	return (
		<motion.div
			className="overflow-x-auto"
			variants={containerVariants}
			initial="hidden"
			animate="show"
		>
			<table className="w-full">
				<thead>
					<tr className="border-b border-border-color bg-bg-secondary">
						<th className="px-6 py-4 text-left font-semibold text-text-primary">
							Title
						</th>
						<th className="px-6 py-4 text-left font-semibold text-text-primary">
							Technologies
						</th>
						<th className="px-6 py-4 text-left font-semibold text-text-primary">
							Featured
						</th>
						<th className="px-6 py-4 text-right font-semibold text-text-primary">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project) => (
						<motion.tr
							key={project._id}
							className="border-b border-border-color hover:bg-bg-secondary transition-colors"
							variants={rowVariants}
						>
							<td className="px-6 py-4">
								<div className="flex items-center gap-3">
									{project.image && (
										<img
											src={project.image}
											alt={project.title}
											className="w-10 h-10 rounded-lg object-cover"
										/>
									)}
									<div>
										<p className="font-semibold text-text-primary">
											{project.title}
										</p>
										<p className="text-sm text-text-secondary line-clamp-1">
											{project.description}
										</p>
									</div>
								</div>
							</td>
							<td className="px-6 py-4">
								<div className="flex flex-wrap gap-2">
									{project.techStack?.slice(0, 2).map((tech, idx) => (
										<span
											key={idx}
											className="px-2 py-1 bg-bg-tertiary text-xs rounded-full font-medium text-text-primary"
										>
											{tech}
										</span>
									))}
									{project.techStack?.length > 2 && (
										<span className="px-2 py-1 bg-bg-tertiary text-xs rounded-full font-medium text-text-secondary">
											+{project.techStack.length - 2}
										</span>
									)}
								</div>
							</td>
							<td className="px-6 py-4">
								{project.featured ? (
									<div className="flex items-center gap-2 text-yellow-500 font-semibold">
										<FiStar size={16} />
										Featured
									</div>
								) : (
									<span className="text-text-secondary text-sm">Regular</span>
								)}
							</td>
							<td className="px-6 py-4">
								<div className="flex gap-2 justify-end">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => onEdit(project)}
										className="p-2 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors"
										title="Edit"
									>
										<FiEdit2 size={18} />
									</motion.button>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => {
											if (
												window.confirm(
													"Are you sure you want to delete this project?",
												)
											) {
												onDelete(project._id);
											}
										}}
										className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"
										title="Delete"
									>
										<FiTrash2 size={18} />
									</motion.button>
								</div>
							</td>
						</motion.tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default ProjectTable;
