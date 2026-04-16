# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Easiest - 2 minutes)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite - just click "Deploy"
6. Done! You'll get a URL like: `https://foodieclub-dashboard.vercel.app`

**Or use CLI:**
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify (Also Easy)

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

**Or use CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/foodieclub-dashboard"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/foodieclub-dashboard/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Custom Server (VPS/AWS/etc.)

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your server

3. Configure your web server (nginx example):
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-key-here
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Set in deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## Performance Optimization

The build is already optimized, but for extra performance:

1. **Enable compression** on your server (gzip/brotli)
2. **Set cache headers** for static assets
3. **Use a CDN** (Cloudflare, etc.)

## Monitoring

Add analytics to track usage:

```typescript
// In src/main.tsx
import { analytics } from './analytics';

analytics.init('YOUR_TRACKING_ID');
```

## Troubleshooting

**Build fails?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf .vite`

**Blank page after deploy?**
- Check browser console for errors
- Verify `base` path in vite.config.ts
- Ensure all routes use relative paths

**PDF export not working?**
- This uses browser print API - works in all modern browsers
- For server-side PDF generation, consider Puppeteer

## Security

For production:
1. Never commit `.env` files
2. Use environment variables for sensitive data
3. Enable HTTPS (automatic on Vercel/Netlify)
4. Set appropriate CORS headers if using APIs

---

Need help? Check the main README.md or contact support.
