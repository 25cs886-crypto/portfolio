import { verifyToken } from "../config/jwt.js";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) {
			return res
				.status(401)
				.json({ message: "Not authorized to access this route" });
		}

		const decoded = verifyToken(token);
		if (!decoded) {
			return res.status(401).json({ message: "Token is invalid or expired" });
		}

		req.user = await User.findById(decoded.id);
		if (!req.user) {
			return res.status(404).json({ message: "No user found with this id" });
		}

		next();
	} catch {
		res.status(401).json({ message: "Not authorized to access this route" });
	}
};

export const authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).json({
				message: "User role is not authorized to access this route",
			});
		}
		next();
	};
};
