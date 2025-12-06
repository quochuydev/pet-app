# Quick Release Guide

## 🚀 Create ThemeForest Release in 3 Steps

### Step 1: Update Version
```bash
# Edit package.json, change version to 1.0.0
```

### Step 2: Create Tag
```bash
git add .
git commit -m "Release v1.0.0"
git tag v1.0.0
git push origin v1.0.0
```

### Step 3: Download Package
```
Go to: GitHub → Releases → Download petcare-v1.0.0.zip
```

---

## 📦 What's Included in Package

✅ Source code (app/, public/, db/, lib/)
✅ Documentation (documentation/)
✅ Config files (package.json, tsconfig.json, etc.)
✅ README files (README.txt, README.md)
✅ Environment template (.env.example)
✅ LICENSE.txt and CHANGELOG.txt

❌ node_modules/ (excluded)
❌ .next/ (excluded)
❌ .env.local (excluded - SECURITY!)
❌ Development files (checklists/, design/, etc.)

---

## ⚡ Manual Trigger

Can't create a tag? Use manual trigger:

1. Go to: **GitHub → Actions → "Create ThemeForest Release Package"**
2. Click **"Run workflow"**
3. Enter version: `1.0.0`
4. Click **"Run workflow"** button
5. Wait 2-5 minutes
6. Download from **Releases** tab

---

## 📚 Full Documentation

- **Workflow details**: `.github/RELEASE-WORKFLOW-GUIDE.md`
- **Manual packaging**: `PACKAGING-GUIDE.md`
- **Template docs**: `documentation/index.html`

---

## ✅ Before Submitting to ThemeForest

- [ ] Test the ZIP package locally
- [ ] Replace demo images with licensed images
- [ ] Update documentation with your support email
- [ ] Update LICENSE.txt with purchase details
- [ ] Run through ThemeForest checklist

---

**Next**: Upload `petcare-v1.0.0.zip` to ThemeForest! 🎉
