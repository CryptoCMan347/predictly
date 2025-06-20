# Predictly Development Log

## Project Summary
Predictly is a modern web application for prediction-based contests, built with Next.js 14, TypeScript, and Tailwind CSS. It allows users to sign up, participate in contests, purchase credits, and track their performance. The platform features a referral system, Stripe payment integration, and a gamified leaderboard. The backend uses Prisma ORM with a Neon Postgres database, and authentication is handled by NextAuth.js with JWT sessions and a Prisma adapter. The app is deployed on Vercel.

**Production URL:** https://predictly-live.vercel.app/

### Technical Stack
- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** Neon Postgres
- **Authentication:** NextAuth.js (JWT, Prisma Adapter)
- **Payments:** Stripe (checkout, webhook)
- **Deployment:** Vercel

### Core Features
- User authentication and profiles (sign up, sign in, session management)
- Dashboard with credits, contests, and stats
- Contest system with dynamic detail pages and prediction forms
- Leaderboard with gamification (XP, streaks, trophies, pro status)
- Referral system (generate and track codes, bonuses)
- Stripe payments for purchasing credits
- Transaction logging
- Responsive, modern UI with reusable components
- Prisma/Postgres database with migrations for all features

### Important Context
- All environment variables (DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET, STRIPE keys, etc.) must be set in Vercel for production.
- **Production Vercel URL:** https://predictly-live.vercel.app/
- Prisma schema includes custom fields for user gamification and referrals.
- Stripe webhook securely credits user accounts and logs transactions.
- The app is designed for extensibility (future: more payment providers, admin features, notifications).

---

## Project Initialization

### Setup Decisions
- **Framework:** Next.js 14 (with TypeScript, Tailwind CSS)
- **Deployment:** Vercel
- **Version Control:** GitHub (manual and script-based setup)
- **Documentation:** README, development log, reusable scripts

### Initial Steps Completed
- Initialized project with Next.js, TypeScript, Tailwind CSS
- Set up GitHub repository and Vercel deployment
- Created reusable GitHub setup script for future projects

---

## Core UI & Pages (MVP)

### Landing Page
- Modular sections: HeroBanner, HowItWorks, PvPTeaser, ScreenshotsMockups, TestimonialsLeaderboard, JoinNowCTA
- Modern, crypto-meets-sports design with Tailwind
- Animations, tooltips, and accessibility improvements

### Navigation
- Global NavBar with active link highlighting, user avatar placeholder, and responsive mobile menu

### Dashboard (Authenticated Home)
- My Credits (with loading state on Buy More)
- Current Contests (animated join/play buttons)
- Past Performance (tooltips for stats)
- Leaderboard snippet
- Announcements banner
- All sections accessible and visually polished

### Contest Detail Page
- Dynamic route `/contest/[id]`
- Shows contest info, match list, and prediction form
- Form validation, error/success messages, loading state, and accessibility

### Leaderboard Page
- Weekly winners, all-time top earners, pro-exclusive leaderboard (future)
- Gamification elements: XP bars, streaks, trophies (placeholders)

### Account Dashboard
- Credits and withdraw button
- Purchase history
- Upgrade to Pro section
- Referral codes and bonuses
- Support/contact info

---

## Interactivity & Polish
- Animations (fade-in, pulse, bounce)
- Button loading states and transitions
- Tooltips for key stats and info
- Focus rings and ARIA labels for accessibility
- Responsive design throughout

---

## Authentication & User Profiles
- **Database:** Neon Postgres, Prisma ORM
- **Auth:** NextAuth.js with CredentialsProvider (email/password)
- **Prisma schema:** Added all NextAuth and custom user fields (including `hashedPassword`)
- **Prisma client:** Fixed output path, generated client, and ran migrations
- **API routes:**
  - `/api/auth/signup` for registration (hashes password, checks for existing user)
  - `/api/auth/[...nextauth]` for login/session (uses PrismaAdapter and CredentialsProvider)
- **SessionProvider:** Wrapped app in a client-side provider for session context
- **Sign Up/Sign In pages:**
  - Custom forms for registration and login
  - Error handling and redirects
- **NavBar:**
  - Shows Sign In/Sign Up when logged out
  - Shows user avatar and Log Out when logged in
- **User Info Display:**
  - Dashboard and Account pages show user email, username, credits, and pro status when logged in
- **Fixes:**
  - Fixed Prisma client output path and generation issues
  - Fixed session provider usage in app directory (client wrapper)
  - Fixed NextAuth session type extension for custom user fields

---

## Payments & Credits (Stripe Integration)
- **Stripe Checkout:** Implemented `/api/stripe/checkout` to create Stripe sessions for credit purchases.
- **Stripe Webhook:** `/api/stripe/webhook` securely verifies Stripe events, credits user accounts, and logs transactions in the database.
- **Payment Success Page:** `/payment-success` page confirms successful payments and displays session info.
- **Transaction Logging:** All credit purchases are logged in the `Transaction` model.
- **Testing:** Verified end-to-end flow for purchasing credits and updating user balances.

---

## Referral System
- **Referral Code Generation:** `/api/referral` allows users to generate and retrieve unique referral codes.
- **Referred Users:** `/api/referral/referred` returns users referred by the current user.
- **Referral Bonuses:** Referral relationships and bonuses are tracked in the database.

---

## Recent Fixes & Improvements
- Fixed build errors related to API route exports (e.g., only exporting GET/POST in API routes).
- Wrapped `useSearchParams` in a Suspense boundary on `/payment-success` to resolve Next.js build warnings.
- Added clarifying comments and improved error handling in API routes.
- Ensured all environment variables are documented and required for Vercel deployment.

---

**Sign up, sign in, user session display, Stripe payments, referral system, and user dashboard are now fully working!**

---

**Next: Choose new features, polish, or bug fixes to build!** 