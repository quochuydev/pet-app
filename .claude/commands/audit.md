# Project Audit Command

Perform a comprehensive audit of the codebase against all quality, performance, security, and marketplace standards defined in the checklists directory.

## Audit Scope

Review the codebase against ALL checklists in `/checklists/`:

1. **Standard Performance Checklist** (`standard-performance-checklist.md`)
   - Core Web Vitals (LCP, INP, CLS)
   - React Server Components usage
   - Bundle size and code splitting
   - Image optimization
   - Rendering strategies
   - Font optimization
   - Caching strategies
   - Build optimization

2. **Standard Coding Checklist** (`standard-coding-checklist.md`)
   - Code quality and best practices
   - TypeScript standards
   - Component architecture
   - File structure and organization
   - Naming conventions
   - Documentation standards

3. **Standard Security Checklist** (`standard-security-checklist.md`)
   - Common vulnerabilities (OWASP Top 10)
   - Input validation and sanitization
   - Authentication and authorization
   - Data protection
   - Dependency security
   - Configuration security

4. **ThemeForest Requirements Checklist** (`themeforest-requirement-checklist.md`)
   - Documentation requirements
   - Code quality standards
   - Browser compatibility
   - Responsive design
   - Licensing and credits
   - File organization for marketplace

## Audit Process

For each checklist:

1. **Read the checklist file** completely to understand all requirements
2. **Analyze the codebase** systematically:
   - Review relevant files and directories
   - Check configurations (next.config.js, tsconfig.json, etc.)
   - Examine component implementations
   - Review package.json dependencies
   - Inspect build output and bundle analysis

3. **Document findings** for each category:
   -  **Passed items** - Requirements that are met
   -   **Warnings** - Items that need attention or could be improved
   - L **Failed items** - Requirements that are not met
   - =Ý **Not Applicable** - Items that don't apply to this project

4. **Provide recommendations**:
   - Prioritize issues (Critical, High, Medium, Low)
   - Suggest specific fixes with file paths and line numbers
   - Estimate effort for each fix (Quick Win, Small, Medium, Large)
   - Link to relevant documentation or examples

## Output Format

Generate a structured audit report with:

### Executive Summary
- Overall compliance score (percentage)
- Total items: Passed / Warnings / Failed / N/A
- Critical issues requiring immediate attention
- Quick wins for easy improvements

### Detailed Findings by Checklist

For each checklist, provide:

**Checklist Name**
- Compliance Score: X/Y items passed (Z%)
- Status breakdown

**Passed Items** 
- List items that meet requirements

**Warnings**  
- Item description
- Current state
- Recommendation
- Priority + Effort
- File references

**Failed Items** L
- Item description
- Why it failed
- Required action
- Priority + Effort
- File references

### Action Plan

Prioritized list of all issues:

1. **Critical Issues** (Must fix before production)
2. **High Priority** (Should fix soon)
3. **Medium Priority** (Nice to have)
4. **Low Priority** (Future improvements)

For each issue:
- [ ] Issue description
- Files: `path/to/file.tsx:line`
- Effort: [Quick Win|Small|Medium|Large]
- Recommendation: Specific steps to fix

### Tools & Resources

List tools needed for verification:
- @next/bundle-analyzer
- Lighthouse CI
- ESLint/Prettier
- Security scanners
- etc.

## Execution Guidelines

1. **Be thorough** - Check every item in every checklist
2. **Be specific** - Reference exact files and line numbers
3. **Be actionable** - Provide clear fix recommendations
4. **Be realistic** - Consider project stage and requirements
5. **Be constructive** - Focus on improvements, not criticism

## Special Focus Areas

Based on project context (pet clinic Next.js app):

- **Performance**: Lighthouse score should be 90+
- **Images**: All 8 images should use next/image with optimization
- **Components**: Should be Server Components by default
- **Fonts**: Geist fonts properly configured
- **Build**: Clean build output with no warnings
- **Security**: No secrets in code, proper input validation
- **Mobile**: Responsive design working correctly

## Follow-up Actions

After generating the report:

1. Ask user which priority level to tackle first
2. Create TodoWrite items for selected fixes
3. Implement fixes systematically
4. Re-run audit after fixes to verify
5. Track progress and update report

---

**Note**: This audit should be run:
- Before deploying to production
- After major feature additions
- During regular code reviews
- When preparing for marketplace submission
- After dependency updates
