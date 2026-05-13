/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from "react";
import { authService } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const getProfile = useCallback(async () => {
		setIsLoading(true);
		try {
			const { data } = await authService.getProfile();
			setUser(data.user);
			setIsAuthenticated(true);
		} catch {
			localStorage.removeItem("token");
			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			getProfile();
		}
		// Dependency array empty to avoid infinite loops. getProfile is stable via useCallback.
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

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
