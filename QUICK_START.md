# 🚀 Quick Start Guide

## Your Dashboard is Ready!

**URL:** http://localhost:5174/

## What You Have

A complete, professional campaign dashboard showing:
- ✅ Week 1 performance metrics
- ✅ Sentiment analysis charts
- ✅ Engagement timeline
- ✅ Post performance breakdown
- ✅ PDF export functionality

## Send This to Your Client (Maddie)

Copy from `SLACK_MESSAGE_TEMPLATE.txt` or use this:

```
Hey Maddie! 👋

Got your dashboard ready. Here's the full breakdown of Week 1 performance:

🔗 Live Dashboard: http://localhost:5174/

The numbers are looking solid:
• 8,750 impressions on our first post (up 264% from baseline)
• Engagement rate jumped to 6.8% (from 2.1% baseline)
• Positive sentiment increased 71% (34% → 58%)
• Negative sentiment dropped 60% (25% → 10%)

Our post "Is Foodieclub actually legit?" in r/san_francisco hit 127 upvotes and 43 comments. The conversation is exactly what we want - authentic, balanced, and addressing the skepticism head-on without being pushy.

Key wins:
✓ Thread is ranking for "foodieclub legit" searches
✓ AI scrapers are picking it up
✓ Community engagement is organic (no downvote brigading)
✓ Multiple users sharing positive experiences naturally

We've got 3 more posts scheduled through end of month across r/bayarea, r/AskSF, and r/FoodLosAngeles. Based on Week 1 momentum, we're on track to flip the narrative by month-end.

Dashboard has full export to PDF functionality - just hit the "Export PDF" button in the top right.

Let me know if you want to adjust anything for the upcoming posts!
```

## Deploy to Share Publicly (Optional)

### Fastest: Vercel (2 minutes)

```bash
npm install -g vercel
vercel login
vercel
```

You'll get a URL like: `https://foodieclub-dashboard.vercel.app`

Then update your Slack message with the real URL!

### Alternative: Netlify

```bash
npm run build
```

Then drag the `dist` folder to: https://app.netlify.com/drop

## Customize the Data

Edit `src/components/FoodieClubDashboard.tsx`:

```typescript
// Line 20-30: Update campaign info
const campaignOverview = {
  campaignName: "Your Campaign Name",
  client: "Client Name",
  // ...
};

// Line 32-60: Update metrics
const keyMetrics = [
  {
    label: "Total Impressions",
    baseline: 2400,
    current: 8750,
    // ...
  },
];
```

## File Structure

```
foodieclub-dashboard/
├── 📄 QUICK_START.md          ← You are here
├── 📄 SLACK_MESSAGE_TEMPLATE.txt  ← Copy-paste this to Slack
├── 📄 README.md               ← Technical documentation
├── 📄 DEPLOYMENT.md           ← How to deploy
├── 📄 PROJECT_SUMMARY.md      ← Project overview
├── 📄 CHECKLIST.md            ← Completion checklist
└── src/
    └── components/
        └── FoodieClubDashboard.tsx  ← Main dashboard (edit data here)
```

## Need Help?

1. **Dashboard not loading?**
   - Check http://localhost:5174/ is open
   - Run `npm run dev` in the foodieclub-dashboard folder

2. **Want to change the data?**
   - Edit `src/components/FoodieClubDashboard.tsx`
   - Look for the data constants at the top

3. **Want to deploy?**
   - See `DEPLOYMENT.md` for detailed instructions
   - Vercel is the easiest option

4. **Want to customize styling?**
   - Colors: Edit `src/index.css` (CSS variables)
   - Layout: Edit `src/components/FoodieClubDashboard.tsx`

## That's It!

You have everything you need. The dashboard is running, the Slack message is ready, and all documentation is complete.

**Next step:** Open http://localhost:5174/ and review the dashboard! 🎉

---

**Pro Tip:** Deploy to Vercel before sending to client so they can access it from anywhere!
