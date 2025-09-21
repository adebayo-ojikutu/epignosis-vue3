# Epignosis Vue 3 App

A Vue 3 application built with **Vuetify 3**, **Vuelidate**, **Vue Router**, and **Axios**. This project uses **Vite** as the build tool and supports modern frontend development features.

## Prerequisites

- **Node.js**: Recommended **v18.x** or higher (v20.x is also supported).  
  Check your Node.js version with:  
  ```bash
  node -v
  ```
- **npm** (comes with Node.js) or **yarn** for package management.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd epignosis_vue_3
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   Or if using Yarn:
   ```bash
   yarn
   ```

## Running the App

### Development Mode
Start a local development server with hot-reloading:
```bash
npm run dev
```
The app should now be running at `http://localhost:5173` (or another port Vite chooses).

### Production Build
Generate a production-ready build:
```bash
npm run build
```

### Preview Production Build
Preview the built application locally:
```bash
npm run preview
```

### Linting
Automatically fix linting errors:
```bash
npm run lint
```

## Project Structure

- `src/` – Main source code  
- `src/components/` – Vue components  
- `src/router/` – Vue Router configuration  
- `src/views/` – Page views  
- `public/` – Static assets  
- `vite.config.js` – Vite configuration  

## Dependencies

- **Vue 3** – Frontend framework  
- **Vuetify 3** – Material Design UI components  
- **Vue Router** – Client-side routing  
- **Vuelidate** – Form validation  
- **Axios** – HTTP requests  

## Dev Dependencies

- **Vite** – Build tool  
- **ESLint** – Code linting  
- **vite-plugin-vuetify** – Vuetify plugin for Vite  
- **unplugin-vue-components** – Auto-import Vue components  
- **sass-embedded** – Sass support

