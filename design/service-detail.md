# Service Detail Page Layout Design

## Overview
Detailed page for individual veterinary services with comprehensive information and booking options.

**URL Pattern:** `/services/[slug]`

**Available Service Slugs:**
- `general-checkup`
- `emergency-care`
- `vaccination`
- `grooming`
- `dental-care`
- `surgery`

---

## Page Structure

### 1. Header / Navigation Bar
**Position:** Fixed top
**Components:** Same as other pages

---

### 2. Service Hero Section
**Layout:** Full-width image with overlay

**Content:**
- Service icon badge
- **Service Title (H1):** e.g., "General Health Checkups"
- Short description (1-2 sentences)
- "Back to Services" link

**Style Notes:**
- Full-width service image
- Gradient overlay for text readability

---

### 3. Quick Info Bar
**Layout:** 4-column grid

**Info Cards:**
- **Starting Price:** e.g., "$75" with dollar icon
- **Duration:** e.g., "30-45 minutes" with clock icon
- **Frequency:** e.g., "Annually for young pets" with calendar icon
- **CTA Button:** "Book Now" (links to `/booking`)

**Style Notes:**
- Light background
- Icons for each metric

---

### 4. Main Content Section
**Layout:** 2-column layout (2/3 main + 1/3 sidebar)

**Left Column - Main Content:**

#### Service Overview
- Full description (multiple paragraphs)
- What to expect during the visit

#### What's Included
- Checklist of features (10-12 items)
- Checkmark icons for each item

#### Benefits for Your Pet
- List of 6 key benefits
- Highlighted in boxes

**Right Sidebar (Sticky):**

#### Pricing Card
- Gradient background
- Starting price display
- Price note
- "Schedule Appointment" button (links to `/booking`)

#### Have Questions?
- Phone number: (555) 123-4567
- Click-to-call on mobile

**Style Notes:**
- Main content: readable width
- Sidebar: sticky positioning
- Clean, scannable layout

---

### 5. Call-to-Action Section
**Layout:** Full-width banner

**Content:**
- **Headline:** "Give Your Pet the Best Care"
- **CTA Buttons:**
  - Primary: "Book This Service" (links to `/booking`)
  - Secondary: "View All Services" (links to `/services`)

**Style Notes:**
- High contrast
- Prominent placement

---

### 6. Footer
**Content:** Same as home page

---

## Service Data Structure

Each service includes:
- ID, title, slug
- Icon (from lucide-react)
- Image path
- Short description (1-2 sentences)
- Full description (multiple paragraphs)
- Features array (10-12 items)
- Benefits array (6 items)
- Pricing (starting price + note)
- Duration
- Recommended frequency

---

## Color Scheme
- **Primary:** Brand blue/green
- **CTA:** Brand orange/coral
- **Cards:** White with shadows

## Typography
- **Service Title (H1):** 40-48px, bold
- **Section Titles (H2):** 28-36px, semi-bold
- **Body Text:** 16px

## Responsive Design Notes
- Desktop: Two-column layout
- Tablet: Sidebar below main content
- Mobile: Single column stack
