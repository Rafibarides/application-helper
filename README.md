# Job Application Helper

A tool to streamline job application workflows with one-click copy functionality for contact info, portfolios, and resumes.

## Features

- **Contact Information**: One-click copy for email, phone, and location
- **Bio**: Quick copy of professional bio
- **Portfolio Links**: Job-type specific portfolio links (Software/Dev, Product/Design, Creative Tech)
- **Resume Management**: Quick access to local files and Google Docs for editing
- **Responsive Design**: Optimized for small window sizes
- **Dynamic Data**: All content is loaded from `Data.json` for easy customization

## Installation as Chrome Extension

1. **Download or Clone** this repository to your local machine
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top-right corner
4. **Click "Load unpacked"** and select the `application-helper` folder
5. **Pin the extension** to your toolbar for easy access

The extension will appear as a popup when clicked, giving you quick access to all your job application data.

## Customization

This tool uses **dynamic data loading** from `Data.json`, making it incredibly easy to customize:

1. **Fork this repository** to your own GitHub account
2. **Edit `Data.json`** with your personal information:
   - Update contact details (email, phone, city)
   - Change portfolio URLs and labels
   - Modify bio text
   - Update resume file paths and Google Docs links
3. **Reload the extension** in Chrome (or refresh the web page) to see your changes

### Example Data.json Structure:
```json
{
  "contact": {
    "email": "your-email@example.com",
    "phone": "your-phone-number",
    "city": "Your City, State"
  },
  "portfolio": {
    "software": {
      "url": "https://your-portfolio.com/software",
      "label": "Software/Dev",
      "icon": "fas fa-code"
    }
  }
}
```

## Usage

### Web Version
Open `index.html` in your browser for a full-page version of the tool.

### Extension Version
Click the extension icon in your Chrome toolbar for a compact popup version.

## Notes

- The "Finder" buttons will show file paths when clicked (local file access is restricted in browsers)
- All copy functionality works with modern browsers
- Tool is optimized for small window sizes for easy use alongside application forms
- No code changes needed - just update `Data.json` to customize all content 