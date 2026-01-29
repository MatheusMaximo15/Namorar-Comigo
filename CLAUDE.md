# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A fun interactive Valentine's Day page built with React, TypeScript, and Vite. The page presents a "Will you be my Valentine?" question with two buttons: "Yes" and "No". Each time the user clicks "No", the button text changes through progressively more desperate phrases, and the "Yes" button grows larger to encourage clicking it.

## Development Commands

This project uses **pnpm** as the package manager.

```bash
# Install dependencies
pnpm i

# Start development server
pnpm run dev

# Build for production (TypeScript compile + Vite build)
pnpm run build

# Preview production build locally
pnpm run preview

# Lint code with ESLint
pnpm run lint

# Build and deploy to GitHub Pages
pnpm run deploy
```

## Architecture

**Single Page Application**: The entire interactive experience is in [src/App.tsx](src/App.tsx). No routing or complex state management needed.

**Core Logic**:
- `noCount` state tracks how many times "No" has been clicked
- `yesButtonSize` grows proportionally to `noCount` (formula: `noCount * 20 + 16`)
- `getNoButtonText()` returns increasingly desperate phrases from a hardcoded array
- When "Yes" is clicked, `yesPressed` state triggers the success view

**Styling**: Tailwind CSS utility classes throughout. No custom CSS beyond [index.css](src/index.css) and [App.css](src/App.css).

**Build Configuration**: Vite config in [vite.config.ts](vite.config.ts) sets `base: "/will-you-be-my-valentine"` for GitHub Pages deployment path.

## Key Files

- [src/App.tsx](src/App.tsx) - Main component with all interaction logic
- [src/main.tsx](src/main.tsx) - React app entry point
- [index.html](index.html) - HTML shell
- [vite.config.ts](vite.config.ts) - Vite configuration with GitHub Pages base path
