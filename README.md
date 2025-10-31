# RAIX Website - Updated Files

This package contains the complete updated website files ready to push to your Git repository.

## Repository Structure

This matches your existing repository structure at https://github.com/soyroberto/raix

```
raix/
├── index.html (main HTML file)
├── package.json (dependencies)
├── vite.config.js (build configuration)
├── assets/
│   ├── hero-image.png (hero section illustration)
│   ├── index-CUCj_SKy.js (bundled JavaScript)
│   └── index-WURnHpln.css (bundled CSS)
└── public/
    └── assets/
        └── raix-logo.svg (SVG logo for header)
```

## What's Updated

- **SVG Logo**: New `public/assets/raix-logo.svg` for header (22KB, scalable)
- **Hero Image**: Updated `assets/hero-image.png` for middle section (339KB)
- **Rebuilt Assets**: New CSS and JS bundles with updated image references
- **Contact Form**: Integrated Web3Forms (API key already configured)
- **Brand Colors**: Bright blue background with purple accents

## How to Deploy

1. **Extract this zip file**

2. **Replace your local repository contents**:
   - Delete all files in your local `raix` folder (except `.git/`)
   - Copy all files from this zip into your `raix` folder

3. **Commit and push**:
   ```bash
   cd raix
   git add .
   git commit -m "Update website with SVG logo and hero image"
   git push origin main
   ```

4. **Verify**: Visit https://raix.au/ after deployment completes

## Files Included

- `index.html` - Main HTML file with updated asset references
- `assets/hero-image.png` - Hero illustration (PNG)
- `assets/index-*.js` - Bundled JavaScript
- `assets/index-*.css` - Bundled CSS with brand colors
- `public/assets/raix-logo.svg` - SVG logo
- `package.json` - Project dependencies
- `vite.config.js` - Build configuration

All images are now correctly referenced and will load on https://raix.au/

## EOF ##