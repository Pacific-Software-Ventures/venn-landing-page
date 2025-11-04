# Venn Landing Page - Vercel Deployment Guide

## ✅ Repository Successfully Pushed

Your code is now live at:
**https://github.com/Pacific-Software-Ventures/venn-landing-page**

## 🚀 Deploying to Vercel (Pacific Software Ventures Organization)

### Prerequisites
- Access to Pacific Software Ventures Vercel Pro account
- Airtable account with API credentials

---

## Step 1: Import Project to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/pacific-software-ventures
   - Make sure you're in the **Pacific Software Ventures** organization (check top-left dropdown)

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find `venn-landing-page` in the repository list
   - Click "Import"

---

## Step 2: Configure Project Settings

### Build & Development Settings
Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (or leave default)
- **Output Directory**: `.next` (or leave default)
- **Install Command**: `npm install` (or leave default)
- **Development Command**: `npm run dev` (or leave default)

### Root Directory
- Leave as `.` (root)

---

## Step 3: Add Environment Variables

**CRITICAL**: You must add these environment variables for the waitlist form to work.

Click "Environment Variables" and add:

### Required Variables:

#### 1. NEXT_PUBLIC_AIRTABLE_TOKEN
```
Variable Name: NEXT_PUBLIC_AIRTABLE_TOKEN
Value: your_airtable_personal_access_token
Environment: Production, Preview, Development
```

**How to get it:**
1. Go to https://airtable.com/account
2. Scroll to "Personal access tokens"
3. Click "Generate token"
4. Name it "Venn Waitlist API"
5. Add scopes: `data.records:read` and `data.records:write`
6. Add access to your Venn base
7. Click "Create token"
8. Copy the token (you won't see it again!)

#### 2. NEXT_PUBLIC_AIRTABLE_BASE_ID
```
Variable Name: NEXT_PUBLIC_AIRTABLE_BASE_ID
Value: appXXXXXXXXXXXXXX
Environment: Production, Preview, Development
```

**How to get it:**
1. Go to https://airtable.com/api
2. Select your Venn Waitlist base
3. The Base ID is shown at the top (starts with "app")
4. Or find it in the URL: `airtable.com/<BASE_ID>/api/docs`

#### 3. NEXT_PUBLIC_AIRTABLE_TABLE_NAME
```
Variable Name: NEXT_PUBLIC_AIRTABLE_TABLE_NAME
Value: Waitlist
Environment: Production, Preview, Development
```

**Note**: This should match your table name exactly (case-sensitive)

---

## Step 4: Set Up Airtable Base

### Create Your Airtable Base

1. Go to https://airtable.com
2. Create a new base called "Venn Waitlist" (or any name)
3. Create a table called "Waitlist"
4. Add these fields:

| Field Name | Field Type | Options |
|------------|------------|---------|
| Name | Single line text | - |
| Age | Number | Integer, Allow negative: No |
| Gender | Single line text | - |
| Contact | Email | - |

### Optional: Add Created Time Field
- Field Name: "Created"
- Field Type: Created time
- This helps you track when people signed up

### Optional: Add Views
Create different views to filter your data:
- "All Waitlist" (default)
- "This Week" (filter by Created time)
- "By Age" (sorted by Age)

---

## Step 5: Deploy!

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Vercel will provide you with a URL like:
   - Production: `venn-landing-page.vercel.app`
   - Or custom domain if configured

---

## Step 6: Add Custom Domain (Optional)

### If you have a custom domain:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add"
   - Enter your domain (e.g., `venn.app` or `www.venn.app`)

2. **Update DNS Settings**
   - Add the DNS records Vercel provides
   - Usually a CNAME or A record

3. **Update Metadata**
   - After domain is connected, update `app/layout.tsx`:
   ```typescript
   metadataBase: new URL('https://your-custom-domain.com'),
   ```

4. **Commit and Push**
   ```bash
   git add app/layout.tsx
   git commit -m "Update domain in metadata"
   git push
   ```

---

## Post-Deployment Checklist

### ✅ Test the Site
- [ ] Visit your deployment URL
- [ ] Test mobile responsiveness
- [ ] Test the waitlist form submission
- [ ] Verify data appears in Airtable
- [ ] Test all form validation
- [ ] Check SEO meta tags (view page source)

### ✅ Verify Airtable Integration
1. Fill out the waitlist form on your live site
2. Check your Airtable base
3. Verify the record was created with all fields

### ✅ SEO Setup
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add Google Analytics (optional)
- [ ] Create Open Graph image at `/public/og-image.png` (1200x630px)

### ✅ Performance Check
- [ ] Run Lighthouse audit (aim for 95+ on all metrics)
- [ ] Check mobile performance
- [ ] Verify images are loading properly

---

## Troubleshooting

### Build Fails
**Error**: `Module not found: Can't resolve 'airtable'`
- **Solution**: Make sure `airtable` is in `package.json` dependencies

**Error**: Environment variables not found
- **Solution**: Check that all three env vars are set in Vercel dashboard

### Form Not Submitting
**Error**: 401 or 403 from Airtable
- **Solution**: Check your Airtable token has correct scopes and base access

**Error**: Network error
- **Solution**: Verify your Airtable Base ID is correct

### Images Not Loading
- **Solution**: Make sure all images are in the `/public` directory
- Check that image paths start with `/` (e.g., `/images/photo.jpg`)

---

## Monitoring & Analytics

### Recommended Tools
1. **Vercel Analytics** (included with Pro)
   - Automatically tracks page views
   - Shows performance metrics

2. **Google Analytics 4** (optional)
   - Add GA4 measurement ID to environment variables
   - Track user behavior and conversions

3. **Airtable Automations** (optional)
   - Set up email notifications when someone joins waitlist
   - Create automated thank-you emails

---

## Updating the Site

### Making Changes
1. Edit your code locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```
4. Vercel automatically deploys on push to `main`

### Preview Deployments
- Every push to a branch creates a preview URL
- Perfect for testing before merging to main

---

## Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Support: support@vercel.com (Pro plan includes priority support)

### Airtable Support
- Documentation: https://support.airtable.com
- API Docs: https://airtable.com/api

### Repository Issues
- GitHub Issues: https://github.com/Pacific-Software-Ventures/venn-landing-page/issues

---

## 🎉 You're Done!

Your Venn landing page is now live and collecting waitlist signups!

**Live URL**: Check your Vercel dashboard for the deployment URL

**Next Steps**:
1. Share your landing page URL
2. Monitor signups in Airtable
3. Start planning your launch! 🚀
