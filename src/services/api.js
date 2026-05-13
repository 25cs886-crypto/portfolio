import axios from "axios";

const API_BASE_URL =
	import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			localStorage.removeItem("token");
			window.location.href = "/login";
		}
		return Promise.reject(error);
	},
);

// Auth Services
export const authService = {
	register: (data) => api.post("/auth/register", data),
	login: (data) => api.post("/auth/login", data),
	getProfile: () => api.get("/auth/profile"),
};

// Project Services
export const projectService = {
	getAll: (params) => api.get("/projects", { params }),
	getById: (id) => api.get(`/projects/${id}`),
	create: (data) =>
		api.post("/projects", data, {
			headers: { "Content-Type": "multipart/form-data" },
		}),
	update: (id, data) =>
		api.put(`/projects/${id}`, data, {
			headers: { "Content-Type": "multipart/form-data" },
		}),
	delete: (id) => api.delete(`/projects/${id}`),
};

// Contact Services
export const contactService = {
	submit: (data) => api.post("/contact", data),
	getAll: () => api.get("/contact"),
};

export default api;
