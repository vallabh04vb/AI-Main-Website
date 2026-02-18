import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/User"

interface RegisterData {
  email: string
  name: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const authService = {
  async register(data: RegisterData) {
    // Check if user already exists
    const existingUser = await User.findOne({ email: data.email })

    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10)

    // Create user
    const user = await User.create({
      email: data.email,
      name: data.name,
      password: hashedPassword,
      role: "USER",
    })

    // Generate token
    const token = this.generateToken(user.id, user.email, user.role)

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    }
  },

  async login(data: LoginData) {
    // Find user
    const user = await User.findOne({ email: data.email })

    if (!user) {
      throw new Error("Invalid email or password")
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(data.password, user.password)

    if (!isValidPassword) {
      throw new Error("Invalid email or password")
    }

    // Generate token
    const token = this.generateToken(user.id, user.email, user.role)

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    }
  },

  async getUserById(id: string) {
    return await User.findById(id).select("-password")
  },

  generateToken(userId: string, email: string, role: string): string {
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not configured")
    }

    return jwt.sign(
      { id: userId, email, role },
      jwtSecret,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
      }
    )
  },
}
