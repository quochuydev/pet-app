# Next.js App Router Security Checklist (2025)

This comprehensive security checklist covers critical vulnerabilities, OWASP Top 10 risks, and best practices for Next.js applications using the App Router (Next.js 14+).

> **Critical Note**: 73% of security breaches target web applications, and the average cost of a data breach exceeds $4.5 million. Security must be implemented at every layer of your application.

---

## =¨ Critical 2025 Vulnerabilities (Patch Immediately!)

### CVE-2025-55182 & CVE-2025-66478 (CVSS 10.0) - Remote Code Execution
- [ ] **Verify version**: Check if running Next.js 15.x or 16.x
- [ ] **Upgrade immediately** to patched versions:
  - Next.js 16.0.7+
  - Next.js 15.5.7, 15.4.8, 15.3.6, 15.2.6, 15.1.9, or 15.0.5+
- [ ] **Unaffected versions**: Next.js 13.x, 14.x stable, Pages Router
- [ ] **Deploy WAF rules** if immediate upgrade not possible
- [ ] **Monitor** HTTP traffic to Server Function endpoints for suspicious requests

**Impact**: Allows unauthenticated remote code execution by exploiting React Server Components payload decoding. Default configurations are vulnerable.

**Reference**: 39% of cloud environments have vulnerable instances.

### CVE-2025-29927 (CVSS 9.1) - Middleware Authorization Bypass
- [ ] **Verify version**: Check if running Next.js 11.1.4 - 15.2.2
- [ ] **Upgrade immediately** to patched versions:
  - Next.js 15.2.3+
  - Next.js 14.2.25+
  - Next.js 13.5.9+
  - Next.js 12.3.5+
- [ ] **Implement WAF rules** blocking `x-middleware-subrequest` header
- [ ] **Configure reverse proxy** to strip `x-middleware-subrequest` header
- [ ] **Never rely solely on middleware** for authorization

**Impact**: Complete bypass of middleware security checks, including authentication, authorization, and CSP headers.

---

## =á OWASP Top 10 Security Risks

### 1. Broken Access Control (OWASP #1)

#### Authentication & Authorization
- [ ] **Implement Data Access Layer (DAL)** pattern for centralized auth checks
- [ ] **Never trust props or context** - verify auth at every data access point
- [ ] **Use layered defense**: Middleware + Layout Guards + DAL
- [ ] **Recheck authorization on server** - never assume previous check is valid
- [ ] **Verify auth in every Server Component** that accesses protected data
- [ ] **Verify auth in every API Route Handler** before processing requests
- [ ] **Verify auth in every Server Action** before executing mutations

```typescript
//  Data Access Layer pattern
import { verifySession } from '@/lib/auth'

export async function getUser() {
  const session = await verifySession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  // Fetch user data
  return fetchUserData(session.userId)
}
```

#### Middleware (First Line of Defense)
- [ ] **Create middleware.ts** at root or src level
- [ ] **Check authentication** before route access
- [ ] **Never rely solely on middleware** - it's bypassable
- [ ] **Redirect unauthorized users** to login page
- [ ] **Protect API routes** in middleware matcher

```typescript
//  middleware.ts pattern
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*']
}
```

#### Protected Routes
- [ ] **Use route groups** for protected sections: `(protected)`
- [ ] **Add layout guards** for additional verification
- [ ] **Implement context-based fallback** for UI protection
- [ ] **Test with OWASP ZAP** or Playwright for bypass vulnerabilities

#### Session Management
- [ ] **Use secure session libraries** (NextAuth.js, Clerk, Lucia)
- [ ] **Set session timeouts** appropriately (15-30 min for sensitive apps)
- [ ] **Implement secure logout** that clears all session data
- [ ] **Rotate session tokens** after privilege elevation
- [ ] **Invalidate sessions** on password change

---

### 2. Cryptographic Failures (OWASP #2)

#### Encryption & Hashing
- [ ] **Use bcrypt or Argon2** for password hashing (min 10 rounds)
- [ ] **Never store passwords** in plain text
- [ ] **Hash API keys** and tokens before storing
- [ ] **Use HTTPS only** for all traffic
- [ ] **Encrypt sensitive data** at rest in database
- [ ] **Use Web Crypto API** for client-side encryption if needed

```typescript
//  Password hashing with bcrypt
import bcrypt from 'bcryptjs'

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}
```

#### Cookies & Storage
- [ ] **Set HttpOnly flag** on session cookies (prevents XSS access)
- [ ] **Set Secure flag** on session cookies (HTTPS only)
- [ ] **Set SameSite=Lax or Strict** on session cookies (CSRF protection)
- [ ] **Use short cookie expiration** for sensitive data
- [ ] **Never store sensitive data** in localStorage (XSS vulnerable)

```typescript
//  Secure cookie configuration
import { cookies } from 'next/headers'

export async function setSessionCookie(token: string) {
  cookies().set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/'
  })
}
```

---

### 3. Injection Attacks (OWASP #3)

#### SQL Injection
- [ ] **Use parameterized queries** or ORMs (Prisma, Drizzle)
- [ ] **Never concatenate user input** into SQL queries
- [ ] **Validate and sanitize** all database inputs
- [ ] **Use least privilege** database accounts
- [ ] **Limit query results** to prevent data leakage

```typescript
//  Parameterized query with Prisma
import { prisma } from '@/lib/prisma'

async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email } // Safe: Prisma handles parameterization
  })
}

// L SQL injection vulnerable
async function getUserByEmail(email: string) {
  return db.query(`SELECT * FROM users WHERE email = '${email}'`) // DANGEROUS!
}
```

#### XSS (Cross-Site Scripting)
- [ ] **Never use dangerouslySetInnerHTML** without sanitization
- [ ] **Sanitize user input** with DOMPurify before rendering
- [ ] **Escape output** in Server Components
- [ ] **Use Content Security Policy** headers
- [ ] **Validate HTML attributes** from user input
- [ ] **Avoid eval()** and new Function()

```typescript
//  Sanitize HTML before rendering
import DOMPurify from 'isomorphic-dompurify'

function UserContent({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />
}

// L XSS vulnerable
function UserContent({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} /> // DANGEROUS!
}
```

#### Command Injection
- [ ] **Never execute shell commands** with user input
- [ ] **Avoid exec(), spawn()** with unsanitized input
- [ ] **Use allowlists** for permitted commands/arguments
- [ ] **Validate file paths** before file operations

---

### 4. Insecure Design (OWASP #4)

#### Security by Design
- [ ] **Implement principle of least privilege** throughout app
- [ ] **Use defense in depth** - multiple security layers
- [ ] **Fail securely** - default to deny access on errors
- [ ] **Separate concerns** - isolate security-critical code
- [ ] **Document security requirements** before implementation
- [ ] **Conduct threat modeling** for sensitive features

#### Rate Limiting
- [ ] **Implement rate limiting** on authentication endpoints
- [ ] **Limit API requests** per user/IP
- [ ] **Protect against brute force** attacks
- [ ] **Use exponential backoff** for failed attempts
- [ ] **Consider using Upstash Rate Limit** or similar

```typescript
//  Rate limiting with Upstash
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return new Response('Too Many Requests', { status: 429 })
  }

  // Process request
}
```

---

### 5. Security Misconfiguration (OWASP #5)

#### Environment Variables
- [ ] **Never commit .env files** to version control
- [ ] **Use .env.local** for local secrets
- [ ] **Prefix public vars** with NEXT_PUBLIC_
- [ ] **Validate env vars** at build time
- [ ] **Use different secrets** for dev/staging/prod
- [ ] **Rotate secrets** regularly
- [ ] **Document required env vars** in .env.example

```typescript
//  Validate environment variables
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_SECRET_KEY: z.string().min(32),
  NEXT_PUBLIC_API_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

#### Security Headers
- [ ] **Set Content-Security-Policy** (CSP) header
- [ ] **Set X-Content-Type-Options: nosniff**
- [ ] **Set X-Frame-Options: DENY** or SAMEORIGIN
- [ ] **Set X-XSS-Protection: 1; mode=block**
- [ ] **Set Referrer-Policy: strict-origin-when-cross-origin**
- [ ] **Set Permissions-Policy** to restrict features
- [ ] **Remove X-Powered-By** header

```typescript
//  Security headers in next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  poweredByHeader: false, // Remove X-Powered-By
}

module.exports = nextConfig
```

#### CORS Configuration
- [ ] **Restrict CORS origins** to specific domains
- [ ] **Never use Access-Control-Allow-Origin: *** in production
- [ ] **Validate Origin header** in API routes
- [ ] **Set proper CORS methods** (GET, POST, etc.)
- [ ] **Limit exposed headers**

```typescript
//  Secure CORS configuration
export async function GET(request: Request) {
  const origin = request.headers.get('origin')
  const allowedOrigins = ['https://example.com', 'https://app.example.com']

  const headers = new Headers()
  if (origin && allowedOrigins.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
  }
  headers.set('Access-Control-Allow-Methods', 'GET, POST')

  return new Response(JSON.stringify({ data: 'response' }), { headers })
}
```

---

### 6. Vulnerable & Outdated Components (OWASP #6)

#### Dependency Management
- [ ] **Keep Next.js updated** to latest stable version
- [ ] **Update dependencies regularly** (weekly/monthly)
- [ ] **Use npm audit** or pnpm audit to find vulnerabilities
- [ ] **Use Dependabot** or Renovate for automated updates
- [ ] **Review security advisories** for critical packages
- [ ] **Remove unused dependencies**
- [ ] **Pin dependency versions** in production

```bash
#  Check for vulnerabilities
pnpm audit
pnpm outdated

# Fix vulnerabilities
pnpm audit --fix
```

#### Monitoring Tools
- [ ] **Set up Snyk** or GitHub Dependabot
- [ ] **Enable security alerts** in GitHub
- [ ] **Subscribe to Next.js security advisories**
- [ ] **Monitor CVE databases** for React/Next.js
- [ ] **Use npm-check-updates** for dependency updates

---

### 7. Identification & Authentication Failures (OWASP #7)

#### Password Security
- [ ] **Enforce minimum password length** (12+ characters)
- [ ] **Require password complexity** (upper, lower, numbers, symbols)
- [ ] **Implement password strength meter**
- [ ] **Check against leaked password databases** (Have I Been Pwned API)
- [ ] **Prevent password reuse** (check last 5 passwords)
- [ ] **Force password change** after security incidents

#### Multi-Factor Authentication
- [ ] **Implement MFA/2FA** for sensitive accounts
- [ ] **Support TOTP** (Time-based One-Time Password)
- [ ] **Provide backup codes** for account recovery
- [ ] **Allow SMS/Email OTP** as fallback
- [ ] **Require MFA for admin accounts**

#### Account Security
- [ ] **Lock accounts** after N failed login attempts (5-10)
- [ ] **Implement CAPTCHA** after failed attempts
- [ ] **Send email alerts** on suspicious activity
- [ ] **Log authentication events** for audit trail
- [ ] **Implement secure password reset** flow (time-limited tokens)

---

### 8. Software & Data Integrity Failures (OWASP #8)

#### Code Integrity
- [ ] **Use Subresource Integrity (SRI)** for external scripts
- [ ] **Verify package checksums** before installation
- [ ] **Use lock files** (pnpm-lock.yaml, package-lock.json)
- [ ] **Sign commits** with GPG keys
- [ ] **Review dependencies** before adding to project

#### CI/CD Security
- [ ] **Scan code for vulnerabilities** in CI pipeline
- [ ] **Run security tests** before deployment
- [ ] **Use separate environments** for dev/staging/prod
- [ ] **Restrict deployment permissions**
- [ ] **Audit CI/CD logs** regularly

---

### 9. Security Logging & Monitoring Failures (OWASP #9)

#### Logging Best Practices
- [ ] **Log all authentication events** (success/failure)
- [ ] **Log authorization failures**
- [ ] **Log input validation failures**
- [ ] **Log API errors and exceptions**
- [ ] **Never log sensitive data** (passwords, tokens, credit cards)
- [ ] **Use structured logging** (JSON format)
- [ ] **Set appropriate log levels** (debug, info, warn, error)

```typescript
//  Secure logging
import pino from 'pino'

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: ['password', 'token', 'apiKey'] // Redact sensitive fields
})

// Log authentication event
logger.info({
  event: 'login_success',
  userId: user.id,
  ip: request.ip,
  timestamp: new Date().toISOString()
})

// L Never log sensitive data
logger.info({ password: '123456' }) // DANGEROUS!
```

#### Monitoring & Alerting
- [ ] **Set up error monitoring** (Sentry, LogRocket)
- [ ] **Monitor failed login attempts**
- [ ] **Alert on unusual activity patterns**
- [ ] **Track API response times**
- [ ] **Monitor rate limit violations**
- [ ] **Set up uptime monitoring**

---

### 10. Server-Side Request Forgery (SSRF) (OWASP #10)

#### Input Validation
- [ ] **Validate all URLs** from user input
- [ ] **Use allowlist** for permitted domains
- [ ] **Block private IP ranges** (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)
- [ ] **Block localhost** and loopback addresses
- [ ] **Validate URL protocols** (only allow http/https)

```typescript
//  Validate URL before fetching
function isAllowedUrl(url: string): boolean {
  const parsed = new URL(url)

  // Only allow https
  if (parsed.protocol !== 'https:') return false

  // Allowlist of permitted domains
  const allowedDomains = ['api.example.com', 'cdn.example.com']
  if (!allowedDomains.includes(parsed.hostname)) return false

  // Block private IPs
  const privateIpRegex = /^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|127\.)/
  if (privateIpRegex.test(parsed.hostname)) return false

  return true
}

export async function fetchExternal(url: string) {
  if (!isAllowedUrl(url)) {
    throw new Error('Invalid URL')
  }
  return fetch(url)
}
```

---

## = Server Actions Security

### Input Validation
- [ ] **Validate all inputs** with Zod or similar schema validator
- [ ] **Never trust client data** - validate on server
- [ ] **Use type-safe schemas** for predictable inputs
- [ ] **Sanitize inputs** before database operations
- [ ] **Validate file uploads** (size, type, content)

```typescript
//  Server Action with validation
'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
})

export async function createUser(formData: FormData) {
  const validated = schema.parse({
    email: formData.get('email'),
    name: formData.get('name'),
  })

  // Safe to use validated data
  return createUserInDb(validated)
}
```

### Authorization in Server Actions
- [ ] **Verify auth in every Server Action**
- [ ] **Check user permissions** before mutations
- [ ] **Validate resource ownership** before updates
- [ ] **Use Data Access Layer** for consistent checks

```typescript
//  Server Action with authorization
'use server'

import { verifySession } from '@/lib/auth'

export async function deletePost(postId: string) {
  const session = await verifySession()
  if (!session) {
    throw new Error('Unauthorized')
  }

  const post = await getPost(postId)
  if (post.authorId !== session.userId) {
    throw new Error('Forbidden')
  }

  return deletePostFromDb(postId)
}
```

### CSRF Protection
- [ ] **Server Actions use POST by default** (built-in protection)
- [ ] **Verify Origin header** matches Host header (Next.js does this)
- [ ] **Use SameSite cookies** (Lax or Strict)
- [ ] **Add custom CSRF header** for API routes
- [ ] **Never allow GET requests** for state-changing operations

---

## < API Route Security

### API Route Handlers
- [ ] **Validate all inputs** in route handlers
- [ ] **Verify authentication** before processing
- [ ] **Return appropriate status codes** (401, 403, 404, 500)
- [ ] **Limit response data** - don't over-expose
- [ ] **Implement pagination** for list endpoints
- [ ] **Use proper HTTP methods** (GET, POST, PUT, DELETE)

```typescript
//  Secure API route handler
import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const session = await verifySession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Validate input
    const body = await request.json()
    const validated = schema.parse(body)

    // Process request
    const post = await createPost(validated, session.userId)

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
```

### API Security Headers
- [ ] **Set rate limits** per endpoint
- [ ] **Implement API key authentication** for external access
- [ ] **Use JWT tokens** for stateless authentication
- [ ] **Set appropriate Cache-Control** headers
- [ ] **Version your APIs** (/api/v1/...)

---

## = Input Validation & Sanitization

### Validation Rules
- [ ] **Validate on server side** always (never trust client)
- [ ] **Use schema validators** (Zod, Yup, Joi)
- [ ] **Validate data types** (string, number, boolean, etc.)
- [ ] **Validate string length** (min/max)
- [ ] **Validate number ranges** (min/max)
- [ ] **Validate email format** with proper regex
- [ ] **Validate URLs** before fetching
- [ ] **Validate file uploads** (type, size, content)

### Sanitization
- [ ] **Sanitize HTML** with DOMPurify before rendering
- [ ] **Escape special characters** in SQL queries (use ORMs)
- [ ] **Remove null bytes** from strings
- [ ] **Trim whitespace** from user inputs
- [ ] **Normalize Unicode** characters

### Common Input Validation Patterns
```typescript
//  Comprehensive validation with Zod
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(12).max(128),
  age: z.number().int().min(18).max(120),
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
  website: z.string().url().optional(),
  bio: z.string().max(500).optional(),
})

// Validate and return typed data
const validated = userSchema.parse(userInput)
```

---

## =Ä Database Security

### Query Security
- [ ] **Use parameterized queries** or ORMs (Prisma, Drizzle)
- [ ] **Never concatenate user input** into queries
- [ ] **Use least privilege** database accounts
- [ ] **Limit query results** (pagination)
- [ ] **Use database connection pooling**
- [ ] **Enable query timeouts**

### Data Protection
- [ ] **Encrypt sensitive data** at rest
- [ ] **Use database encryption** (TDE, column-level)
- [ ] **Hash passwords** before storing (bcrypt, Argon2)
- [ ] **Redact sensitive data** in logs
- [ ] **Implement data retention policies**
- [ ] **Backup databases regularly**

---

## =Á File Upload Security

### Upload Validation
- [ ] **Validate file type** (MIME type and extension)
- [ ] **Limit file size** (e.g., 5MB for images)
- [ ] **Scan files for malware** before storing
- [ ] **Generate random filenames** to prevent path traversal
- [ ] **Store uploads outside webroot** or use cloud storage
- [ ] **Set Content-Disposition** headers for downloads

```typescript
//  Secure file upload validation
import { z } from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

async function validateFileUpload(file: File) {
  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File too large')
  }

  // Validate file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new Error('Invalid file type')
  }

  // Generate secure filename
  const ext = file.name.split('.').pop()
  const filename = `${crypto.randomUUID()}.${ext}`

  return filename
}
```

---

## >ê Security Testing

### Testing Checklist
- [ ] **Run OWASP ZAP** automated scans
- [ ] **Test authentication flows** (login, logout, password reset)
- [ ] **Test authorization** (access control bypass attempts)
- [ ] **Test input validation** (XSS, SQL injection payloads)
- [ ] **Test file uploads** (malicious files, oversized files)
- [ ] **Test rate limiting** (brute force attempts)
- [ ] **Use Playwright/Cypress** for E2E security tests

### Penetration Testing
- [ ] **Conduct manual penetration testing** quarterly
- [ ] **Test for OWASP Top 10** vulnerabilities
- [ ] **Test API endpoints** with tools like Burp Suite
- [ ] **Test for business logic flaws**
- [ ] **Document and fix findings**

---

## =€ Production Security Checklist

### Pre-Deployment
- [ ] **All dependencies updated** and vulnerabilities fixed
- [ ] **Security headers configured** in next.config.js
- [ ] **Environment variables secured** and validated
- [ ] **HTTPS enforced** for all traffic
- [ ] **Authentication implemented** correctly
- [ ] **Rate limiting enabled** on sensitive endpoints
- [ ] **Error monitoring configured** (Sentry, etc.)
- [ ] **Logging configured** with sensitive data redaction
- [ ] **Database credentials rotated**
- [ ] **Security testing completed** and passed

### Post-Deployment
- [ ] **Monitor error rates** and anomalies
- [ ] **Review logs regularly** for suspicious activity
- [ ] **Set up security alerts** for critical events
- [ ] **Keep dependencies updated** monthly
- [ ] **Conduct security audits** quarterly
- [ ] **Review access controls** and permissions
- [ ] **Test backup and recovery** procedures

---

## =Ê Security Monitoring & Incident Response

### Real-Time Monitoring
- [ ] **Set up Sentry** or similar error tracking
- [ ] **Monitor failed authentication attempts**
- [ ] **Track API error rates**
- [ ] **Monitor unusual traffic patterns**
- [ ] **Set up uptime monitoring** (Pingdom, UptimeRobot)
- [ ] **Configure Slack/email alerts** for critical issues

### Incident Response Plan
- [ ] **Document incident response procedures**
- [ ] **Identify security team contacts**
- [ ] **Create runbook for common incidents**
- [ ] **Test incident response** with drills
- [ ] **Have rollback procedures ready**
- [ ] **Maintain breach notification templates**

---

## =à Security Tools & Resources

### Essential Tools
- **Dependency Scanning**: Snyk, GitHub Dependabot, npm audit
- **Static Analysis**: ESLint security plugins, SonarQube
- **Dynamic Testing**: OWASP ZAP, Burp Suite
- **Error Monitoring**: Sentry, LogRocket, Rollbar
- **Secret Scanning**: GitGuardian, TruffleHog
- **Web Application Firewall**: Cloudflare, AWS WAF

### Learning Resources
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Documentation](https://nextjs.org/blog/security-nextjs-server-components-actions)
- [Web Security Academy](https://portswigger.net/web-security)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

---

## =Ú References & Sources

### Official Documentation
- [How to Think About Security in Next.js](https://nextjs.org/blog/security-nextjs-server-components-actions)
- [Next.js Security Advisory CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478)

### Security Guides (2025)
- [Complete Next.js Security Guide 2025](https://www.turbostarter.dev/blog/complete-nextjs-security-guide-2025-authentication-api-protection-and-best-practices)
- [Next.js Security Best Practices 2025](https://hub.corgea.com/articles/nextjs-security-best-practices)
- [Next.js Security Checklist](https://blog.arcjet.com/next-js-security-checklist/)
- [Secure Authentication in Next.js](https://www.ory.sh/blog/add-auth-to-nextjs-security-best-practices)

### Vulnerability Reports
- [CVE-2025-55182: React RCE Vulnerability](https://www.wiz.io/blog/critical-vulnerability-in-react-cve-2025-55182)
- [CVE-2025-29927: Middleware Authorization Bypass](https://projectdiscovery.io/blog/nextjs-middleware-authorization-bypass)
- [Google Cloud Response to CVE-2025-55182](https://cloud.google.com/blog/products/identity-security/responding-to-cve-2025-55182)

---

## =Ý Notes

- **Security is a continuous process**, not a one-time task
- **Stay updated** on Next.js security advisories and CVEs
- **Test security controls** regularly, not just at launch
- **Use automated tools** to catch common vulnerabilities
- **Conduct manual reviews** for business logic flaws
- **Document security decisions** for audit trail
- **Train team members** on secure coding practices

**Critical Reminder**: 39% of cloud environments currently have instances vulnerable to CVE-2025-55182. Ensure your Next.js version is patched immediately.

**Last Updated**: December 2025
