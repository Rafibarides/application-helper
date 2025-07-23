# Job Application Helper - Chrome Extension

Convert your job application helper into a private Chrome extension for instant access from your browser toolbar.

## Files Included

- `manifest.json` - Chrome extension configuration
- `popup.html` - Extension popup (optimized for small window)
- `index.html` - Original web version (for GitHub Pages)

## Installation Instructions

### Step 1: Prepare Extension Files
1. Make sure you have these files in your `application-helper` folder:
   - `manifest.json`
   - `popup.html`
   - Optional: Add icon files (see below)

### Step 2: Install as Chrome Extension
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select your `application-helper` folder
5. The extension should appear in your extensions list

### Step 3: Pin to Toolbar
1. Click the Extensions icon (puzzle piece) in Chrome toolbar
2. Find "Job Application Helper" and click the pin icon
3. The extension icon will now appear in your toolbar

## Usage
- Click the extension icon in your toolbar
- Popup opens with all your job application tools
- One-click copy for all links and info
- Perfect for side-by-side use with job application forms

## Adding Icons (Optional)
To add custom icons to your extension:
1. Create or download 16x16, 48x48, and 128x128 pixel PNG files named:
   - `icon16.png`
   - `icon48.png` 
   - `icon128.png`
2. Add this to your `manifest.json` after the permissions section:
   ```json
   "icons": {
     "16": "icon16.png",
     "48": "icon48.png",
     "128": "icon128.png"
   }
   ```

Without custom icons, Chrome will use a default extension icon.

## Benefits as Extension
- ✅ **Instant Access** - Always available in toolbar
- ✅ **No Website Needed** - Works offline
- ✅ **Compact UI** - Optimized for popup window
- ✅ **Private** - Only visible to you
- ✅ **Fast** - No page loading, immediate popup

## Updating the Extension
After making changes to any files:
1. Go to `chrome://extensions/`
2. Click the refresh icon on your extension
3. Changes will be applied immediately 