# Recipe Finder

## Overview

Recipe Finder is a modern web application that allows users to search, browse, and save their favorite recipes. The app features a clean interface with dark/light theme support, real-time search capabilities, and persistent favorites storage. Users can explore recipes by category, view detailed recipe information including ingredients and instructions, and maintain a personalized list of favorite recipes.

## Built with

- [Next.js](https://nextjs.org/) - React framework with App Router and Turbopack
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Beautiful icon library

The data is provided by [TheMealDB](https://www.themealdb.com/)

## Live Version

https://recipe-finder-rho-ashy.vercel.app/

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. You'll also need Node.js version 18 or higher.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/cynthiamv/recipe-finder.git

# Go into the repository
$ cd recipe-finder

# Install dependencies
$ npm install

# Run the development server
$ npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)

## Features

- 🔍 **Search Recipes** - Find recipes by name with instant results
- 📂 **Browse Categories** - Explore recipes organized by categories
- ❤️ **Save Favorites** - Add recipes to your personal favorites list (persisted locally)
- 🌙 **Dark/Light Mode** - Toggle between themes with system preference detection
- ⏳ **Loading States** - Beautiful loading indicators on all pages
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Available Scripts

```bash
# Development
$ npm run dev

# Build for production
$ npm run build

# Start production server
$ npm start

# Run linting
$ npm run lint
```
