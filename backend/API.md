# API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Health Check

#### GET /api/health
Check API status.

**Response:**
```json
{
  "success": true,
  "message": "Backend API is running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development"
}
```

---

### Contact

#### POST /api/contact/submit
Submit a contact form (public endpoint).

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "Acme Corp",
  "email": "john@example.com",
  "problem": "I need help with document processing automation."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out. We'll get back to you soon.",
  "data": {
    "id": "clx123..."
  }
}
```

#### GET /api/contact
Get all contact submissions (admin only).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "clx123...",
      "name": "John Doe",
      "company": "Acme Corp",
      "email": "john@example.com",
      "problem": "...",
      "status": "PENDING",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### GET /api/contact/:id
Get a specific submission (admin only).

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "clx123...",
    "name": "John Doe",
    "email": "john@example.com",
    "problem": "...",
    "status": "PENDING"
  }
}
```

#### PATCH /api/contact/:id/status
Update submission status (admin only).

**Request Body:**
```json
{
  "status": "REVIEWED"
}
```

**Valid statuses:** `PENDING`, `REVIEWED`, `CONTACTED`, `ARCHIVED`

---

### Authentication

#### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "clx123...",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "USER"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST /api/auth/login
Login user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "clx123...",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "USER"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### GET /api/auth/me
Get current authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "clx123...",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "USER"
  }
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Status Codes:**
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error
