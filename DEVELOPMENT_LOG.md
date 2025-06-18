# Predictly Development Log

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

**Sign up, sign in, and user session display are now fully working!**

---

**Next: Choose new features or polish to build!** 