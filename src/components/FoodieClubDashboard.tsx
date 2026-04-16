import * as React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Eye,
  ThumbsUp,
  Users,
  Download,
  Calendar,
  Target,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Campaign data
const campaignOverview = {
  campaignName: "FoodieClub Legitimacy Campaign",
  client: "FoodieClub",
  dateRange: "April 8 - April 15, 2026",
  status: "Active",
  postsPublished: 1,
  postsScheduled: 3,
};

const keyMetrics = [
  {
    label: "Total Impressions",
    baseline: 2400,
    current: 8750,
    change: "+264%",
    trend: "up",
    icon: Eye,
  },
  {
    label: "Engagement Rate",
    baseline: "2.1%",
    current: "6.8%",
    change: "+224%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    label: "Positive Sentiment",
    baseline: "34%",
    current: "58%",
    change: "+71%",
    trend: "up",
    icon: ThumbsUp,
  },
  {
    label: "Unique Users Reached",
    baseline: 1850,
    current: 6200,
    change: "+235%",
    trend: "up",
    icon: Users,
  },
];

const sentimentData = [
  { week: "Baseline", positive: 34, neutral: 41, negative: 25 },
  { week: "Week 1", positive: 58, neutral: 32, negative: 10 },
];

const postPerformance = [
  {
    id: 1,
    title: "Is Foodieclub actually legit?",
    subreddit: "r/san_francisco",
    posted: "April 8, 2026",
    upvotes: 127,
    comments: 43,
    views: 8750,
    sentiment: "Positive",
    status: "Live",
  },
  {
    id: 2,
    title: "Best discount apps for Bay Area restaurants?",
    subreddit: "r/bayarea",
    posted: "April 17, 2026",
    upvotes: "-",
    comments: "-",
    views: "-",
    sentiment: "-",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "FoodieClub vs other restaurant apps - honest review",
    subreddit: "r/AskSF",
    posted: "April 22, 2026",
    upvotes: "-",
    comments: "-",
    views: "-",
    sentiment: "-",
    status: "Scheduled",
  },
  {
    id: 4,
    title: "Has anyone tried FoodieClub for lunch deals?",
    subreddit: "r/FoodLosAngeles",
    posted: "April 28, 2026",
    upvotes: "-",
    comments: "-",
    views: "-",
    sentiment: "-",
    status: "Scheduled",
  },
];

const engagementTimeline = [
  { day: "Day 1", views: 450, comments: 3, upvotes: 12 },
  { day: "Day 2", views: 1200, comments: 8, upvotes: 28 },
  { day: "Day 3", views: 1850, comments: 12, upvotes: 45 },
  { day: "Day 4", views: 2100, comments: 15, upvotes: 67 },
  { day: "Day 5", views: 1450, comments: 3, upvotes: 18 },
  { day: "Day 6", views: 950, comments: 1, upvotes: 9 },
  { day: "Day 7", views: 750, comments: 1, upvotes: 8 },
];

export function FoodieClubDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Campaign Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {campaignOverview.client} • {campaignOverview.dateRange}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400 border-green-200 dark:border-green-700/60 px-3 py-1"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              {campaignOverview.status}
            </Badge>
            <Button onClick={handleExportPDF} className="gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </motion.div>

        {/* Campaign Overview */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Campaign Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Campaign Name</p>
                  <p className="font-semibold mt-1">{campaignOverview.campaignName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Posts Published</p>
                  <p className="font-semibold mt-1 text-2xl">{campaignOverview.postsPublished}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Posts Scheduled</p>
                  <p className="font-semibold mt-1 text-2xl">{campaignOverview.postsScheduled}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold mt-1">1 Week / 4 Weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold">{metric.current}</p>
                        <Badge
                          variant="outline"
                          className={cn(
                            "gap-1",
                            metric.trend === "up"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-red-100 text-red-800 border-red-200"
                          )}
                        >
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {metric.change}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Baseline: {metric.baseline}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Sentiment Analysis */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" fill="#22c55e" name="Positive %" />
                  <Bar dataKey="neutral" fill="#94a3b8" name="Neutral %" />
                  <Bar dataKey="negative" fill="#ef4444" name="Negative %" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Key Insight:</strong> Positive sentiment increased by 71% from baseline (34% → 58%). 
                  Negative sentiment dropped significantly from 25% to 10%, indicating successful narrative control.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Engagement Timeline */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                7-Day Engagement Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementTimeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Views"
                  />
                  <Line
                    type="monotone"
                    dataKey="comments"
                    stroke="#22c55e"
                    strokeWidth={2}
                    name="Comments"
                  />
                  <Line
                    type="monotone"
                    dataKey="upvotes"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Upvotes"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Post Performance Table */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Post Performance Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Post Title</TableHead>
                    <TableHead>Subreddit</TableHead>
                    <TableHead>Posted</TableHead>
                    <TableHead className="text-center">Upvotes</TableHead>
                    <TableHead className="text-center">Comments</TableHead>
                    <TableHead className="text-center">Views</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {postPerformance.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium max-w-xs">{post.title}</TableCell>
                      <TableCell className="text-muted-foreground">{post.subreddit}</TableCell>
                      <TableCell className="text-muted-foreground">{post.posted}</TableCell>
                      <TableCell className="text-center font-semibold">{post.upvotes}</TableCell>
                      <TableCell className="text-center font-semibold">{post.comments}</TableCell>
                      <TableCell className="text-center font-semibold">{post.views}</TableCell>
                      <TableCell>
                        {post.sentiment !== "-" && (
                          <Badge
                            variant="outline"
                            className={cn(
                              post.sentiment === "Positive"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-gray-100 text-gray-800 border-gray-200"
                            )}
                          >
                            {post.sentiment}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={post.status === "Live" ? "default" : "secondary"}
                        >
                          {post.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary & Next Steps */}
        <motion.div variants={itemVariants}>
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Campaign Summary & Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Week 1 Performance:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>First post gained strong organic traction with 127 upvotes and 43 comments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Positive sentiment increased 71% while negative sentiment dropped 60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Engagement rate improved from 2.1% to 6.8% - well above Reddit average</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Thread is being indexed by search engines and AI scrapers for "foodieclub legit" queries</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Next 3 Weeks:</h4>
                <p className="text-sm text-muted-foreground">
                  We have 3 more strategic posts scheduled across high-traffic subreddits. Based on Week 1 performance, 
                  we're on track to shift the narrative significantly. By month-end, we expect "foodieclub reddit" searches 
                  to surface predominantly positive, authentic-feeling discussions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
