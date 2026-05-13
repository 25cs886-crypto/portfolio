import User from "../models/User.js";
import { generateToken } from "../config/jwt.js";

// Register user
export const register = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = new User({ name, email, password });
		await user.save();

		const token = generateToken(user._id);
		res.status(201).json({
			success: true,
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		next(error);
	}
};

// Login user
export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Please provide email and password" });
		}

		const user = await User.findOne({ email }).select("+password");
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isMatch = await user.matchPassword(password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = generateToken(user._id);
		res.status(200).json({
			success: true,
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		next(error);
	}
};

// Get profile
export const getProfile = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		res.status(200).json({
			success: true,
			user,
		});
	} catch (error) {
		next(error);
	}
};
