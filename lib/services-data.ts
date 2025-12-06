import { Stethoscope, HeartPulse, Syringe, Scissors, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  benefits: string[];
  pricing: {
    starting: string;
    note: string;
  };
  duration: string;
  frequency: string;
}

export const servicesData: Service[] = [
  {
    id: "1",
    title: "General Health Checkups",
    slug: "general-checkup",
    shortDescription: "Comprehensive wellness exams to keep your pet healthy and happy",
    fullDescription:
      "Our general health checkup service provides thorough examinations to ensure your pet maintains optimal health throughout their life. Our experienced veterinarians conduct complete physical assessments, identify potential health issues early, and provide personalized care recommendations for your beloved companion.",
    icon: Stethoscope,
    image: "/service_general_checkup.jpg",
    features: [
      "Complete physical examination from nose to tail",
      "Weight and body condition assessment",
      "Heart and lung function evaluation",
      "Dental health inspection",
      "Skin and coat examination",
      "Eyes, ears, and nose check",
      "Abdominal palpation",
      "Temperature and vital signs monitoring",
      "Parasite screening and prevention",
      "Nutritional counseling and diet recommendations",
    ],
    benefits: [
      "Early detection of potential health problems",
      "Preventive care to avoid costly treatments later",
      "Extended lifespan through proactive health management",
      "Peace of mind knowing your pet is healthy",
      "Personalized health and wellness plan",
      "Strong veterinarian-pet relationship",
    ],
    pricing: {
      starting: "$75",
      note: "Prices vary based on pet size and specific needs",
    },
    duration: "30-45 minutes",
    frequency: "Annually for young pets, bi-annually for seniors",
  },
  {
    id: "2",
    title: "Inpatient & Emergency Care",
    slug: "emergency-care",
    shortDescription: "24/7 emergency services and comfortable inpatient facilities for your pet's recovery",
    fullDescription:
      "When your pet faces a medical emergency or requires hospitalization, our state-of-the-art inpatient and emergency care facilities are here around the clock. We provide immediate medical attention, advanced diagnostic tools, and compassionate care in comfortable, monitored environments to ensure the best possible outcomes for your pet.",
    icon: HeartPulse,
    image: "/service_inpatient.jpg",
    features: [
      "24/7 emergency veterinary services",
      "Fully equipped intensive care unit (ICU)",
      "Advanced diagnostic imaging (X-ray, ultrasound)",
      "In-house laboratory for rapid test results",
      "Surgical facilities for emergency procedures",
      "Oxygen therapy and ventilation support",
      "Continuous patient monitoring",
      "IV fluid therapy and medication administration",
      "Comfortable recovery rooms with climate control",
      "Experienced emergency veterinarians and nurses",
      "Pain management and comfort care",
      "Regular updates to pet owners",
    ],
    benefits: [
      "Immediate care when minutes matter",
      "Advanced life-saving equipment on-site",
      "Expert emergency medical team",
      "Seamless transition from emergency to hospitalization",
      "24/7 monitoring for critical patients",
      "Peace of mind during difficult times",
    ],
    pricing: {
      starting: "$150",
      note: "Emergency care pricing varies by condition severity and treatment required",
    },
    duration: "Varies by condition",
    frequency: "As needed for emergencies",
  },
  {
    id: "3",
    title: "Vaccination & Prevention",
    slug: "vaccination",
    shortDescription: "Protect your pet from preventable diseases with our comprehensive vaccination programs",
    fullDescription:
      "Prevention is the cornerstone of good pet health. Our vaccination and preventive care services protect your furry friends from serious, potentially life-threatening diseases. We create customized vaccination schedules based on your pet's age, lifestyle, and risk factors, ensuring they receive the protection they need without over-vaccinating.",
    icon: Syringe,
    image: "/sample_pet_dog_02.jpg",
    features: [
      "Core vaccination series (Rabies, Distemper, Parvovirus)",
      "Non-core vaccines based on lifestyle and risk",
      "Puppy and kitten vaccination programs",
      "Annual booster vaccinations",
      "Titer testing to assess immunity levels",
      "Heartworm prevention and testing",
      "Flea and tick prevention",
      "Intestinal parasite screening and treatment",
      "Vaccination record management",
      "Travel certificate preparation",
      "Microchip identification",
    ],
    benefits: [
      "Protection from deadly infectious diseases",
      "Cost-effective compared to treating diseases",
      "Compliance with local pet regulations",
      "Safe socialization with other pets",
      "Peace of mind during boarding and travel",
      "Longer, healthier life for your pet",
    ],
    pricing: {
      starting: "$45",
      note: "Package pricing available for multiple vaccines",
    },
    duration: "15-30 minutes",
    frequency: "Initial series, then annually or as recommended",
  },
  {
    id: "4",
    title: "Grooming & Hygiene",
    slug: "grooming",
    shortDescription: "Professional grooming services to keep your pet looking and feeling their best",
    fullDescription:
      "Our professional grooming services go beyond aesthetics—they're essential for your pet's health and wellbeing. Our certified groomers provide gentle, stress-free grooming experiences in a safe, clean environment. From breed-specific cuts to medicated baths, we offer comprehensive grooming solutions tailored to your pet's unique needs.",
    icon: Scissors,
    image: "/vet_01.jpg",
    features: [
      "Full-service bathing with premium shampoos",
      "Breed-specific haircuts and styling",
      "Nail trimming and filing",
      "Ear cleaning and plucking",
      "Teeth brushing",
      "Anal gland expression",
      "De-shedding treatments",
      "Medicated baths for skin conditions",
      "Flea and tick treatments",
      "Paw pad care and moisturizing",
      "Sanitary trims",
      "Cologne and bow accessories",
    ],
    benefits: [
      "Improved skin and coat health",
      "Early detection of skin issues or lumps",
      "Reduced shedding and allergens at home",
      "Prevention of matted fur and skin infections",
      "Comfortable, well-maintained nails",
      "Better hygiene and odor control",
      "Stress-free grooming experience",
    ],
    pricing: {
      starting: "$50",
      note: "Pricing varies by pet size, coat condition, and services selected",
    },
    duration: "1-3 hours",
    frequency: "Every 4-8 weeks depending on breed and coat type",
  },
  {
    id: "5",
    title: "Dental Care",
    slug: "dental-care",
    shortDescription: "Complete dental services to maintain your pet's oral health and prevent disease",
    fullDescription:
      "Dental disease is one of the most common health problems in pets, affecting up to 80% of dogs and cats by age three. Our comprehensive dental care services protect your pet from painful dental disease, tooth loss, and serious health complications. We combine preventive care with advanced dental procedures to keep your pet's teeth and gums healthy for life.",
    icon: Stethoscope,
    image: "/vet_02.jpg",
    features: [
      "Complete oral examination",
      "Professional teeth cleaning and scaling",
      "Polishing to smooth tooth surfaces",
      "Subgingival cleaning below the gum line",
      "Digital dental X-rays",
      "Tooth extractions when necessary",
      "Oral surgery for advanced cases",
      "Fluoride treatments",
      "Home dental care instruction",
      "Dental disease prevention plans",
      "Pain management for dental procedures",
    ],
    benefits: [
      "Prevention of painful dental disease",
      "Fresher breath and cleaner teeth",
      "Reduced risk of heart, liver, and kidney disease",
      "Early detection of oral cancers and tumors",
      "Improved appetite and nutrition",
      "Extended lifespan through better health",
      "Cost savings by preventing advanced disease",
    ],
    pricing: {
      starting: "$300",
      note: "Includes anesthesia, cleaning, and dental X-rays. Extractions if needed are additional.",
    },
    duration: "2-4 hours including recovery",
    frequency: "Annually, or more often for pets with dental disease",
  },
  {
    id: "6",
    title: "Surgery & Procedures",
    slug: "surgery",
    shortDescription: "Advanced surgical care with experienced surgeons and modern facilities",
    fullDescription:
      "Our surgical suite is equipped with the latest technology and staffed by experienced veterinary surgeons who perform a wide range of procedures. From routine spay/neuter surgeries to complex orthopedic operations, we provide safe, effective surgical care with comprehensive pre-operative assessment and post-operative monitoring to ensure the best outcomes for your pet.",
    icon: HeartPulse,
    image: "/vet_03.jpg",
    features: [
      "Spay and neuter procedures",
      "Soft tissue surgery (masses, tumors, hernias)",
      "Orthopedic surgery (fractures, ligaments)",
      "Emergency surgery for trauma and acute conditions",
      "Pre-anesthetic blood work and health screening",
      "Modern anesthesia monitoring equipment",
      "Sterile surgical environment",
      "Pain management protocols",
      "Post-operative care and monitoring",
      "Take-home recovery instructions",
      "Follow-up examinations",
      "Surgical laser for precision and reduced bleeding",
    ],
    benefits: [
      "Experienced surgical team",
      "State-of-the-art equipment and techniques",
      "Comprehensive pain management",
      "Reduced surgery and recovery time",
      "Lower infection risk with sterile protocols",
      "24/7 emergency surgical availability",
      "Personalized post-op care plans",
    ],
    pricing: {
      starting: "$400",
      note: "Varies significantly by procedure complexity. Free consultation available.",
    },
    duration: "1-4 hours depending on procedure",
    frequency: "As needed based on medical condition",
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
