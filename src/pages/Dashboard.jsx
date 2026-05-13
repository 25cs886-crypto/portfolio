import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiPlus, FiBarChart3, FiFolder } from "react-icons/fi";
import Sidebar from "../components/layout/Sidebar";
import AddProjectForm from "../components/admin/AddProjectForm";
import EditProjectForm from "../components/admin/EditProjectForm";
import ProjectTable from "../components/admin/ProjectTable";
import Button from "../components/common/Button";
import { projectService } from "../services/api";

export const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [view, setView] = useState("projects");
	const [editingProject, setEditingProject] = useState(null);
	const [showAddForm, setShowAddForm] = useState(false);

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = async () => {
		try {
			setLoading(true);
			const { data } = await projectService.getAll();
			setProjects(Array.isArray(data) ? data : data.data || []);
		} catch (error) {
			console.error("Failed to fetch projects:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleAddSuccess = () => {
		setShowAddForm(false);
		fetchProjects();
	};

	const handleEditSuccess = () => {
		setEditingProject(null);
		fetchProjects();
	};

	const handleDelete = async (id) => {
		try {
			await projectService.delete(id);
			setProjects((prev) => prev.filter((p) => p._id !== id));
		} catch (error) {
			console.error("Failed to delete project:", error);
		}
	};

	const stats = [
		{ label: "Total Projects", value: projects.length, icon: FiFolder },
		{
			label: "Featured",
			value: projects.filter((p) => p.featured).length,
			icon: FiBarChart3,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<div className="min-h-screen bg-bg-secondary flex">
			{/* Sidebar */}
			<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

			{/* Main Content */}
			<motion.div
				className="flex-1 flex flex-col"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				{/* Header */}
				<header className="sticky top-0 z-40 bg-bg-primary border-b border-border-color">
					<div className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setSidebarOpen(!sidebarOpen)}
							className="md:hidden p-2 hover:bg-bg-tertiary rounded-lg"
						>
							<FiMenu size={24} />
						</motion.button>

						<h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>

						<div className="w-12" />
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 overflow-auto p-4 md:p-8">
					{/* Stats */}
					{view === "projects" && !showAddForm && !editingProject && (
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
							variants={containerVariants}
							initial="hidden"
							animate="show"
						>
							{stats.map((stat, idx) => {
								const Icon = stat.icon;
								return (
									<motion.div
										key={idx}
										className="bg-bg-secondary rounded-lg p-6 border border-border-color"
										variants={itemVariants}
									>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-text-secondary text-sm font-medium">
													{stat.label}
												</p>
												<p className="text-3xl font-bold text-text-primary mt-2">
													{stat.value}
												</p>
											</div>
											<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
												<Icon size={24} />
											</div>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					)}

					{/* Projects Section */}
					{view === "projects" && !showAddForm && !editingProject && (
						<motion.div
							className="bg-bg-primary rounded-lg p-6 md:p-8 border border-border-color"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-bold text-text-primary">
									Projects
								</h2>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => setShowAddForm(true)}
									className="flex items-center gap-2"
								>
									<Button variant="primary" className="flex items-center gap-2">
										<FiPlus size={20} />
										Add Project
									</Button>
								</motion.button>
							</div>

							<ProjectTable
								projects={projects}
								loading={loading}
								onEdit={setEditingProject}
								onDelete={handleDelete}
							/>
						</motion.div>
					)}

					{/* Add Form */}
					{showAddForm && (
						<AddProjectForm
							onSuccess={handleAddSuccess}
							onCancel={() => setShowAddForm(false)}
						/>
					)}

					{/* Edit Form */}
					{editingProject && (
						<EditProjectForm
							project={editingProject}
							onSuccess={handleEditSuccess}
							onCancel={() => setEditingProject(null)}
						/>
					)}
				</main>
			</motion.div>
		</div>
	);
};

export default Dashboard;
