import { createContext, useState, useEffect } from "react";
import { authService } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			getProfile();
		} else {
			setIsLoading(false);
		}
	}, []);

	const getProfile = async () => {
		try {
			const { data } = await authService.getProfile();
			setUser(data.user);
			setIsAuthenticated(true);
		} catch (error) {
			localStorage.removeItem("token");
			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);
		}
	};

	const login = async (email, password) => {
		const { data } = await authService.login({ email, password });
		localStorage.setItem("token", data.token);
		setUser(data.user);
		setIsAuthenticated(true);
		return data;
	};

	const register = async (name, email, password) => {
		const { data } = await authService.register({ name, email, password });
		localStorage.setItem("token", data.token);
		setUser(data.user);
		setIsAuthenticated(true);
		return data;
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				isLoading,
				login,
				register,
				logout,
				getProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
