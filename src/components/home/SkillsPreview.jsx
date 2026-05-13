import {
	FiCode,
	FiDatabase,
	FiServer,
	FiCpu,
	FiGitBranch,
	FiTrendingUp,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../skills/SkillCard";

export const SkillsPreview = () => {
	const skills = [
		{
			icon: FiCode,
			name: "Frontend",
			level: 95,
			description: "React, Vue, TypeScript, Tailwind CSS",
		},
		{
			icon: FiDatabase,
			name: "Backend",
			level: 90,
			description: "Node.js, Express, MongoDB, PostgreSQL",
		},
		{
			icon: FiServer,
			name: "Cloud & DevOps",
			level: 85,
			description: "AWS, Docker, CI/CD, Linux",
		},
		{
			icon: FiCpu,
			name: "Performance",
			level: 88,
			description: "Optimization, SEO, Caching",
		},
		{
			icon: FiGitBranch,
			name: "Version Control",
			level: 92,
			description: "Git, GitHub, Bitbucket, Collaboration",
		},
		{
			icon: FiTrendingUp,
			name: "Problem Solving",
			level: 94,
			description: "Algorithms, Architecture, Design Patterns",
		},
	];

	return (
		<section className="section">
			<div className="container-custom">
				<SectionTitle subtitle="What I Do" title="Skills & Expertise" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skills.map((skill, idx) => (
						<SkillCard key={idx} {...skill} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsPreview;
