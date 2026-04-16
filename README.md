# FoodieClub Campaign Dashboard

A professional campaign analytics dashboard built for tracking Reddit sentiment campaigns.

## 🎯 Project Overview

This dashboard tracks the performance of FoodieClub's Reddit legitimacy campaign, showing:
- Campaign metrics and KPIs
- Sentiment analysis (positive/neutral/negative)
- Engagement timeline
- Post performance breakdown
- PDF export functionality

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dashboard will be available at `http://localhost:5174/`

## 📊 Features

### Key Metrics Dashboard
- **Total Impressions**: Track reach across all posts
- **Engagement Rate**: Monitor user interaction levels
- **Positive Sentiment**: Measure sentiment improvement
- **Unique Users Reached**: Track audience growth

### Sentiment Analysis
- Visual comparison of baseline vs current sentiment
- Breakdown of positive, neutral, and negative mentions
- Trend analysis with actionable insights

### Engagement Timeline
- 7-day performance tracking
- Views, comments, and upvotes over time
- Interactive charts with Recharts

### Post Performance Table
- Individual post metrics
- Subreddit tracking
- Status monitoring (Live/Scheduled)
- Sentiment classification

### Export Functionality
- One-click PDF export
- Print-optimized styling
- Professional formatting

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
foodieclub-dashboard/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── table.tsx
│   │   └── FoodieClubDashboard.tsx  # Main dashboard component
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Updating Campaign Data

Edit the data constants in `src/components/FoodieClubDashboard.tsx`:

```typescript
// Campaign overview
const campaignOverview = {
  campaignName: "Your Campaign Name",
  client: "Client Name",
  dateRange: "Date Range",
  // ...
};

// Key metrics
const keyMetrics = [
  {
    label: "Metric Name",
    baseline: 1000,
    current: 2000,
    change: "+100%",
    trend: "up",
    icon: IconComponent,
  },
  // ...
];
```

### Styling

The dashboard uses Tailwind CSS with custom CSS variables defined in `src/index.css`. Modify the `:root` variables to change the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

## 📤 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Other Static Hosts

Build the project and upload the `dist` folder:

```bash
npm run build
```

## 🔧 Development

### Adding New Components

Use shadcn/ui CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

### Type Safety

The project uses TypeScript for full type safety. Component props are fully typed:

```typescript
interface MetricCardProps {
  label: string;
  baseline: number | string;
  current: number | string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}
```

## 📝 License

MIT

## 🤝 Support

For questions or issues, contact the development team.

---

Built with ❤️ for FoodieClub
