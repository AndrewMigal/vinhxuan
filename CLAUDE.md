# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VinhXuan** is a React-based single-page application for a Vietnamese martial arts (Vinh Xuan) training academy. It's a marketing website with a registration system, built with modern frontend technologies. The UI is entirely in Russian.

## Development Commands

### Setup
```bash
npm install                    # Install dependencies
```

### Development
```bash
npm run dev                    # Start Vite dev server with HMR (default: http://localhost:5173)
npm run lint                   # Run ESLint to check for code issues
```

### Production
```bash
npm run build                  # Build for production (outputs to dist/)
npm run preview                # Preview production build locally
```

## Architecture

### Tech Stack
- **Framework**: React 19 with React Router DOM for client-side routing
- **Build Tool**: Vite 8 (fast dev server with HMR)
- **Styling**: Tailwind CSS v4.3.0 (utility-first CSS framework)
- **Email Integration**: EmailJS for form submissions
- **Icons**: Lucide React

### Application Structure

```
src/
├── pages/
│   ├── HomePage.jsx          # Landing page (route: /)
│   └── RegisterPage.jsx       # Registration form (route: /register)
├── App.jsx                    # Main routing component
├── main.jsx                   # React entry point with BrowserRouter
├── index.css                  # Tailwind imports + base styles
└── App.css                    # Additional component styles
```

### Routing
- `/` → **HomePage**: Landing page with hero section, feature cards, and CTAs
- `/register` → **RegisterPage**: Registration form with EmailJS integration

### Email Integration (EmailJS)

The registration form uses EmailJS to send form submissions. **Environment variables are required:**

```bash
# Copy .env.example to .env and fill in your EmailJS credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Template parameters sent to EmailJS:**
- `from_name` - User's name
- `from_email` - User's email
- `from_phone` - User's phone number
- `experience_level` - Russian label: "Начинающий" (beginner), "Средний" (intermediate), or "Продвинутый" (advanced)
- `message` - Optional additional message (defaults to "Нет дополнительной информации" if empty)

**Form flow** (src/pages/RegisterPage.jsx:25-77):
1. User submits form with validation (HTML5 required fields)
2. Experience level is mapped from English keys to Russian labels for email
3. EmailJS API called with template parameters
4. Success: Form resets + green success message displayed
5. Error: Red error message displayed + form data preserved

### Styling System

**Tailwind CSS v4.3.0** configured with custom theme (tailwind.config.js):
- Dark color palette: `background: #000000`, `surface: #111111`, `accent: #ffffff`
- Font stack: Inter with system fallback
- Custom letter spacing utilities
- **Note**: Pages currently use light indigo/purple gradients despite dark theme config

### Git Workflow

Recent commits:
- `a5345fe` - "mail set up" - EmailJS integration implemented
- `1b8ff3a` - "Boilerplate" - Initial Vite + React setup

Current status: `.env.example` is untracked (intentional - users copy to `.env` with their credentials)

## Key Implementation Details

### RegisterPage Form State
- Uses React `useState` hooks for form data and submission status
- Controlled components with `handleChange` updating state
- `isSubmitting` state prevents double-submission
- `submitStatus` tracks 'success' | 'error' | null for user feedback

### Environment Variables
All environment variables must be prefixed with `VITE_` to be exposed to the browser in Vite. Access via `import.meta.env.VITE_*`.

### ESLint Configuration
Uses flat config format (eslint.config.js) with:
- React hooks linting rules
- React refresh support for HMR
- Browser globals defined

## UI Content Language

All user-facing text is in **Russian**. When modifying UI components, maintain Russian language consistency:
- Button labels: "Отправить заявку" (Submit request), "Вернуться на главную" (Back to home)
- Form labels: "Имя" (Name), "Email", "Телефон" (Phone), "Уровень подготовки" (Experience level)
- Feedback messages: "Спасибо за регистрацию!" (Thank you for registration!), error messages, etc.
