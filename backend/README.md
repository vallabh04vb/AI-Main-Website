# Backend API

Express.js backend with TypeScript, Prisma, and JWT authentication.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `env.example` to `.env` and fill in your values.

3. **Set up MongoDB:**
   - Install MongoDB locally OR use MongoDB Atlas (cloud)
   - Update `MONGODB_URI` in `.env`
   - Database and collections will be created automatically on first connection

4. **Start development server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Health
- `GET /api/health` - Health check

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)
- `GET /api/contact/:id` - Get submission by ID (admin)
- `PATCH /api/contact/:id/status` - Update status (admin)

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

## Database

Uses MongoDB with Mongoose ODM. Models:
- User
- ContactSubmission
- Project

All models are in `src/models/` with TypeScript interfaces.

## Authentication

JWT-based authentication. Include token in Authorization header:
```
Authorization: Bearer <token>
```
