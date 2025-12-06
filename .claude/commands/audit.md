# Audit Checklist Command

When this command is run, review all checklist files in the `checklists/` directory and tick `[x]` for completed items directly in the existing checklist files.

## Instructions:

1. **Read all checklist files** in `checklists/` directory
2. **Review the current codebase** against each checklist item
3. **Update the checklist files directly** - mark items as `[x]` if they are completed
4. **DO NOT create new files** - only update existing checklist files
5. **DO NOT create summary reports** - just update the checklists in place
6. **Focus on verification** - check if each item is actually implemented

## Available Checklists:

- `standard-coding-checklist.md` - Next.js coding standards and best practices
- `standard-performance-checklist.md` - Performance optimization checklist
- `standard-security-checklist.md` - Security best practices and OWASP compliance
- `themeforest-requirement-checklist.md` - ThemeForest submission requirements

## Process:

For each checklist:

1. Read the current state of the checklist file
2. Examine the codebase to verify each unchecked item
3. If the item is completed/implemented, change `[ ]` to `[x]`
4. Update the checklist file with the changes
5. Move to the next checklist

## Example:

**Before:**
```markdown
- [ ] Use Server Components by default
- [ ] Add 'use client' directive only when needed
```

**After (if implemented):**
```markdown
- [x] Use Server Components by default
- [x] Add 'use client' directive only when needed
```

## Notes:

- Be honest in assessment - only tick items that are truly completed
- If something is partially done, leave it unchecked with a comment if needed
- This is a living document - run this audit regularly to track progress
- Focus on the actual implementation, not intentions or plans
