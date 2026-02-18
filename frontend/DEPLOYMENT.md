# Deployment Guide

## Quick Start Checklist

### Before Deployment

- [ ] Install dependencies: `npm install`
- [ ] Set up environment variables in `.env.local`
- [ ] Test contact form locally
- [ ] Verify Calendly URL works
- [ ] Update brand name from "name.ai" to your actual brand
- [ ] Update Resend "from" email with your verified domain

### Environment Variables

Create `.env.local` (or set in your deployment platform):

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@name.ai
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/demo
```

### Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. For production, verify your domain and update the `from` email in `app/actions/contact.ts`

### Calendly Setup

1. Create account at [calendly.com](https://calendly.com)
2. Create an event type (e.g., "Demo Call")
3. Copy the event URL to `NEXT_PUBLIC_CALENDLY_URL`

### Vercel Deployment

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Post-Deployment

- [ ] Test contact form on production
- [ ] Verify Calendly embed loads correctly
- [ ] Check all pages load properly
- [ ] Test mobile responsiveness
- [ ] Verify SEO metadata

## Customization

### Branding

Search and replace "name.ai" throughout:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)
- All page content

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

All copy is in component files - edit directly:
- Homepage: `components/sections/`
- Pages: `app/[page]/page.tsx`
