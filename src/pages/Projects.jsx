import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectModal from "../components/projects/ProjectModal";
import { useFetch } from "../hooks/useFetch";

export const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const { data: projects, loading } = useFetch("/projects");

	const projectList = Array.isArray(projects) ? projects : projects?.data || [];

	const categories = useMemo(() => {
		const cats = new Set();
		projectList.forEach((project) => {
			if (project.category) cats.add(project.category);
		});
		return Array.from(cats).sort();
	}, [projectList]);

	const filteredProjects = useMemo(() => {
		return projectList.filter((project) => {
			const matchesCategory =
				selectedCategory === "all" || project.category === selectedCategory;
			const matchesSearch =
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	}, [projectList, selectedCategory, searchQuery]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<section className="py-16 md:py-24 bg-bg-secondary">
				<div className="container-custom">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
							My Projects
						</h1>
						<p className="text-lg text-text-secondary max-w-2xl">
							A collection of projects I've built showcasing my skills in web
							development, design, and problem-solving. Each project represents
							my commitment to creating high-quality, user-centric solutions.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="section">
				<div className="container-custom">
					<ProjectFilter
						categories={categories}
						selectedCategory={selectedCategory}
						onCategoryChange={setSelectedCategory}
						searchQuery={searchQuery}
						onSearchChange={setSearchQuery}
					/>

					<ProjectGrid
						projects={filteredProjects}
						loading={loading}
						onProjectClick={setSelectedProject}
					/>
				</div>
			</section>

			{/* Project Modal */}
			<ProjectModal
				project={selectedProject}
				isOpen={!!selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</motion.div>
	);
};

export default Projects;
