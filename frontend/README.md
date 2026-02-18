# name.ai - Applied AI & Automation Studio

A production-ready website for an AI solutions agency built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This is a complete, production-ready website for an Applied AI & Automation Studio. The site positions the agency as a problem-solving partner that builds working prototypes before full implementation.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion (subtle animations)
- **Icons:** Lucide React
- **Email:** Resend
- **Deployment:** Vercel (recommended)

## Project Structure

```
name.ai/
├── app/
│   ├── actions/          # Server actions (contact form)
│   ├── book-demo/        # Demo booking page
│   ├── contact/          # Contact form page
│   ├── how-we-work/      # Process explanation page
│   ├── services/         # Services listing page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header
│   └── Footer.tsx        # Site footer
└── lib/
    └── utils.ts          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Resend account (for contact form emails)
- A Calendly account (for demo booking)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd name.ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your values:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=hello@name.ai
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/demo
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update the `from` email in `app/actions/contact.ts` to use your verified domain (or keep the default for testing)

### Calendly Setup

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Create an event type (e.g., "Demo Call")
3. Copy the event URL
4. Add it to `.env.local` as `NEXT_PUBLIC_CALENDLY_URL`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy

The site will be live at `your-project.vercel.app`

### Environment Variables for Production

Make sure to add all environment variables in your deployment platform:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_CALENDLY_URL`

## Pages

- **/** - Homepage with hero, services, process, and CTA
- **/services** - Detailed service descriptions
- **/how-we-work** - Step-by-step client journey
- **/contact** - Problem submission form
- **/book-demo** - Calendly embed for demo booking

## Customization

### Branding

- Replace "name.ai" throughout the codebase with your actual brand name
- Update colors in `tailwind.config.ts` if needed
- Modify copy in component files to match your voice

### Content

All content is in the component files:
- Homepage sections: `components/sections/`
- Page content: `app/[page]/page.tsx`
- Navigation: `components/Header.tsx`

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO-optimized with metadata
- ✅ Accessible UI components
- ✅ Contact form with email notifications
- ✅ Calendly integration for booking
- ✅ Subtle animations with Framer Motion
- ✅ Clean, professional design
- ✅ TypeScript for type safety

## Future Enhancements

The codebase is structured to easily add:
- Authentication system
- Client dashboard
- Backend API routes
- Database integration
- Blog or case studies
- Analytics integration

## License

Private - All rights reserved

## Support

For questions or issues, please contact the development team.
