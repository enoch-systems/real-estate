# RexGold Listings - Premium Real Estate Platform

A modern, responsive real estate property listing application built with Next.js 16 and React 19, featuring a premium property catalog with category filtering and responsive design.

## Project Overview

RexGold Listings is a fully functional real estate platform designed for showcasing premium properties including houses, villas, apartments, bungalows, and farmhouses. It features dynamic property categories, horizontal scrolling listings, and a responsive design optimized for all devices with Naira currency support.

## Features

### Core Functionality
- Dynamic property catalog with category filtering (House, Villa, Apartment, Bungalow, Farmhouse)
- Horizontal scrolling recommended property listings
- Grid-based nearby property listings with responsive layouts
- Mobile-responsive navigation with search functionality
- Property cards with images, locations, and pricing
- Notification system with badge indicators
- Logo and branding with gradient text effects

### Technical Highlights
- React state management with useState hooks
- TypeScript strict mode for type safety
- Tailwind CSS v4 for utility-first styling
- Server and client component separation with Next.js App Router
- Optimized performance with automatic code splitting
- SEO-friendly structure with proper metadata
- Responsive grid layouts (mobile, tablet, desktop)
- Custom scrollbar hiding for horizontal scrolling

## Tech Stack

### Frontend
- Next.js 16.2.4
- React 19.2.4
- TypeScript 5

### Styling
- Tailwind CSS v4
- PostCSS
- React Icons

### Tools
- ESLint
- Git
- Node.js

## Project Structure

```bash
realtor/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── PropertyCategories.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── RecommendedProperties.tsx
│   │   │   └── NearbyProperties.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be deployed on Vercel (automatic deployment from GitHub).

## Contact

- Location: Nigeria
