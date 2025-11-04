# Venn Landing Page

A modern, responsive landing page for Venn - a social connection platform that helps people stop scrolling and start living.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Comprehensive on-site SEO with meta tags, Open Graph, structured data
- **Multi-Step Form**: Beautiful waitlist signup with Airtable integration
- **Animated UI**: Smooth animations and transitions
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels
- **Performance**: Fast loading with Next.js 15 and optimized images

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (sans-serif), Playfair Display (display)
- **Icons**: Lucide React
- **Backend**: Airtable API for waitlist management

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Airtable account (for waitlist functionality)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Airtable credentials:

```env
NEXT_PUBLIC_AIRTABLE_TOKEN=your_airtable_personal_access_token
NEXT_PUBLIC_AIRTABLE_BASE_ID=your_base_id
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Waitlist
```

#### Getting Airtable Credentials:

1. **Personal Access Token**:
   - Go to https://airtable.com/account
   - Click "Generate token" under "Personal access tokens"
   - Give it a name and select scopes: `data.records:read` and `data.records:write`

2. **Base ID**:
   - Go to https://airtable.com/api
   - Select your base
   - The Base ID is shown in the URL and documentation

3. **Table Setup**: Create a table with these fields:
   - Name (Single line text)
   - Age (Number)
   - Gender (Single line text)
   - Contact (Email or Single line text)

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🌐 Deploying to Vercel

### Environment Variables for Vercel

Make sure to add these environment variables in your Vercel project settings:

- `NEXT_PUBLIC_AIRTABLE_TOKEN`
- `NEXT_PUBLIC_AIRTABLE_BASE_ID`
- `NEXT_PUBLIC_AIRTABLE_TABLE_NAME`

### Deploy Steps

1. Push your code to GitHub (Pacific Software Ventures org)
2. Go to [vercel.com](https://vercel.com)
3. Import the project from the PSV organization
4. Add environment variables
5. Deploy!

## 📁 Project Structure

```
venn-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── sections/
│   │   └── Hero.tsx        # Hero section
│   └── ui/
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       ├── Container.tsx   # Container component
│       ├── Header.tsx      # Header component
│       ├── PhotoCollage.tsx # Photo collage
│       ├── RotatingText.tsx # Animated rotating text
│       └── WaitlistForm.tsx # Multi-step form
├── lib/
│   └── airtable.ts         # Airtable API integration
├── public/
│   ├── images/             # Image assets
│   ├── robots.txt          # Robots file
│   └── venn-logo.svg       # Logo
└── vercel.json             # Vercel configuration
```

## 🎨 Customization

### Colors

The color palette is defined in `app/globals.css`:

- **Burnt Orange**: `#EA580C` (primary brand color)
- **Charcoal**: `#1C1917` (text)
- **Beige**: `#FEF3C7` (backgrounds)

### Fonts

- **Display**: Playfair Display (headings)
- **Body**: Inter (body text)

## 📊 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD schema)
- Sitemap.xml
- robots.txt
- Semantic HTML
- ARIA labels for accessibility

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

MIT License

## 🏢 Organization

This project is maintained by Pacific Software Ventures.
