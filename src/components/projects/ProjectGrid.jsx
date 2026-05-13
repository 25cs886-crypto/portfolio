import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Loader from "../common/Loader";

export const ProjectGrid = ({ projects, loading, onProjectClick }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	if (loading) {
		return <Loader message="Loading projects..." />;
	}

	if (!projects || projects.length === 0) {
		return (
			<motion.div
				className="py-16 text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<p className="text-text-secondary text-lg">
					No projects found. Try adjusting your search filters.
				</p>
			</motion.div>
		);
	}

	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			variants={containerVariants}
			initial="hidden"
			animate="show"
		>
			{projects.map((project) => (
				<motion.div key={project._id || project.id} variants={itemVariants}>
					<ProjectCard
						project={project}
						onClick={() => onProjectClick(project)}
					/>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ProjectGrid;
