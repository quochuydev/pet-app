# Database Setup

This project uses PostgreSQL with Drizzle ORM for managing appointment bookings.

## Quick Start

### 1. Start PostgreSQL Database

```bash
docker compose up -d
```

This will start a PostgreSQL 16 container with the following credentials:
- **Host**: localhost
- **Port**: 5432
- **Database**: petcare_db
- **Username**: petcare
- **Password**: petcare123

### 2. Push Database Schema

```bash
pnpm db:push
```

This creates the `appointments` table in the database.

### 3. Start Development Server

```bash
pnpm dev
```

Visit http://localhost:3000/booking to test the appointment booking form.

## Database Commands

- `pnpm db:push` - Push schema changes to database
- `pnpm db:generate` - Generate migration files
- `pnpm db:migrate` - Run migrations
- `pnpm db:studio` - Open Drizzle Studio (database GUI)

## Database Schema

### Appointments Table

| Column | Type | Description |
|--------|------|-------------|
| id | serial | Primary key |
| full_name | varchar(255) | Pet owner's full name |
| email | varchar(255) | Contact email |
| phone | varchar(50) | Contact phone number |
| pet_name | varchar(255) | Name of the pet |
| pet_type | varchar(50) | Type of pet (dog, cat, etc.) |
| pet_age | varchar(50) | Age of the pet (optional) |
| preferred_date | varchar(50) | Preferred appointment date |
| preferred_time | varchar(50) | Preferred appointment time |
| service_type | varchar(100) | Type of service requested |
| notes | text | Additional notes (optional) |
| created_at | timestamp | Record creation timestamp |
| updated_at | timestamp | Record update timestamp |

## API Endpoints

### POST /api/appointments
Create a new appointment booking.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "petName": "Buddy",
  "petType": "dog",
  "petAge": "3 years",
  "preferredDate": "2024-12-15",
  "preferredTime": "10:00",
  "serviceType": "checkup",
  "notes": "Annual checkup"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully!",
  "appointment": { /* appointment data */ }
}
```

### GET /api/appointments
Retrieve all appointments (for admin purposes).

**Response:**
```json
{
  "success": true,
  "appointments": [ /* array of appointments */ ]
}
```

## Environment Variables

Create a `.env.local` file with:

```
DATABASE_URL=postgres://petcare:petcare123@localhost:5432/petcare_db
```

## Stopping the Database

```bash
docker compose down
```

To also remove the data volume:
```bash
docker compose down -v
```
