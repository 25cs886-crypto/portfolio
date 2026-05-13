import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";
import { useFetch } from "../../hooks/useFetch";
import Button from "../common/Button";

export const FeaturedProjects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const { data: projects, loading } = useFetch("/projects?featured=true");

	const displayProjects = Array.isArray(projects)
		? projects.slice(0, 6)
		: projects?.data?.slice(0, 6) || [];

	return (
		<section className="section bg-bg-secondary">
			<div className="container-custom">
				<SectionTitle subtitle="My Work" title="Featured Projects" />

				<ProjectGrid
					projects={displayProjects}
					loading={loading}
					onProjectClick={setSelectedProject}
				/>

				<div className="flex justify-center mt-12">
					<Link to="/projects">
						<Button variant="primary" size="lg" className="group">
							View All Projects
							<FiArrowRight
								className="group-hover:translate-x-2 transition-transform"
								size={20}
							/>
						</Button>
					</Link>
				</div>
			</div>

			<ProjectModal
				project={selectedProject}
				isOpen={!!selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
};

export default FeaturedProjects;
