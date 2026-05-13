import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ContactPreview from "../components/home/ContactPreview";

export const Home = () => {
	const sections = [
		{ id: "hero", component: Hero },
		{ id: "about", component: AboutPreview },
		{ id: "skills", component: SkillsPreview },
		{ id: "projects", component: FeaturedProjects },
		{ id: "contact", component: ContactPreview },
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{sections.map((section) => {
				const Component = section.component;
				return (
					<section key={section.id} id={section.id}>
						<Component />
					</section>
				);
			})}
		</motion.div>
	);
};

export default Home;
