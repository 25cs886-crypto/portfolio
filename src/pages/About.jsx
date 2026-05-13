import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import SkillCard from "../components/skills/SkillCard";
import {
	FiCode,
	FiDatabase,
	FiServer,
	FiCpu,
	FiGitBranch,
	FiTrendingUp,
} from "react-icons/fi";

export const About = () => {
	const skills = [
		{
			icon: FiCode,
			name: "Frontend Development",
			level: 95,
			description: "React, Vue, TypeScript, Tailwind CSS, Responsive Design",
		},
		{
			icon: FiDatabase,
			name: "Database Management",
			level: 90,
			description: "MongoDB, PostgreSQL, Firebase, Data Modeling",
		},
		{
			icon: FiServer,
			name: "Backend Development",
			level: 90,
			description: "Node.js, Express, REST APIs, GraphQL",
		},
		{
			icon: FiServer,
			name: "Cloud & DevOps",
			level: 85,
			description: "AWS, Docker, CI/CD Pipelines, Linux Server Management",
		},
		{
			icon: FiGitBranch,
			name: "Version Control",
			level: 92,
			description: "Git, GitHub, Bitbucket, Team Collaboration",
		},
		{
			icon: FiTrendingUp,
			name: "Problem Solving",
			level: 94,
			description: "Algorithms, Design Patterns, System Architecture",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

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
						className="max-w-3xl mx-auto"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
							About Me
						</h1>
						<p className="text-lg text-text-secondary leading-relaxed mb-4">
							I'm a passionate full-stack developer with 3+ years of experience
							building web applications. I love solving complex problems and
							creating beautiful, user-friendly solutions that make a real
							impact.
						</p>
						<p className="text-lg text-text-secondary leading-relaxed">
							My journey in web development started with a curiosity about how
							things work on the internet. Today, I'm dedicated to creating
							products that are not just functional but also delightful to use.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Experience Timeline */}
			<section className="section">
				<div className="container-custom max-w-3xl">
					<SectionTitle subtitle="Background" title="My Journey" center />

					<motion.div
						className="space-y-8"
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
					>
						{[
							{
								year: "2024 - Present",
								title: "Senior Full Stack Developer",
								company: "Tech Company",
								description:
									"Leading development of scalable web applications with React and Node.js",
							},
							{
								year: "2022 - 2024",
								title: "Full Stack Developer",
								company: "Web Solutions Inc",
								description:
									"Developed and maintained multiple client projects using modern web technologies",
							},
							{
								year: "2021 - 2022",
								title: "Frontend Developer",
								company: "Startup Hub",
								description:
									"Built responsive user interfaces and interactive web applications",
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								className="card-hover"
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: idx * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="flex gap-4">
									<div className="flex flex-col items-center">
										<div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-bg-primary">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										{idx < 2 && (
											<div className="w-1 h-12 bg-border-color mt-4" />
										)}
									</div>
									<div className="pb-4">
										<div className="text-sm font-semibold text-primary">
											{item.year}
										</div>
										<h3 className="text-xl font-bold text-text-primary mt-1">
											{item.title}
										</h3>
										<p className="text-text-secondary font-medium">
											{item.company}
										</p>
										<p className="text-text-secondary mt-2">
											{item.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="section bg-bg-secondary">
				<div className="container-custom">
					<SectionTitle subtitle="Expertise" title="Skills & Technologies" />

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
					>
						{skills.map((skill, idx) => (
							<SkillCard key={idx} {...skill} />
						))}
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default About;
