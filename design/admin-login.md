# Admin Login Page Layout Design

## Overview
Simple PIN-based authentication page for clinic administrators to access the admin dashboard.

**URL:** `/admin/login`

**Authentication:** PIN-based (default: 123456)

---

## Page Structure

### 1. Minimal Header
**Layout:** Centered logo/branding

**Components:**
- Shield icon in blue circle
- "Admin Login" title
- "Enter your PIN to access the admin dashboard" subtitle

**Style Notes:**
- Simplified header (no full navigation)
- Centered alignment

---

### 2. Login Form
**Layout:** Centered card (max-width: 400px)

**Form Fields:**

#### PIN Input
- Input type: password
- Placeholder: "Enter your PIN"
- Max length: 6 characters
- Lock icon inside input
- Monospace font for PIN display

**Helper Text:**
- "Default PIN: 123456 (Change in .env.local)"
- Gray, small text below input

#### Submit Button
- Text: "Login"
- Loading state: "Verifying..." with disabled state
- Full-width button
- Disabled when PIN is empty

#### Back Link
- "Back to Home" link
- Links to `/`

**Style Notes:**
- White card with shadow
- Centered on page
- High contrast
- Loading state during submission

---

### 3. Page Background
**Layout:** Light gray or gradient

**Style Notes:**
- Minimal design
- Ensures form readability

---

### 4. Security Notice
**Layout:** Warning box below form

**Content:**
- Yellow/amber background
- "This is a demonstration admin login. In production, use strong authentication."

**Style Notes:**
- Alert/warning styling
- Informative, not intrusive

---

### 5. Error Messages
**Display:** Inline above form (conditional)

**Content:**
- "Invalid PIN. Please try again."
- Red background, white text

**Style Notes:**
- Clear error indication
- Dismissible or auto-fade

---

## Authentication Flow

### Login Process
1. User enters PIN
2. Client-side validation (non-empty)
3. POST request to `/api/auth/login`
4. Server validates PIN against ADMIN_PIN config
5. On success:
   - JWT token generated (24-hour expiration)
   - HTTP-only secure cookie set
   - Redirect to `/admin/dashboard`
6. On failure:
   - Display error message
   - Clear PIN field

### Security Features
- Password input type (masked)
- HTTP-only cookie
- Secure flag on cookie
- JWT expiration (24 hours)

---

## Color Scheme
- **Primary:** Blue (shield icon, submit button)
- **Background:** Light gray (#F9FAFB)
- **Card:** White with shadow
- **Error:** Red (#EF4444)
- **Warning:** Yellow/Amber
- **Text:** Dark gray (#1F2937)

## Typography
- **Page Title:** 28-32px, bold
- **Subtitle:** 16px, gray
- **Labels:** 14px, medium weight
- **Input Text:** 18px, monospace (for PIN)
- **Helper Text:** 14px, gray

## Responsive Design Notes
- Desktop: Centered card
- Mobile: Full-width card with padding
- Touch-friendly button (44px min height)
