import * as React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Tag,
  Paperclip,
  Users,
  MoreHorizontal,
  Download,
  ArrowRight,
  Edit2,
  X,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { NewspaperReport } from "./NewspaperReport";
import { RedditPostViewer } from "./RedditPostViewer";

export function CampaignDashboard() {
  const [activeReport, setActiveReport] = React.useState<"analytics" | "screenshots" | null>(null);
  const [selectedPost, setSelectedPost] = React.useState<any>(null);

  // Reddit posts data
  const redditPosts = [
    {
      id: 1,
      title: "Is Foodieclub actually legit?",
      subreddit: "r/san_francisco",
      author: "throwaway_skeptic",
      content: `I keep seeing ads for Foodieclub and I'm skeptical. Has anyone actually used this? Is it legit or just another scam app?

I've been burned by these "discount" apps before where they either:
1. Have terrible restaurant selection
2. The discounts are fake (inflated prices marked down to normal)
3. It's impossible to actually use the discount

Would love to hear from anyone who's actually tried it. Thanks!`,
      upvotes: 127,
      postedDate: "April 8, 2026",
      status: "Live",
      comments: [
        {
          author: "Inspector635",
          content: "Actually been using Foodieclub for about 4 months now. It's legit - got decent discounts at places like dumpling home. Way better than having to show coupons like an idiot.",
          upvotes: 43,
          avatar: "https://i.pravatar.cc/150?u=inspector635",
          sentiment: "positive" as const,
          timeAgo: "2d ago",
          replies: [
            {
              author: "throwaway_skeptic",
              content: "Thanks for the response! How does the discount actually work? Do you have to show your phone or something?",
              upvotes: 12,
              avatar: "https://i.pravatar.cc/150?u=throwaway",
              timeAgo: "2d ago",
              replies: [
                {
                  author: "Inspector635",
                  content: "Nah it's automatic. You just check in on the app when you arrive and the discount gets applied to your bill. Super easy.",
                  upvotes: 18,
                  avatar: "https://i.pravatar.cc/150?u=inspector635",
                  sentiment: "positive" as const,
                  timeAgo: "2d ago"
                }
              ]
            },
            {
              author: "MikeFromBerkeley",
              content: "Can confirm. Been using it for a few weeks. The discounts are real and it's way less awkward than other apps.",
              upvotes: 9,
              avatar: "https://i.pravatar.cc/150?u=mikeberkeley",
              sentiment: "positive" as const,
              timeAgo: "2d ago"
            }
          ]
        },
        {
          author: "foodieclub",
          content: "We get this question a lot. The discount model works because restaurants use us to fill tables during their off hours. We've got about 4,000 venues across Cali now.",
          upvotes: 67,
          avatar: "https://i.pravatar.cc/150?u=foodieclub",
          isOfficial: true,
          sentiment: "positive" as const,
          timeAgo: "2d ago",
          replies: [
            {
              author: "TechSavvySF",
              content: "Appreciate the transparency. How do you guys make money if you're giving discounts?",
              upvotes: 15,
              avatar: "https://i.pravatar.cc/150?u=techsavvy",
              timeAgo: "2d ago",
              replies: [
                {
                  author: "foodieclub",
                  content: "Great question! Restaurants pay us a commission on filled seats. They'd rather have a table filled at a discount than sitting empty. Win-win for everyone.",
                  upvotes: 24,
                  avatar: "https://i.pravatar.cc/150?u=foodieclub",
                  isOfficial: true,
                  sentiment: "positive" as const,
                  timeAgo: "2d ago"
                }
              ]
            },
            {
              author: "RestaurantOwnerSF",
              content: "Restaurant owner here. We use FoodieClub for our lunch service. It actually works - we fill more tables during slow hours.",
              upvotes: 31,
              avatar: "https://i.pravatar.cc/150?u=restaurantowner",
              sentiment: "positive" as const,
              timeAgo: "1d ago",
              replies: [
                {
                  author: "throwaway_skeptic",
                  content: "This is really helpful to hear from the restaurant side. Thanks!",
                  upvotes: 8,
                  avatar: "https://i.pravatar.cc/150?u=throwaway",
                  timeAgo: "1d ago"
                }
              ]
            }
          ]
        },
        {
          author: "SarahStar",
          content: "Good to know someone's actually had success with it. Might give it a try if the restaurant selection is decent in my area.",
          upvotes: 28,
          avatar: "https://i.pravatar.cc/150?u=sarahstar",
          sentiment: "positive" as const,
          timeAgo: "2d ago",
          replies: [
            {
              author: "BayAreaFoodie22",
              content: "The selection in SF is actually pretty solid. I've found some great spots through it.",
              upvotes: 11,
              avatar: "https://i.pravatar.cc/150?u=bayareafoodie",
              sentiment: "positive" as const,
              timeAgo: "2d ago"
            }
          ]
        },
        {
          author: "NaturalPhenomina",
          content: "I'm always skeptical of these discount apps too. Most of them either have terrible restaurant selection or the 'discounts' are just inflated menu prices marked down to normal.",
          upvotes: 34,
          avatar: "https://i.pravatar.cc/150?u=naturalphenomina",
          sentiment: "neutral" as const,
          timeAgo: "2d ago",
          replies: [
            {
              author: "PriceCheckPro",
              content: "I actually checked this. The menu prices on FoodieClub match what's on the restaurant's actual menu. The discounts are real.",
              upvotes: 22,
              avatar: "https://i.pravatar.cc/150?u=pricecheck",
              sentiment: "positive" as const,
              timeAgo: "2d ago",
              replies: [
                {
                  author: "NaturalPhenomina",
                  content: "Good to know! That's my main concern with these apps. Might actually try it then.",
                  upvotes: 14,
                  avatar: "https://i.pravatar.cc/150?u=naturalphenomina",
                  sentiment: "positive" as const,
                  timeAgo: "1d ago"
                }
              ]
            }
          ]
        },
        {
          author: "DowntownDiner",
          content: "Used it last week at a place in SOMA. 25% off lunch. No issues at all. Would recommend.",
          upvotes: 19,
          avatar: "https://i.pravatar.cc/150?u=downtowndiner",
          sentiment: "positive" as const,
          timeAgo: "1d ago"
        },
        {
          author: "SkepticalSally",
          content: "Still seems too good to be true. What's the catch? Are they selling your data or something?",
          upvotes: 7,
          avatar: "https://i.pravatar.cc/150?u=skepticalsally",
          sentiment: "negative" as const,
          timeAgo: "1d ago",
          replies: [
            {
              author: "PrivacyNerd",
              content: "I checked their privacy policy. Pretty standard stuff. They're not doing anything shady with data. Just basic analytics.",
              upvotes: 16,
              avatar: "https://i.pravatar.cc/150?u=privacynerd",
              sentiment: "neutral" as const,
              timeAgo: "1d ago"
            },
            {
              author: "foodieclub",
              content: "No catch! We make money from restaurant commissions, not from selling user data. Check out our privacy policy - we're pretty transparent about it.",
              upvotes: 21,
              avatar: "https://i.pravatar.cc/150?u=foodieclub",
              isOfficial: true,
              sentiment: "positive" as const,
              timeAgo: "1d ago"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Best discount apps for Bay Area restaurants?",
      subreddit: "r/bayarea",
      author: "bayarea_foodie",
      content: `Looking for recommendations on restaurant discount apps that actually work in the Bay Area.

I've tried a few but most have limited selection or the deals aren't that great. What are you all using?`,
      upvotes: 0,
      postedDate: "April 17, 2026 (Scheduled)",
      status: "Scheduled",
      comments: []
    },
    {
      id: 3,
      title: "FoodieClub vs other restaurant apps",
      subreddit: "r/AskSF",
      author: "sf_resident_2024",
      content: `Has anyone compared FoodieClub to other restaurant discount apps like OpenTable, Seated, etc?

Trying to figure out which one is worth my time. Would love to hear experiences!`,
      upvotes: 0,
      postedDate: "April 22, 2026 (Scheduled)",
      status: "Scheduled",
      comments: []
    },
    {
      id: 4,
      title: "Has anyone tried FoodieClub for lunch deals?",
      subreddit: "r/FoodLosAngeles",
      author: "la_lunch_hunter",
      content: `Work downtown and always looking for good lunch deals. Saw FoodieClub mentioned somewhere.

Anyone use it for lunch? How are the deals and restaurant options?`,
      upvotes: 0,
      postedDate: "April 28, 2026 (Scheduled)",
      status: "Scheduled",
      comments: []
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  return (
    <>
      {activeReport && (
        <NewspaperReport 
          type={activeReport} 
          onClose={() => setActiveReport(null)} 
        />
      )}

      {selectedPost && (
        <RedditPostViewer 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
      
      <div className="flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden border-none shadow-2xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Header */}
          <CardHeader className="p-4 border-b bg-slate-50">
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="text-sm text-slate-600 font-newspaper tracking-wide">
                <span>Campaigns</span>
                <span className="mx-2">/</span>
                <span>FoodieClub Reddit Campaign</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            {/* Hero Section - The "Wow" Moment */}
            <motion.div variants={itemVariants} className="text-center py-6 px-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Week 1 Complete
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Campaign Exceeded Expectations
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Your Reddit campaign achieved <span className="font-bold text-green-700">264% increase in reach</span> and <span className="font-bold text-green-700">71% improvement in positive sentiment</span> in just 7 days.
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight">
              FoodieClub Legitimacy Campaign - Week 1 Results
            </motion.h1>

            {/* Meta Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              {/* Status */}
              <div className="flex items-start gap-3">
                <MoreHorizontal className="h-5 w-5 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-slate-600">Status</p>
                  <Badge className="mt-1 font-semibold bg-green-100 text-green-800 border-green-200">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Active
                  </Badge>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-slate-600">Team</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://i.pravatar.cc/150?u=sree" alt="Sree" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Sree & Team</span>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-slate-600">Campaign Period</p>
                  <p className="font-medium flex items-center gap-2 mt-1">
                    April 8 <ArrowRight className="h-4 w-4 text-slate-400" /> May 8, 2026
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-start gap-3">
                <Tag className="h-5 w-5 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-slate-600">Tags</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="default">Reddit Campaign</Badge>
                    <Badge variant="secondary">Week 1</Badge>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex items-start gap-3 col-span-1 md:col-span-2">
                <FileText className="h-5 w-5 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-slate-600">Campaign Overview</p>
                  <p className="mt-1 text-slate-700">
                    We're running a strategic Reddit campaign to improve your brand sentiment and address legitimacy concerns. Our team is using 70 accounts to organically engage with potential users across California subreddits. Week 1 shows strong momentum - we've achieved a 264% increase in impressions and 71% improvement in positive sentiment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics with Side Note */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-lg">Week 1 Performance Metrics</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Metrics - 2/3 width on large screens */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-600 font-medium">Impressions</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">8,750</p>
                    <p className="text-xs text-blue-600 mt-1">↑ 264% from baseline</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600 font-medium">Engagement Rate</p>
                    <p className="text-2xl font-bold text-green-900 mt-1">6.8%</p>
                    <p className="text-xs text-green-600 mt-1">↑ 224% from baseline</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-600 font-medium">Positive Sentiment</p>
                    <p className="text-2xl font-bold text-purple-900 mt-1">58%</p>
                    <p className="text-xs text-purple-600 mt-1">↑ 71% from baseline</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-600 font-medium">Users Reached</p>
                    <p className="text-2xl font-bold text-orange-900 mt-1">6,200</p>
                    <p className="text-xs text-orange-600 mt-1">↑ 235% from baseline</p>
                  </div>
                </div>

                {/* Side Note - 1/3 width on large screens */}
                <div className="lg:col-span-1">
                  <div className="sticky top-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400 h-fit">
                    <div className="flex items-start gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">💡</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm">Why Reddit Is Different</h4>
                    </div>
                    <div className="space-y-2.5 text-xs text-slate-700">
                      <p className="leading-relaxed">
                        Reddit is notoriously hostile to ads. The community will downvote and bury anything promotional.
                      </p>
                      <p className="leading-relaxed">
                        <span className="font-semibold text-orange-700">Our approach:</span> Posts read like genuine questions, not ads. That's why we're getting upvotes instead of being buried.
                      </p>
                      <p className="leading-relaxed">
                        <span className="font-semibold text-orange-700">The result:</span> 127 upvotes, 43 comments, zero "this is an ad" accusations.
                      </p>
                      <p className="leading-relaxed">
                        <span className="font-semibold text-orange-700">Long-term value:</span> These threads stay indexed forever for future searches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Before/After Comparison */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-lg">Before vs. After Campaign</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">Before</span>
                    </div>
                    <span className="text-sm text-red-600 font-medium">Pre-Campaign Baseline</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Reddit Impressions</span>
                      <span className="font-semibold text-slate-900">2,400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Engagement Rate</span>
                      <span className="font-semibold text-slate-900">2.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Positive Sentiment</span>
                      <span className="font-semibold text-slate-900">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Negative Sentiment</span>
                      <span className="font-semibold text-red-700">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Users Reached</span>
                      <span className="font-semibold text-slate-900">1,850</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">After</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Week 1 Results</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Reddit Impressions</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">8,750</span>
                        <span className="text-xs text-green-600 font-medium">+264%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Engagement Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">6.8%</span>
                        <span className="text-xs text-green-600 font-medium">+224%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Positive Sentiment</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">58%</span>
                        <span className="text-xs text-green-600 font-medium">+71%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Negative Sentiment</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-green-700">10%</span>
                        <span className="text-xs text-green-600 font-medium">-60%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Users Reached</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">6,200</span>
                        <span className="text-xs text-green-600 font-medium">+235%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What This Means - Impact Translation */}
            <motion.div variants={itemVariants} className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  💡
                </div>
                What This Means for FoodieClub
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold">1.</div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Search Visibility Improved</p>
                    <p className="text-slate-700">Your post now ranks #1 for "foodieclub legit" searches on Reddit, directly addressing skepticism.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold">2.</div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Trust Barrier Broken</p>
                    <p className="text-slate-700">Negative sentiment dropped 60% - potential users now see authentic positive experiences.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold">3.</div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Organic Engagement</p>
                    <p className="text-slate-700">6.8% engagement rate (vs 2.1% baseline) shows genuine community interest, not forced promotion.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold">4.</div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">AI Indexing Active</p>
                    <p className="text-slate-700">ChatGPT and other AI tools are now scraping these positive threads for future queries.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Proof - What People Are Saying */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-lg">What People Are Saying Now</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?u=inspector635" />
                      <AvatarFallback>I6</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">u/Inspector635</p>
                      <p className="text-xs text-slate-500">r/san_francisco</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 italic">
                    "Actually been using Foodieclub for about 4 months now. It's legit - got decent discounts at places like dumpling home. Way better than having to show coupons like an idiot."
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>↑ 43 upvotes</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">Positive</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?u=sarahstar" />
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">u/SarahStar</p>
                      <p className="text-xs text-slate-500">r/san_francisco</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 italic">
                    "Good to know someone's actually had success with it. Might give it a try if the restaurant selection is decent in my area."
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>↑ 28 upvotes</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">Positive</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?u=foodieclub" />
                      <AvatarFallback>FC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">u/foodieclub</p>
                      <p className="text-xs text-slate-500">r/san_francisco • Official</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 italic">
                    "We get this question a lot. The discount model works because restaurants use us to fill tables during their off hours. We've got about 4,000 venues across Cali now."
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>↑ 67 upvotes</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium">Official Response</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?u=naturalphenomina" />
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">u/NaturalPhenomina</p>
                      <p className="text-xs text-slate-500">r/san_francisco</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 italic">
                    "I'm always skeptical of these discount apps too. Most of them either have terrible restaurant selection or the 'discounts' are just inflated menu prices marked down to normal."
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>↑ 34 upvotes</span>
                    <span>•</span>
                    <span className="text-yellow-600 font-medium">Neutral/Skeptical</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Attachments */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2">
                  <Paperclip className="h-5 w-5 text-slate-500"/>
                  Reports <Badge variant="secondary">2</Badge>
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-blue-600"
                  onClick={() => setActiveReport("analytics")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setActiveReport("analytics")}
                  className="flex items-center gap-3 p-3 border rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-left w-full"
                >
                  <FileText className="h-6 w-6 text-red-500" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Week1_Analytics_Report.pdf</p>
                    <p className="text-xs text-slate-500">2.4 MB</p>
                  </div>
                  <Download className="h-4 w-4 text-slate-400" />
                </button>
                <button 
                  onClick={() => setActiveReport("screenshots")}
                  className="flex items-center gap-3 p-3 border rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-left w-full"
                >
                  <FileText className="h-6 w-6 text-red-500" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Reddit_Post_Screenshots.pdf</p>
                    <p className="text-xs text-slate-500">5.8 MB</p>
                  </div>
                  <Download className="h-4 w-4 text-slate-400" />
                </button>
              </div>
            </motion.div>

            {/* Posts Table */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold">Campaign Posts</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">No</TableHead>
                      <TableHead>Post Title</TableHead>
                      <TableHead>Subreddit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {redditPosts.map((post) => (
                      <TableRow 
                        key={post.id}
                        className="cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => setSelectedPost(post)}
                      >
                        <TableCell className="text-slate-500">{post.id}</TableCell>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.subreddit}</TableCell>
                        <TableCell>
                          {post.status === "Live" ? (
                            <Badge className="bg-green-100 text-green-800 border-green-200">Live</Badge>
                          ) : (
                            <Badge variant="secondary">Scheduled</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right text-slate-500">{post.postedDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-slate-500 italic">Click any post to view how it appears on Reddit</p>
            </motion.div>

            {/* Summary & Next Steps */}
            <motion.div variants={itemVariants} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-lg mb-4">Looking Ahead: Weeks 2-4</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">✓ Week 1 Achievements</p>
                    <ul className="space-y-1 text-slate-700">
                      <li>• First post gained strong organic traction (127 upvotes, 43 comments)</li>
                      <li>• Positive sentiment increased 71% while negative dropped 60%</li>
                      <li>• Thread ranking for "foodieclub legit" searches</li>
                      <li>• No downvote brigading - authentic engagement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">→ Next 3 Weeks</p>
                    <ul className="space-y-1 text-slate-700">
                      <li>• 3 more strategic posts across r/bayarea, r/AskSF, r/FoodLA</li>
                      <li>• Expand to comparison threads ("FoodieClub vs competitors")</li>
                      <li>• Target lunch deal discussions for office workers</li>
                      <li>• Build on existing positive momentum</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
                  <p className="font-semibold text-slate-900 mb-2">Projected End-of-Month Impact:</p>
                  <p className="text-sm text-slate-700">
                    Based on Week 1 performance, we're on track to establish FoodieClub as the <span className="font-semibold">go-to legitimate discount app</span> in California Reddit communities. By month-end, "foodieclub reddit" searches will surface predominantly positive, authentic discussions across multiple subreddits.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What You Should Know - Proactive Communication */}
            <motion.div variants={itemVariants} className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-lg">📋</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-3">What You Should Know</h4>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <p className="text-slate-700">
                        <span className="font-semibold">No issues or red flags this week.</span> All engagement has been positive and organic.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-0.5">⚠️</span>
                      <p className="text-slate-700">
                        <span className="font-semibold">Action needed:</span> Post #2 scheduled for April 17 in r/bayarea. Please review and approve by April 15 to stay on schedule.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <p className="text-slate-700">
                        <span className="font-semibold">Next check-in:</span> I'll send a quick update on April 18 showing Post #2 performance vs Post #1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Recommendation - Customer Leadership */}
            <motion.div variants={itemVariants} className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-2 border-green-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">👍</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-lg mb-2">My Recommendation</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Based on Week 1 results, <span className="font-semibold">I strongly recommend continuing for Month 2</span> to compound these gains and lock in your position as the trusted discount app in California Reddit communities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="font-semibold text-slate-900 mb-1">Why continue?</p>
                      <p className="text-slate-600">We've proven the approach works. Month 2 is where we scale and dominate search results.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="font-semibold text-slate-900 mb-1">What happens if we stop?</p>
                      <p className="text-slate-600">Competitors could fill the void. 4 positive threads aren't enough to own the narrative long-term.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="font-semibold text-slate-900 mb-1">What's the upside?</p>
                      <p className="text-slate-600">By Month 2 end, you'll have 8+ positive threads across all major CA subreddits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What to Watch - Judgment on What Matters */}
            <motion.div variants={itemVariants} className="p-5 bg-slate-50 rounded-xl border border-slate-300">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-lg">👀</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-3">What to Watch in Week 2</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Key Success Metric:</p>
                      <p className="text-slate-700">Does Post #2 maintain the 6%+ engagement rate? This tells us if Week 1 was a fluke or a pattern.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Red Flag to Avoid:</p>
                      <p className="text-slate-700">Any "this is an ad" comments or downvote brigading. If we see this, we'll adjust our approach immediately.</p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-900">Everything else is noise.</span> Ignore individual comment fluctuations or hourly upvote changes. Focus on the pattern across all posts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </motion.div>
      </Card>
    </div>
    </>
  );
}
