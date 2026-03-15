# FarmZy Public Site

This repository contains the **public marketing website** for **FarmZy**.
The site explains the platform, its features, and helps farmers and companies understand how FarmZy enables **direct B2B trade without middlemen**.

The project is built using **Next.js** and a modern frontend stack optimized for **SEO, performance, and scalability**.

---

# Tech Stack Overview

## Next.js

Next.js is the main framework used to build this website.

Why we use it:

* Server-Side Rendering (SSR) for better SEO
* Static Site Generation (SSG) for fast page loading
* Built-in routing system
* Optimized image loading
* Excellent integration with Vercel deployment

This makes Next.js ideal for **startup landing pages and production web applications**.

---

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework used for styling.

Why we use it:

* Fast UI development
* Small CSS bundle size
* Easy responsive design
* Consistent design system

Example:

```tsx
<div className="text-2xl font-bold text-green-700">
  Sell Crops Directly to Companies
</div>
```

---

## shadcn/ui

shadcn/ui provides modern reusable UI components built on top of Radix UI and Tailwind CSS.

Why we use it:

* Accessible components
* Customizable design
* Clean and modern UI
* Works perfectly with Tailwind

Examples of components:

* Buttons
* Cards
* Navigation menus
* Dialogs
* Forms

---

## Framer Motion

Framer Motion is used for animations and smooth UI transitions.

Why we use it:

* Hero section animations
* Scroll animations
* Smooth transitions
* Interactive UI

Example:

```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Welcome to FarmZy
</motion.div>
```

---

## Lucide Icons

Lucide provides clean and consistent icons for the UI.

Why we use it:

* Lightweight icon library
* Modern design
* Easy integration with React

Example:

```tsx
import { Tractor } from "lucide-react"
```

---

# Project Structure

```
src
 ├── app
 │   ├── layout.tsx
 │   ├── page.tsx
 │
 ├── components
 │   ├── landing
 │   │   ├── hero.tsx
 │   │   ├── features.tsx
 │   │   ├── how-it-works.tsx
 │   │   └── cta.tsx
 │
 ├── lib
 ├── styles
 └── public
```

---

# Getting Started

## 1. Clone the repository

```
git clone https://github.com/your-username/farmzy-public-site.git
cd farmzy-public-site
```

---

## 2. Install dependencies

```
npm install
```

---

## 3. Run the development server

```
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

The page will automatically reload when you edit files.

---

# Development Workflow

1. Start the development server
2. Modify components inside `src/components`
3. Update pages inside `src/app`
4. Commit and push changes
5. Vercel automatically deploys the latest version

---

# Future Improvements

Planned additions to the public site include:

* Google Analytics integration
* SEO optimization
* Blog or news section
* Farmer success stories
* Platform demo videos

---

# Purpose of This Website

The FarmZy public site is designed to:

* Explain the FarmZy platform
* Show how farmers can sell directly to companies
* Attract farmers, companies, and partners
* Provide an overview of the FarmZy ecosystem

---

# License

This project is part of the **FarmZy platform** developed as a system for enabling transparent farmer-to-company agricultural trade.
