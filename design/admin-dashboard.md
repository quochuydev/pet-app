# Admin Dashboard Layout Design

## Overview
Dashboard for clinic administrators to view and manage appointment bookings.

**URL:** `/admin/dashboard`

**Authentication Required:** Yes (redirects to `/admin/login` if not authenticated)

---

## Page Structure

### 1. Dashboard Header
**Layout:** Top section with title and actions

**Content:**
- **Title:** "Admin Dashboard"
- **Subtitle:** "Manage appointment bookings"
- Action buttons:
  - Refresh button with refresh icon
  - Logout button

**Style Notes:**
- Clear hierarchy
- Action buttons aligned right
- Responsive layout

---

### 2. Stats Section
**Layout:** Card with metrics

**Content:**
- Icon: Calendar icon
- **Metric:** Total number of appointments
- Label: "Total Appointments"

**Style Notes:**
- Card with shadow
- Large number display
- Icon and text centered

---

### 3. Appointments List Section
**Layout:** Grid of appointment cards

**Title:** "All Appointments" (if appointments exist)

**Appointment Cards:**

Each card displays:

#### Header
- Owner's full name (bold)
- Booking ID (gray text)

#### Service Badge
- Service type in colored badge
- Rounded pill style

#### Contact Information
- Email with envelope icon
- Phone with phone icon

#### Pet Information
- Pet name with paw icon
- Pet type
- Pet age (if provided)

#### Appointment Details
- Preferred date with calendar icon
- Preferred time with clock icon

#### Notes Section
- "Notes:" label
- Note content (if provided)
- Gray background box

**Style Notes:**
- White cards with shadow
- Hover effect (increased shadow)
- Responsive grid (1-2 columns)
- Icons from lucide-react
- Clean, scannable layout

---

### 4. Loading State
**Display:** When fetching appointments

**Content:**
- Animated spinner icon
- "Loading appointments..." text

**Style Notes:**
- Centered on page
- Smooth rotation animation

---

### 5. Empty State
**Display:** When no appointments exist

**Content:**
- "No appointments yet." message
- Gray text
- Centered

---

### 6. Error State
**Display:** When API call fails

**Content:**
- Red background alert
- Error message text
- Centered

**Style Notes:**
- High contrast
- Clear error indication

---

## Features

### Authentication Check
- Verifies auth token on mount
- Redirects to login if 401 response
- Clears invalid tokens

### Data Fetching
- Fetches from `/api/appointments` GET endpoint
- Automatic load on component mount
- Manual refresh with Refresh button

### Logout
- Calls `/api/auth/logout` POST endpoint
- Clears auth cookie
- Redirects to `/admin/login`

---

## API Integration

### GET `/api/appointments`
- Returns all appointments from database
- Requires authentication
- Returns 401 if not authenticated
- Returns 500 on database error

### POST `/api/auth/logout`
- Clears auth-token cookie
- Always returns success

---

## Database Schema

**appointments table fields:**
- id (auto-increment)
- fullName
- email
- phone
- petName
- petType
- petAge (nullable)
- preferredDate
- preferredTime
- serviceType
- notes (nullable)
- createdAt
- updatedAt

---

## Color Scheme
- **Background:** Light gray (#F9FAFB)
- **Cards:** White with shadow
- **Primary Actions:** Blue
- **Service Badge:** Blue background
- **Text:** Dark gray (#1F2937)
- **Icons:** Gray
- **Error:** Red background

## Typography
- **Dashboard Title:** 28-32px, bold
- **Subtitle:** 16px, gray
- **Card Owner Name:** 18px, bold
- **Booking ID:** 14px, gray
- **Labels:** 14px, medium
- **Content:** 14px

## Responsive Design Notes
- Desktop: 2-column appointment grid
- Tablet: 2-column grid
- Mobile: Single column
- Touch-friendly buttons
- Stack header actions on mobile

## Security Considerations
- JWT-based authentication
- HTTP-only cookies
- Redirect to login if unauthenticated
- 24-hour token expiration
