# Annisweb Image Asset Audit & Speed Optimization Report

**Date:** 2026-09-10
**Scope:** All image files under `src/` (excluding `node_modules` and `.git`)

---

## Executive Summary

This audit identified **14 image assets** across the Annisweb codebase. Key findings:

- **2 files** are very large and need immediate optimization (`news.png` at 1.4MB, `randomPassImg.png` at 726KB)
- **2 files** are unused (`cartoon.svg` - not referenced in any JSX; `home-main.svg` referenced only as a CSS class)
- **0 files** currently use `loading="lazy"` in JSX
- **4 files** are in SVG format (3 used, 1 unused)
- **1 file** (`about1.jpg` at 457KB) is dramatically oversized for its display size

---

## 1. File Inventory by Category

### Hero/Background Images (High Impact)

| File | Path | Size | Format | Optimization Priority |
|------|------|------|--------|----------------------|
| `home-bg.jpg` | `src/Assets/home-bg.jpg` | 32 KB | JPG | ⭐ Low - already optimized for photographic background |
| `annis.png` | `src/Assets/annis.png` | 212 KB | PNG | ⭐⭐⭐ High - convert to WebP; displayed as avatar at max-height 450px |

### Avatar/Profile Images (Medium Impact)

| File | Path | Size | Format | Optimization Priority |
|------|------|------|--------|----------------------|
| `avatar.svg` | `src/Assets/avatar.svg` | 13 KB | SVG | ✅ No action needed - already SVG |
| `annis.png` | `src/Assets/annis.png` | 212 KB | PNG | ⭐⭐⭐ High - also counts as hero avatar; convert to WebP |

### Project Showcase Images (Medium Impact)

| File | Path | Size | Format | Optimization Priority |
|------|------|------|--------|----------------------|
| `bookstore.png` | `src/Assets/Projects/bookstore.png` | 22 KB | PNG | ✅ No action needed - small file |
| `terra.png` | `src/Assets/Projects/terra.png` | 13 KB | PNG | ✅ No action needed - small file |
| `defensys.png` | `src/Assets/Projects/defensys.png` | 449 KB | PNG | ⭐⭐⭐ High - convert to WebP; displayed in project card at height 240px |
| `medisync.png` | `src/Assets/Projects/medisync.png` | 90 KB | PNG | ⭐⭐ Medium - convert to WebP |
| `news.png` | `src/Assets/Projects/news.png` | **1.4 MB** | PNG | ⭐⭐⭐⭐ Critical - convert to WebP; could reduce to ~150-200KB |
| `randomPassImg.png` | `src/Assets/Projects/randomPassImg.png` | **726 KB** | PNG | ⭐⭐⭐⭐ Critical - convert to WebP; could reduce to ~100-150KB |

### Icons and Small Graphics (Low Impact)

| File | Path | Size | Format | Optimization Priority |
|------|------|------|--------|----------------------|
| `avatar.svg` | `src/Assets/avatar.svg` | 13 KB | SVG | ✅ No action needed |
| `home-main.svg` | `src/Assets/home-main.svg` | 107 KB | SVG | ⭐ Low - verify usage; if decorative, consider simplifying CSS |
| `cartoon.svg` | `src/Assets/cartoon.svg` | 221 KB | SVG | ❌ **Remove** - not referenced in any JSX or CSS |

### Decorative/Divider Images (Low Impact)

| File | Path | Size | Format | Optimization Priority |
|------|------|------|--------|----------------------|
| `pre.svg` | `src/Assets/pre.svg` | 2 KB | SVG | ✅ No action needed - tiny preloader SVG |

---

## 2. Detailed Optimization Analysis

### Images Used Without `loading="lazy"`

**None of the 14 images have `loading="lazy"` attribute in JSX.** Adding lazy loading to offscreen images would improve initial page load performance.

**Recommendation:** Add `loading="lazy"` to all `<img>` tags for images below the fold, particularly:
- Project showcase images (`ProjectCards.js`)
- About section laptop image (`AboutCard.js` / `About.js`)
- Hero avatar (`HeroSection.js`, `HomeNew.js`)

### Display Size vs. Actual File Size Mismatches

| Image | Display Constraints | File Size | Issue |
|-------|--------------------|-----------|-------|
| `about1.jpg` | maxWidth: 400px, width: 100% | 457 KB | **Severe mismatch** - JPG at 457KB for ~400px display width. Convert to WebP (~30-50KB). |
| `annis.png` | maxHeight: 450px, width: 100% | 212 KB | **High** - PNG for avatar. Convert to WebP (~50-70KB). |
| `defensys.png` | height: 240px in project card | 449 KB | **High** - PNG for 240px height. Convert to WebP (~50-70KB). |
| `news.png` | project detail placeholder | 1.4 MB | **Critical** - Extremely large for project showcase. Convert to WebP (~150-200KB). |
| `randomPassImg.png` | project detail placeholder | 726 KB | **Critical** - Extremely large. Convert to WebP (~100-150KB). |

### Conversion Opportunities: PNG → WebP/AVIF

| File | Current | Estimated WebP | Savings |
|------|---------|----------------|---------|
| `about1.jpg` → WebP | 457 KB | ~40 KB | ~91% reduction |
| `annis.png` → WebP | 212 KB | ~55 KB | ~74% reduction |
| `defensys.png` → WebP | 449 KB | ~60 KB | ~87% reduction |
| `medisync.png` → WebP | 90 KB | ~25 KB | ~72% reduction |
| `news.png` → WebP | 1.4 MB | ~180 KB | ~87% reduction |
| `randomPassImg.png` → WebP | 726 KB | ~120 KB | ~83% reduction |

**AVIF would offer additional 20-30% savings over WebP** but requires broader browser support consideration.

### SVG Optimization

- `avatar.svg` (13KB) - Already minimal; no further optimization needed
- `home-main.svg` (107KB) - Large for an SVG; review for unnecessary metadata or consider simplifying the CSS `.home-main` class if the SVG is purely decorative
- `cartoon.svg` (221KB) - **Remove entirely** - unused asset

### Duplicate/Redundant Assets

- **`home-main.svg`** - Defined as CSS class `.home-main` at `style.css:1170`. Verify if this SVG is actually rendered in the UI or if the class is used for styling only. If decorative, consider replacing with CSS-only gradients.
- **`cartoon.svg`** - Not referenced anywhere in the codebase. **Remove.**

---

## 3. Priority Action Items

### Critical (Immediate Impact)

1. **Convert `news.png` and `randomPassImg.png` to WebP**
   - Current: 1.4 MB and 726 KB respectively
   - Target: ~180 KB and ~120 KB
   - Potential page load improvement: Significant

2. **Convert `about1.jpg` to WebP**
   - Current: 457 KB displayed at ~400px width
   - Target: ~40 KB
   - Potential page load improvement: High

3. **Add `loading="lazy"` to all offscreen `<img>` tags**
   - Project card images in `ProjectCards.js`
   - About section image in `About.js`
   - Hero avatar in `HeroSection.js` and `HomeNew.js`

### High Priority

4. **Convert `annis.png`, `defensys.png`, `medisync.png` to WebP**
   - Current sizes: 212 KB, 449 KB, 90 KB
   - Target sizes: ~55 KB, ~60 KB, ~25 KB

### Medium Priority

5. **Evaluate `home-main.svg` usage**
   - If decorative/background only: Replace with CSS gradients or remove
   - If actual SVG element: Optimize SVG file

6. **Remove `cartoon.svg`**
   - Unused asset taking up 221 KB

### Low Priority

7. **Verify `home-bg.jpg` quality at current size**
   - Already optimized at 31 KB for photographic background

8. **Add `loading="lazy"` to `about.png`/`laptopImg` display**
   - Currently no lazy loading; image is above the fold in About section, so priority is lower

---

## 4. Summary Table: All 14 Image Assets

| # | File | Path | Size | Category | Lazy Loading | Convert to WebP? | Priority |
|---|------|------|------|----------|--------------|------------------|----------|
| 1 | `about.png` | `src/Assets/about.png` | 107 KB | Avatar/Project | No | ✅ Medium | Medium |
| 2 | `about1.jpg` | `src/Assets/about1.jpg` | 457 KB | Hero/avatar | No | ✅ **Critical** | Critical |
| 3 | `annis.png` | `src/Assets/annis.png` | 212 KB | Hero avatar | No | ✅ **High** | High |
| 4 | `avatar.svg` | `src/Assets/avatar.svg` | 13 KB | Avatar | N/A (SVG) | ✅ No | None |
| 5 | `cartoon.svg` | `src/Assets/cartoon.svg` | 221 KB | Icons | N/A (SVG) | ❌ **Remove** | Critical |
| 6 | `home-bg.jpg` | `src/Assets/home-bg.jpg` | 31 KB | Background | N/A | ✅ No | None |
| 7 | `home-main.svg` | `src/Assets/home-main.svg` | 107 KB | Decorative | N/A (CSS class) | ⭐ Review | Medium |
| 8 | `pre.svg` | `src/Assets/pre.svg` | 2 KB | Decillary | N/A (SVG) | ✅ No | None |
| 9 | `bookstore.png` | `src/Assets/Projects/bookstore.png` | 22 KB | Project image | No | ✅ No | None |
| 10 | `defensys.png` | `src/Assets/Projects/defensys.png` | 449 KB | Project image | No | ✅ **High** | High |
| 11 | `medisync.png` | `src/Assets/Projects/medisync.png` | 90 KB | Project image | No | ✅ Medium | Medium |
| 12 | `news.png` | `src/Assets/Projects/news.png` | 1.4 MB | Project image | No | ✅ **Critical** | Critical |
| 13 | `randomPassImg.png` | `src/Assets/Projects/randomPassImg.png` | 726 KB | Project image | No | ✅ **Critical** | Critical |
| 14 | `terra.png` | `src/Assets/Projects/terra.png` | 13 KB | Project image | No | ✅ No | None |

---

## 5. Estimated Performance Gains

If all recommended WebP conversions are applied:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total image size | ~4.3 MB | ~1.1 MB | **~74% reduction** |
| Critical files (`news.png` + `randomPassImg.png` + `about1.jpg`) | ~2.6 MB | ~260 KB | **90% reduction** |

Adding `loading="lazy"` to all appropriate images would further improve perceived page load speed by deferring offscreen image loading.

---

## 6. Recommended Next Steps

1. **Run the following conversions using a tool like `cwebp` or GUI converters:**
   ```bash
   cwebp src/Assets/about1.jpg -o src/Assets/about1.webp
   cwebp src/Assets/annis.png -o src/Assets/annis.webp
   cwebp src/Assets/defensys.png -o src/Assets/defensys.webp
   cwebp src/Assets/medisync.png -o src/Assets/medisync.webp
   cwebp src/Assets/news.png -o src/Assets/news.webp
   cwebp src/Assets/randomPassImg.png -o src/Assets/randomPassImg.webp
   ```

2. **Update all `<img>` tags to use WebP formats with fallback to original:**
   ```jsx
   <img src="/assets/image.webp" alt="..." loading="lazy" />
   ```

3. **Remove `cartoon.svg`** from `src/Assets/`

4. **Evaluate `home-main.svg`** - determine if the CSS class `.home-main` is still needed or if the SVG should be replaced with CSS-only styling

5. **Add `loading="lazy"`** to all offscreen project card images and avatar images