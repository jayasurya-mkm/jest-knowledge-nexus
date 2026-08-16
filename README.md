# 🚀 Modern Angular Unit Testing with Jest & Testing Library

A comprehensive, professional presentation deck for mastering modern Angular unit testing practices. This repository contains a production-ready, themeable, and fully functional HTML/CSS/JS slide deck.

---

## ✨ Key Features

- **Professional Design**: Modern, clean UI with glassmorphism, smooth animations, and AI-optimized color palettes.
- **Advanced Typography**: Powered by Google Fonts (Outfit, JetBrains Mono, Plus Jakarta Sans) for maximum readability.
- **Phosphor Icons**: Complete set of high-quality, modern icons for visual enhancements.
- **Theme System**: 4 built-in themes (Clean Studio, Cyber Neon, Executive Slate, Midnight Blue).
- **Interactive Features**:
  - Slide Navigation (Arrows, Spacebar, Click)
  - Auto-play with progress bar
  - Speaker Notes drawer
  - Grid View (Thumbnail Overview)
  - Print/PDF Export
  - Presentation Mode
  - Theme & Transition Customization
- **Full Test Coverage Examples**: Includes complete code snippets and "Best Practices vs. Pitfalls" comparisons.

---

## 📂 Repository Structure

```
.
├── .gitignore              # Ensures only necessary files are tracked
├── README.md               # This file
├── index.html              # Main presentation entry point
├── vite.config.js          # Vite build configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── src/
│   ├── styles.css          # Global styles and themes
│   ├── app.js              # Core application logic and controller
│   └── slides.js           # All presentation content and notes
└── assets/
    ├── banner.png          # Presentation banner/hero image
    ├── architecture.png    # Diagrams and architecture visuals
    ├── http-call.png       # HTTP testing examples
    ├── mock-http.png       # Mocking examples
    ├── dashboard.png       # Mock service visual
```

---

## ⚙️ Prerequisites

- **Node.js**: Version 20.x or higher.
- **npm**: Comes bundled with Node.js.

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd jest-knowledge-nexus
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

### 4. Build for Production

Generate the static files for deployment:

```bash
npm run build
```

The output will be in the `dist` folder.

---

## 🎨 Customization

### Changing Themes

To change the default theme, edit the `theme-` class in `index.html` or update the `selected` attribute in the theme dropdown in `src/slides.js`.

### Adding or Editing Slides

All content is managed in `src/slides.js`. Each slide object contains:
- `title`: Slide title
- `layout`: Template type (standard, title-only, image, code, etc.)
- `body`: Content array (text, lists, code blocks)
- `notes`: Speaker notes
- `classes`: Additional CSS classes

### Adding Images

Place your images in the `assets/` directory and reference them in the `slides.js` content array.

---

## 📝 Running Tests

To run the test suite (if applicable) or development checks:

```bash
npm test
```

---

## 🤝 Contributing

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📄 License

[Specify License Here - e.g., MIT]
