CREATE TABLE "appointments" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"pet_name" varchar(255) NOT NULL,
	"pet_type" varchar(50) NOT NULL,
	"pet_age" varchar(50),
	"preferred_date" varchar(50) NOT NULL,
	"preferred_time" varchar(50) NOT NULL,
	"service_type" varchar(100) NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
