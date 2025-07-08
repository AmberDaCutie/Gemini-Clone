# Gemini Clone

A modern, responsive full-stack clone of Google Gemini built with React and Vite on the frontend, and integrated with the Gemini API for backend communication. This project replicates Gemini's conversational AI interface, with animated gradient greetings, a prompt-driven layout, and a modular component architecture.
The backend securely handles API key management and request/response processing, allowing for a clean separation of concerns between UI rendering and data flow.

---

## Demo

![Gemini Clone Demo](./demo.gif)

---

## 📁 Project Structure

```

gemini/
├── public/              # Static assets (favicon, logo, etc.)
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/          # Global assets like images, fonts, etc 
│   ├── components/
│   │   ├── Main/        # Main section of the gemini Interface
│   │   │   ├── Main.css
│   │   │   └── Main.jsx
│   │   └── Sidebar/     # Sidebar navigation
│   │       ├── Sidebar.css
│   │       └── Sidebar.jsx
│   ├── config/          # API configurations and constants
│   │   └── gemini.js
│   ├── context/         # Context API setup
│   │   └── Context.jsx
│   ├── App.jsx          # Root component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point for React
├── index.html           # HTML template with favicon and root div
├── .env                 # Environment variables (e.g. API keys)
├── vite.config.js       # Vite build configuration
├── package.json         # Project metadata and dependencies
└── README.md

````
## 🛠️ Features

- **React + Vite** for fast builds and hot module replacement.
- **Responsive layout** using flexbox and grid.
- **Reusable components** (`Main`, `Sidebar`) for clean modular structure.
- **Animated gradient text** for visual appeal.
- **Context API** structure ready for state management or API integration.

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
npm install
````

---

## 📦 Running the App

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Deployment

You can deploy this app easily using platforms like:

* [Vercel](https://vercel.com/)
* [Netlify](https://netlify.com/)
* [GitHub Pages](https://pages.github.com/) (with extra setup)

Make sure your `logo.png` or any favicon is placed inside `/public` to ensure browser compatibility.


## ✍️ Author
**Aryan Chauhan**
Let me know if you'd like:
- A badge section (Vite, React, MIT License, etc.)
- A GitHub deploy guide.
- Instructions to add Gemini API integration or TTS/voice features.
