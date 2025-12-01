# Ajirio Frontend

Ajirio is a digital platform designed to connect job seekers with verified employers and gig opportunities. The platform aims to reduce unemployment by providing accessible, transparent, and fair job opportunities, aligned with UN Sustainable Development Goal 8.

Live App: 

This repository contains the **frontend** of the Ajirio platform, built with **React**, **Vite**, **Tailwind CSS**, **ShadCN UI**, and **Clerk authentication**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

Include a screenshot or link to a live demo here (if deployed).

---

## Features

- Home page showcasing the platform mission and categories.
- Job listing page with search and filter functionality.
- User authentication using **Clerk**.
- Protected dashboard accessible only to authenticated users.
- Responsive design powered by **Tailwind CSS**.
- Reusable components using **ShadCN UI**.
- 404 error page for non-existent routes.

---

## Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **ShadCN UI**
- **Clerk Authentication**
- **React Router**
- **JavaScript (ES6+)**

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/ajirio-frontend.git
cd ajirio-frontend

2. Install dependencies
npm install

3. Create .env file

Create a .env file in the project root with the following variables:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here


Replace your_clerk_publishable_key_here with your Clerk key from Clerk Dashboard
.

4. Run the development server
npm run dev


Open http://localhost:8080
 in your browser.

Available Scripts

npm run dev – Start the Vite development server

npm run build – Build the production-ready frontend

npm run preview – Preview the production build locally

npm run lint – Run linting on your code

Folder Structure
ajirio-frontend/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ pages/            # Application pages (Home, Jobs, Dashboard, Login, Signup)
│  ├─ styles/           # CSS files (Tailwind, custom)
│  ├─ App.jsx           # Main app with routing
│  └─ main.jsx          # Entry point
├─ public/              # Static assets (images, favicon, etc.)
├─ package.json
├─ tailwind.config.js
├─ postcss.config.cjs
└─ vite.config.js

Contributing

Contributions are welcome!

Fork the repository

Create a new branch: git checkout -b feature/your-feature

Make your changes and commit: git commit -m "Add your message"

Push to the branch: git push origin feature/your-feature

Open a Pull Request
