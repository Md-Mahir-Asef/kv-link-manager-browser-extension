# <img src="https://raw.githubusercontent.com/Md-Mahir-Asef/kv-link-manager-browser-extension/refs/heads/main/public/logo.ico" alt="Logo" width="30"/> KV Link Manager

KV Link Manager is a browser extension for managing your links as a key-value (KV) pair and accessing your links easily by searching in the search bar. You can also categorize the links into various custom categories or folders, or lists. This will enrich your productivity while working in the browser. This will relieve you of the hassle of finding previously visited links in the messy bookmarks.

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

- [x] Create, delete links

> In Progress

- [ ] Drag and drop links to sort them 

---

## 📝 API Documentation

### 📦 Postman Collection

- Download or import the full Postman collection:  
  [todo-app-collection.json](./docs/api-docs/Todo-App.postman_collection.json)

### 📘 Human-Readable Docs (Markdown)

- See [docs/api-docs.md](./docs/API-Documentation.md) for detailed endpoint documentation.

### 🌐 Online Docs (Optional)

- Live docs hosted via Postman: [View Here](https://documenter.getpostman.com/view/37884508/2sB34ZrPh8)

---

## 📖 What I Learned

- Containerizing my project with Docker
- Managing containers with Docker Compose
- User authentication
- Persistent login with JWT and cookies
- Logging in server side with Winston
- Seeding dummy information into database in development environment
- Managing database schema and migrations with Prisma

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose
- Git

### Local Setup

```bash
git clone https://github.com/Md-Mahir-Asef/todo-app.git
cd todo-app
docker-compose up --build
```
