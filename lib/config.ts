// Admin PIN configuration
export const ADMIN_PIN = process.env.ADMIN_PIN || "123456";

// JWT secret for token generation
export const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Token expiration time
export const TOKEN_EXPIRATION = "24h";
