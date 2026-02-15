# Dr. Anandibai Joshi Memorial Foundation – Website

A modern, responsive NGO website for **Dr. Anandibai Joshi Memorial Foundation for Women's Health and Education**, built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** (functional components)
- **Vite** – build tool
- **Tailwind CSS** – styling (soft lavender/rose palette, custom theme)
- **Framer Motion** – scroll and hover animations

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/       # Reusable UI (Button, Card, Navbar, Loader)
├── sections/         # Page sections (Hero, About, Initiatives, etc.)
├── assets/           # Images and static assets
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

1. **Hero** – Full-width hero with CTAs (Donate, Volunteer)
2. **About** – Two-column about with image and “Learn More”
3. **Key Initiatives** – Three cards (Health, Scholarships, Skill Development)
4. **Impact** – Animated stats (5000+ women, 120+ camps, etc.)
5. **Ongoing Programs** – Three program cards with images
6. **Testimonials** – Success stories
7. **Events** – Upcoming events & news
8. **Donate** – Support CTA
9. **Footer** – Links, social, contact, copyright

Features: sticky transparent navbar that becomes solid on scroll, smooth scrolling, loading animation, mobile-first responsive layout.
