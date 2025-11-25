# ZamTunes - Vanilla HTML/CSS/JavaScript Version

This folder contains the vanilla HTML, CSS, and JavaScript version of the ZamTunes music streaming app.

## How to Use

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser:
- Double-click the `index.html` file, or
- Right-click and select "Open with" → your preferred browser

### Option 2: Use a Local Server (Recommended)
For the best experience, serve the files using a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Features

- **Sidebar Navigation**: Browse your music library
- **Music Player**: Full-featured player with play/pause, next/previous, shuffle, and repeat
- **Progress Bar**: See and control playback progress
- **Volume Control**: Adjust volume or mute
- **Track List**: View and select all available tracks
- **Quick Access**: Quickly play featured tracks
- **Keyboard Shortcuts**: Press Space to play/pause

## File Structure

```
public/
├── index.html      # Main HTML structure
├── styles.css      # All styling (converted from Tailwind)
├── app.js          # All JavaScript functionality
├── album-1.jpg     # Album artwork
├── album-2.jpg
├── album-3.jpg
└── album-4.jpg
```

## Design

The app features:
- Dark theme with glassmorphism effects
- Zambian flag colors (green, orange/gold, red, black)
- Smooth animations and transitions
- Responsive design
- Custom scrollbars
- Modern card-based layout

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Customization

### Adding New Tracks
Edit the `tracks` array in `app.js`:

```javascript
const tracks = [
    {
        id: 1,
        title: "Your Song Title",
        artist: "Artist Name",
        album: "Album Name",
        duration: "3:45",
        cover: "your-cover.jpg"
    },
    // Add more tracks...
];
```

### Changing Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: hsl(145, 100%, 28%);  /* Green */
    --color-accent: hsl(28, 100%, 50%);    /* Orange */
    --color-destructive: hsl(6, 85%, 48%); /* Red */
}
```

## No Build Process Required!

This is pure HTML, CSS, and JavaScript - no React, no build tools, no npm packages needed. Just open and enjoy! 🎵
