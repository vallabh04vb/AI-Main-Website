# Quick Start Guide

Get the application running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm run install:all
```

This installs dependencies for root, frontend, and backend.

## Step 2: Set Up MongoDB

**Option 1: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/name_ai
   ```

**Option 2: MongoDB Atlas (Cloud - Recommended)**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/name_ai
   ```

No database initialization needed - MongoDB creates collections automatically!

## Step 3: Configure Environment Variables

### Backend (`backend/.env`)
```env
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/name_ai
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=hello@name.ai
FRONTEND_URL=http://localhost:3000
```

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/demo
```

## Step 4: Start Development Servers

```bash
npm run dev
```

This starts both:
- Backend: http://localhost:3001
- Frontend: http://localhost:3000

## Step 5: Test the Application

1. Open http://localhost:3000
2. Navigate to the Contact page
3. Submit the contact form
4. Check your email (if Resend is configured)

## Troubleshooting

### Database Connection Issues
- Verify MongoDB is running (if local)
- Check MONGODB_URI format
- For MongoDB Atlas: Ensure IP whitelist includes your IP (0.0.0.0/0 for development)
- Check network connectivity

### API Connection Issues
- Verify backend is running on port 3001
- Check NEXT_PUBLIC_API_URL in frontend/.env.local
- Check CORS settings in backend

### Email Not Sending
- Verify RESEND_API_KEY is set
- Check Resend dashboard for errors
- Update "from" email in backend/src/services/contactService.ts
