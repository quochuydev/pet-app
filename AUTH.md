# Authentication & Admin Dashboard

This document describes the PIN-based authentication system and admin dashboard.

## Features

### 1. Success Page After Booking
After successfully booking an appointment, users are redirected to a beautiful success page showing:
- Confirmation checkmark
- Booking ID
- All appointment details
- What happens next information
- Contact information for questions

**URL**: `/booking/success` (with query parameters)

### 2. PIN-Based Admin Authentication
Admins can log in using a PIN code stored in environment variables.

**Default PIN**: `123456` (configurable in `.env.local`)

**Login URL**: http://localhost:3000/admin/login

### 3. Protected Admin Dashboard
View all appointment bookings with:
- Total appointments count
- Detailed appointment cards
- Contact information
- Pet details
- Appointment date/time
- Service type
- Notes
- Refresh functionality
- Logout button

**Dashboard URL**: http://localhost:3000/admin/dashboard (requires authentication)

## Configuration

### Environment Variables (.env.local)

```env
# Admin PIN (change in production!)
ADMIN_PIN=123456

# JWT Secret (change to a strong random string in production!)
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

⚠️ **Important**: Change these values in production!

## API Endpoints

### Authentication

#### POST /api/auth/login
Login with PIN code.

**Request:**
```json
{
  "pin": "123456"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful"
}
```

**Response (Error):**
```json
{
  "error": "Invalid PIN"
}
```

**Cookie Set**: `auth-token` (HTTP-only, 24 hours)

#### POST /api/auth/logout
Logout and clear authentication token.

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Appointments

#### GET /api/appointments
Retrieve all appointments (requires authentication).

**Headers:**
- Cookie: `auth-token=<jwt-token>`

**Response (Success):**
```json
{
  "success": true,
  "appointments": [
    {
      "id": 1,
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "(555) 123-4567",
      "petName": "Buddy",
      "petType": "dog",
      "petAge": "3 years",
      "preferredDate": "2024-12-15",
      "preferredTime": "10:00",
      "serviceType": "checkup",
      "notes": "Annual checkup",
      "createdAt": "2024-12-06T08:00:00Z",
      "updatedAt": "2024-12-06T08:00:00Z"
    }
  ]
}
```

**Response (Unauthorized):**
```json
{
  "error": "Unauthorized. Please login first."
}
```

## Security Features

### JWT Tokens
- Tokens are signed with HS256 algorithm
- Stored in HTTP-only cookies (protected from XSS)
- 24-hour expiration
- SameSite=Lax for CSRF protection

### Authentication Flow
1. User enters PIN on login page
2. Backend validates PIN against environment variable
3. JWT token generated and set in HTTP-only cookie
4. Protected routes verify token before allowing access
5. Invalid/expired tokens redirect to login page

### Protected Routes
- `/admin/dashboard` - Requires valid JWT token
- GET `/api/appointments` - Requires valid JWT token

### Public Routes
- `/booking` - Appointment booking form (no auth required)
- POST `/api/appointments` - Create appointment (no auth required)
- `/admin/login` - Login page

## Usage

### For Users (Public)

1. **Book an Appointment**:
   - Visit http://localhost:3000/booking
   - Fill out the form
   - Submit
   - See success page with confirmation

### For Admins

1. **Login**:
   - Visit http://localhost:3000/admin/login
   - Enter PIN: `123456` (or your configured PIN)
   - Click "Login"

2. **View Appointments**:
   - After login, you'll be redirected to the dashboard
   - See all bookings with full details
   - Click "Refresh" to reload data
   - Click "Logout" when done

3. **Logout**:
   - Click the "Logout" button in the dashboard header
   - You'll be redirected to the login page
   - Your session will be cleared

## Security Best Practices for Production

⚠️ **Before deploying to production:**

1. **Change Default PIN**:
   ```env
   ADMIN_PIN=your-strong-pin-here
   ```

2. **Use Strong JWT Secret**:
   ```env
   JWT_SECRET=use-a-long-random-string-at-least-32-characters
   ```

3. **Enable HTTPS**:
   - JWT cookies are set with `secure: true` in production
   - Always use HTTPS in production

4. **Consider Additional Security**:
   - Add rate limiting to login endpoint
   - Implement account lockout after failed attempts
   - Add IP whitelisting for admin routes
   - Use more complex authentication (OAuth, 2FA)
   - Add CSRF tokens for state-changing operations

## Troubleshooting

### "Unauthorized" Error
- Ensure you're logged in at `/admin/login`
- Check that cookies are enabled in your browser
- Verify JWT_SECRET matches between login and verification

### "Invalid PIN" Error
- Check the PIN in `.env.local`
- Restart the dev server after changing `.env.local`
- Verify you're using the correct PIN

### Automatic Logout
- JWT tokens expire after 24 hours
- Invalid tokens redirect to login page
- Clear browser cookies and login again if issues persist
