# GitHub Release Workflow Guide

This guide explains how to use the automated GitHub Actions workflow to create ThemeForest-ready release packages.

## 🎯 What Does This Workflow Do?

The workflow automatically:
1. ✅ Builds your project to verify it works
2. ✅ Copies ONLY the files ThemeForest needs
3. ✅ Removes unnecessary files (.DS_Store, test files, etc.)
4. ✅ Creates LICENSE.txt and CHANGELOG.txt
5. ✅ Packages everything into a ZIP file
6. ✅ Creates a GitHub Release with the ZIP attached
7. ✅ Generates a package manifest showing what's included

## 📋 Files Included in Package

### ✅ Included:
```
app/                    # Application code
public/                 # Images and assets
documentation/          # HTML documentation
db/                     # Database schema
lib/                    # Utility libraries
package.json            # Dependencies
pnpm-lock.yaml         # Lock file
tsconfig.json          # TypeScript config
next.config.ts         # Next.js config
tailwind.config.ts     # Tailwind config
postcss.config.mjs     # PostCSS config
eslint.config.mjs      # ESLint config
components.json        # Component registry
README.txt             # Quick start
README.md              # Detailed README
.env.example           # Environment template
.gitignore             # Git ignore
LICENSE.txt            # Generated license file
CHANGELOG.txt          # Generated changelog
```

### ❌ Excluded:
```
node_modules/          # Dependencies (users install)
.next/                 # Build output (users build)
.env.local             # Secrets (SECURITY!)
checklists/            # Internal development
design/                # Internal specs
drizzle/               # Database migrations
.DS_Store              # macOS system files
Thumbs.db              # Windows system files
*.test.ts(x)           # Test files
*.spec.ts(x)           # Spec files
CLAUDE.md              # Internal docs
DATABASE.md            # Internal docs
docker-compose.yml     # Development setup
```

## 🚀 How to Use

### Method 1: Create Release with Git Tag (Recommended)

1. **Update version in package.json**:
   ```bash
   # Edit package.json and change version to 1.0.0
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Release v1.0.0"
   ```

3. **Create and push a tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

4. **Wait for workflow to complete** (2-5 minutes)
   - Go to: https://github.com/YOUR-USERNAME/YOUR-REPO/actions
   - Watch the "Create ThemeForest Release Package" workflow run
   - ✅ Green checkmark = Success!

5. **Download your release**:
   - Go to: https://github.com/YOUR-USERNAME/YOUR-REPO/releases
   - Click on the latest release (v1.0.0)
   - Download `petcare-v1.0.0.zip`

### Method 2: Manual Trigger from GitHub

1. **Go to GitHub Actions**:
   - Navigate to: https://github.com/YOUR-USERNAME/YOUR-REPO/actions

2. **Select the workflow**:
   - Click "Create ThemeForest Release Package"

3. **Click "Run workflow"**:
   - Click the "Run workflow" button
   - Enter version number (e.g., `1.0.0`)
   - Click green "Run workflow" button

4. **Wait and download**:
   - Wait for completion (2-5 minutes)
   - Go to Releases tab
   - Download the ZIP file

## 📦 What You Get

After the workflow completes, you'll have:

1. **GitHub Release** with:
   - `petcare-v1.0.0.zip` - ThemeForest-ready package
   - `package-manifest.txt` - List of included files
   - Release notes with installation instructions

2. **Artifact** (stored for 90 days):
   - Downloadable from the workflow run page
   - Backup copy of the ZIP file

## ✅ Verification Steps

After downloading the ZIP:

1. **Extract and test**:
   ```bash
   unzip petcare-v1.0.0.zip -d test-package
   cd test-package
   pnpm install
   pnpm build
   pnpm dev
   ```

2. **Check for issues**:
   - No error messages during build
   - Site runs on http://localhost:3000
   - All pages load correctly
   - Documentation opens properly

3. **Verify contents**:
   ```bash
   # Should NOT contain:
   ls -la | grep node_modules    # Should be empty
   ls -la | grep .next           # Should be empty
   ls -la | grep .env.local      # Should be empty
   ls -la | grep checklists      # Should be empty
   ls -la | grep design          # Should be empty

   # Should contain:
   ls -la | grep app             # ✓
   ls -la | grep documentation   # ✓
   ls -la | grep README.txt      # ✓
   ```

## 🔄 Creating Updates

When you need to release an update:

1. **Make your changes**
2. **Update version** in `package.json`: `1.0.0` → `1.1.0`
3. **Commit changes**
4. **Create new tag**: `git tag v1.1.0`
5. **Push tag**: `git push origin v1.1.0`
6. **Workflow runs automatically!**

## 🐛 Troubleshooting

### Workflow fails at "Build project"
- **Cause**: Build errors in code
- **Fix**: Run `pnpm build` locally and fix errors

### Workflow fails at "Create GitHub Release"
- **Cause**: Release with same version already exists
- **Fix**: Delete old release or use a new version number

### ZIP file is too large (> 50MB)
- **Cause**: Large images in `public/`
- **Fix**: Optimize images before releasing

### Missing files in package
- **Cause**: Files not copied in workflow
- **Fix**: Edit workflow's "Copy required files" step

## 📝 Customizing the Workflow

To modify what gets included:

1. **Edit the workflow file**:
   ```bash
   .github/workflows/create-themeforest-release.yml
   ```

2. **Add files/folders** in the "Copy required files" step:
   ```yaml
   - name: Copy required files and folders
     run: |
       cp -r app themeforest-package/
       cp -r your-new-folder themeforest-package/  # Add this
   ```

3. **Exclude patterns** in "Create ZIP archive" step:
   ```yaml
   zip -r ../petcare-v${{ steps.version.outputs.VERSION }}.zip . \
     -x "*.DS_Store" \
     -x "*your-pattern/*"  # Add exclusions
   ```

4. **Commit and push** changes:
   ```bash
   git add .github/workflows/create-themeforest-release.yml
   git commit -m "Update release workflow"
   git push
   ```

## 🎉 Benefits

- ✅ **Consistent packages** - Same structure every time
- ✅ **No mistakes** - Automated, no manual file copying
- ✅ **Clean packages** - No system files or secrets
- ✅ **Fast** - Creates package in 2-5 minutes
- ✅ **Traceable** - All releases stored on GitHub
- ✅ **Professional** - Auto-generated changelog and license

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Creating Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [ThemeForest Requirements](https://help.author.envato.com/hc/en-us/articles/360000470826)

## 🆘 Need Help?

1. Check workflow logs in GitHub Actions tab
2. Review this guide
3. Check `PACKAGING-GUIDE.md` for manual packaging
4. Open an issue on GitHub

---

**Happy releasing! 🚀**
