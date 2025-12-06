# Booking Page Layout Design

## Overview
User-friendly appointment booking page for scheduling veterinary appointments online.

**URL:** `/booking`

---

## Page Structure

### 1. Header / Navigation Bar
**Position:** Fixed top
**Components:** Same as other pages

---

### 2. Page Title Section
**Layout:** Centered

**Content:**
- **Headline (H1):** "Book an Appointment"
- **Subheadline:** "Schedule a visit for your beloved pet. We'll confirm your appointment within 24 hours."

**Style Notes:**
- Clean, focused design
- Reassuring messaging

---

### 3. Status Messages
**Layout:** Alert boxes (conditional)

**Types:**
- Success message (green background)
- Error message (red background)

**Style Notes:**
- Displayed above form when present
- Dismissible or auto-fade

---

### 4. Booking Form
**Layout:** Centered form (max-width: 600px)

#### Your Information Section
**Icon:** User icon

**Fields:**
- Full Name (required)
- Email Address (required, type: email)
- Phone Number (required)
- Pet's Name (required)

#### Pet Details Section
**Icon:** Paw icon

**Fields:**
- Pet Type (required, dropdown):
  - Dog
  - Cat
  - Bird
  - Rabbit
  - Other
- Pet Age (optional, text field)

#### Appointment Details Section
**Icon:** Calendar icon

**Fields:**
- Preferred Date (required, date picker)
- Preferred Time (required, dropdown):
  - 9:00 AM through 5:00 PM
  - 1-hour increments
- Service Type (required, dropdown):
  - General Checkup
  - Emergency Care
  - Surgery
  - Dental Care
  - Vaccination
  - Grooming

#### Additional Notes Section
**Icon:** Message icon

**Field:**
- Textarea for special requests or notes (optional)

#### Submit Button
- Text: "Schedule Appointment"
- Loading state: "Scheduling..." with disabled button
- Full-width button
- Confirmation message below

**Style Notes:**
- Clear form labels
- Required field indicators (*)
- Validation on submit
- Loading state during submission

---

### 5. Contact Information Box
**Layout:** Card below form

**Content:**
- **Title:** "Need Immediate Assistance?"
- Phone: (555) 123-4567 (click-to-call)
- Email: info@petcareclinic.com

**Style Notes:**
- Light background
- Helpful for urgent needs

---

### 6. Footer
**Content:** Same as other pages

---

## Form Behavior

### Submission Flow
1. User fills out form
2. Client-side validation of required fields
3. POST request to `/api/appointments`
4. On success: Redirect to `/booking/success` with appointment details in URL params
5. On error: Display error message above form

### Data Submitted
- fullName
- email
- phone
- petName
- petType
- petAge (optional)
- preferredDate
- preferredTime
- serviceType
- notes (optional)

---

## Color Scheme
- **Form Background:** White
- **Page Background:** Light gray
- **Primary CTA:** Brand orange/coral
- **Error State:** Red
- **Success State:** Green

## Typography
- **Page Title (H1):** 36-40px, bold
- **Form Labels:** 14-16px, medium
- **Input Text:** 16px

## Responsive Design Notes
- Mobile: Single column
- Large touch targets (44px min)
- Native date picker on mobile
- Full-width form fields
