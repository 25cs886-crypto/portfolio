import { useState, useEffect } from "react";
import api from "../services/api";

export const useFetch = (url, options = {}) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const { data: responseData } = await api.get(url, options);
				setData(responseData.data || responseData);
				setError(null);
			} catch (err) {
				setError(err.response?.data?.message || err.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, options]);

	return { data, loading, error };
};
