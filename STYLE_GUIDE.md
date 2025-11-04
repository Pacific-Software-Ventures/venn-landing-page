# Venn Landing Page - Design System & Style Guide

> A warm, authentic, story-driven design system based on 2025 expert practices

---

## Color System

### Primary Palette: Burnt Orange + Mustard + Beige

**Burnt Orange** (Primary Action Color)
- Primary: `#EA580C` - Use for CTAs, links, key actions
- Dark: `#C2410C` - Hover states
- Light: `#FB923C` - Highlights

**Mustard** (Accent & Energy)
- Primary: `#F59E0B` - Secondary CTAs, badges
- Dark: `#D97706` - Darker accents
- Light: `#FBBF24` - Playful elements

**Beige/Cream** (Warmth & Softness)
- Light: `#FFFBEB` - Page backgrounds
- Base: `#FEF3C7` - Card backgrounds
- Dark: `#FDE68A` - Gentle overlays

**Charcoal** (Text & Contrast)
- Darkest: `#1C1917` - Primary text
- Medium: `#44403C` - Subheadings
- Light: `#57534E` - Secondary text

### Usage in Tailwind

\`\`\`jsx
// Primary CTA Button
<button className="bg-burnt-orange hover:bg-burnt-orange-dark text-white">

// Card with warm background
<div className="bg-beige-light border border-border rounded-lg">

// Text hierarchy
<h1 className="text-charcoal">
<p className="text-charcoal-light">
\`\`\`

---

## Typography

### Font: Inter (Already configured via Google Fonts)

### Type Scale

\`\`\`
Display XL: text-[56px] leading-tight font-extrabold tracking-tight
Display:    text-5xl leading-tight font-bold
H1:         text-4xl leading-tight font-bold
H2:         text-3xl leading-snug font-semibold
H3:         text-2xl leading-snug font-semibold
H4:         text-xl leading-relaxed font-semibold
Body XL:    text-xl leading-relaxed
Body:       text-base leading-relaxed (16px)
Body Small: text-sm leading-normal
CTA Text:   text-lg font-semibold (18-20px for better conversion)
\`\`\`

### Best Practices
- Minimum 16px for body text (accessibility)
- Line length: 50-75 characters
- Headings use font-semibold (600) or font-bold (700)
- Scale down 15-25% on mobile

---

## Spacing & Layout

### Container Widths
- \`max-w-7xl\` (1280px) - General content
- \`max-w-5xl\` (1024px) - Text-heavy sections
- \`max-w-3xl\` (768px) - Focused content
- \`max-w-2xl\` (640px) - Narrow narratives

### Common Spacing
\`\`\`
gap-4   = 16px (compact)
gap-6   = 24px (comfortable)
gap-8   = 32px (relaxed)
gap-12  = 48px (section elements)
gap-24  = 96px (between sections desktop)
gap-16  = 64px (between sections mobile)

px-4 py-24 = Section padding mobile
px-6 py-32 = Section padding desktop
\`\`\`

---

## Components

### Button Examples

**Primary CTA**
\`\`\`jsx
<button className="bg-burnt-orange hover:bg-burnt-orange-dark text-white font-semibold text-lg px-8 py-3 rounded-[10px] shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
  Get Started
</button>
\`\`\`

**Secondary Button**
\`\`\`jsx
<button className="border-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white font-semibold text-lg px-8 py-3 rounded-[10px] transition-all duration-200">
  Learn More
</button>
\`\`\`

### Card Example

\`\`\`jsx
<div className="bg-white border border-border rounded-lg p-8 shadow-subtle hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
\`\`\`

### Input Field Example

\`\`\`jsx
<input
  type="text"
  className="w-full px-4 py-3 border-2 border-border rounded-[10px] focus:border-burnt-orange focus:ring-4 focus:ring-burnt-orange/20 outline-none transition-all"
  placeholder="Enter your email"
/>
\`\`\`

---

## Quick Reference

### Most Common Classes

**Colors**
- \`bg-burnt-orange\` \`text-burnt-orange\` \`border-burnt-orange\`
- \`bg-mustard\` \`text-mustard\`
- \`bg-beige-light\` \`bg-white\`
- \`text-charcoal\` \`text-charcoal-light\`

**Spacing**
- \`p-8\` \`px-6\` \`py-24\` \`gap-6\` \`space-y-4\`

**Typography**
- \`text-4xl\` \`text-xl\` \`text-base\` \`text-sm\`
- \`font-bold\` \`font-semibold\` \`leading-relaxed\`

**Effects**
- \`shadow-warm\` \`shadow-subtle\` \`shadow-medium\`
- \`rounded-lg\` \`rounded-[10px]\`
- \`hover:-translate-y-1\` \`transition-all\` \`duration-200\`

---

**Version**: 1.0
**Last Updated**: November 2025
