# <img src="https://raw.githubusercontent.com/Md-Mahir-Asef/kv-link-manager-browser-extension/refs/heads/main/public/logo.ico" alt="Logo" width="30"/> KV Link Manager

KV Link Manager is a browser extension for managing your links as a key-value (KV) pair. KV Link Manager gives you a simple, user-friendly, and productive UI that will enrich your productivity while working in the browser. KV Link Manager auto-detects the current page title and URL so that you don't need to type it manually. KV Link manager will relieve you of the hassle of finding previously visited links in the messy bookmarks. We care about your productivity.

---

## 📌 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [What I Learned](#-what-i-learned)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)

---

## ⚙️ Tech Stack

### Frontend

- Vite
- React
- TypeScript

### Tooling

- ESLint & Prettier
- GitHub

---

## ✅ Features

> Completed

- [x] Simple and Productive UI
- [x] Create, delete links
- [x] Auto Identify tab title and tab link

> In Progress

- [ ] Drag and drop links to sort them

---

## 📖 What I Learned

- Developing an chrome extension
- Performing CRUD operation on browser's local storage

## 🚀 Getting Started

### Prerequisites

- Git
- Node and npm

### Local Setup

Copy and run the following command.

```bash
git clone https://github.com/Md-Mahir-Asef/kv-link-manager-browser-extension.git
cd kv-link-manager-browser-extension
npx tsc -b && npx vite build
```

Then go to [chrome://extensions/](chrome://extensions/) and turn on Developer mode in the top-right corner, and then click on Load unpacked in the top-left corner. Then navigate to the kv-link-manager-browser-extension folder and select the dist folder, and click on select folder. Now you are good to go to use KV Link Manager in your browser.
