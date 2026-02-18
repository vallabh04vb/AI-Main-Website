# name.ai - Applied AI & Automation Studio

A complete full-stack application with separate frontend and backend, built for a modern AI solutions agency.

## Project Structure

```
name.ai/
├── frontend/          # Next.js 14 frontend application
├── backend/          # Express.js backend API
├── package.json       # Root package.json for managing both apps
└── README.md          # This file
```

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Backend
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT
- **Email:** Resend
- **Validation:** Zod

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (local or cloud)
- Resend account (for emails)
- Calendly account (for demo booking)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**

   **Backend** (`backend/.env`):
   ```env
   PORT=3001
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/name_ai
   # Or for MongoDB Atlas: mongodb+srv://user:password@cluster.mongodb.net/name_ai
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=7d
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=hello@name.ai
   FRONTEND_URL=http://localhost:3000
   CALENDLY_URL=https://calendly.com/your-username/demo
   ```

   **Frontend** (`frontend/.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/demo
   ```

3. **Set up MongoDB:**
   
   **Option 1: Local MongoDB**
   - Install MongoDB locally
   - Start MongoDB service
   - Update `MONGODB_URI` in `backend/.env`
   
   **Option 2: MongoDB Atlas (Cloud)**
   - Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and get connection string
   - Update `MONGODB_URI` in `backend/.env`
   
   The database will be automatically created on first connection.

4. **Run both frontend and backend:**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API on http://localhost:3001
   - Frontend on http://localhost:3000

### Running Separately

**Backend only:**
```bash
cd backend
npm install
npm run dev
```

**Frontend only:**
```bash
cd frontend
npm install
npm run dev
```

## Backend API

### Endpoints

#### Health Check
- `GET /api/health` - Check API status

#### Contact
- `POST /api/contact/submit` - Submit contact form (public)
- `GET /api/contact` - Get all submissions (admin)
- `GET /api/contact/:id` - Get submission by ID (admin)
- `PATCH /api/contact/:id/status` - Update submission status (admin)

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (authenticated)

### Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Database Schema

The backend uses Mongoose with MongoDB. Models include:
- **User** - User accounts with authentication
- **ContactSubmission** - Contact form submissions
- **Project** - Project management (for future use)

All models are defined in `backend/src/models/` with TypeScript interfaces.

## Development

### Backend Development

```bash
cd backend
npm run dev          # Start with hot reload
npm run build        # Build for production
```

For MongoDB GUI, use MongoDB Compass or MongoDB Atlas web interface.

### Frontend Development

```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## Deployment

### Backend Deployment

1. Set up MongoDB database:
   - Use MongoDB Atlas (recommended) or self-hosted MongoDB
   - Get connection string
   - Update `MONGODB_URI` in production environment
2. Deploy to your hosting platform (Railway, Render, AWS, etc.)
3. No migrations needed - MongoDB creates collections automatically

### Frontend Deployment

1. Set `NEXT_PUBLIC_API_URL` to your backend URL
2. Deploy to Vercel (recommended) or your hosting platform

### Environment Variables

Make sure to set all required environment variables in your deployment platform.

## Features

### Frontend
- ✅ Responsive design
- ✅ SEO-optimized
- ✅ Contact form integration
- ✅ Calendly booking integration
- ✅ Subtle animations

### Backend
- ✅ RESTful API
- ✅ JWT authentication
- ✅ Database integration (Prisma)
- ✅ Email notifications
- ✅ Input validation (Zod)
- ✅ Error handling
- ✅ CORS configuration
- ✅ Security headers (Helmet)

## Future Enhancements

The codebase is structured to easily add:
- Admin dashboard
- Project management
- File uploads
- Real-time notifications
- Analytics
- API rate limiting
- Caching layer

## License

Private - All rights reserved
# AI-Main-Website
