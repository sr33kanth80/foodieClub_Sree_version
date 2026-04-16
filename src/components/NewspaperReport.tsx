import * as React from "react";

interface NewspaperReportProps {
  type: "analytics" | "screenshots";
  onClose: () => void;
}

export function NewspaperReport({ type, onClose }: NewspaperReportProps) {
  const handlePrint = () => {
    window.print();
  };

  if (type === "analytics") {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-auto">
        <div className="max-w-4xl mx-auto p-8 newspaper-page">
          {/* Header with close button - hidden in print */}
          <div className="no-print flex justify-between items-center mb-4 pb-4 border-b">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
            >
              Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
            >
              Close
            </button>
          </div>

          {/* Newspaper Header */}
          <div className="border-t-4 border-b-4 border-black py-2 mb-6">
            <h1 className="font-newspaper text-6xl text-center font-bold tracking-tight">
              The FoodieClub Chronicle
            </h1>
            <div className="flex justify-between items-center mt-2 text-xs font-newspaper">
              <span>Vol. 1, No. 1</span>
              <span className="font-bold">CAMPAIGN ANALYTICS REPORT</span>
              <span>April 15, 2026</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="border-b-2 border-black pb-4 mb-6">
            <h2 className="font-newspaper text-5xl font-bold leading-tight mb-2">
              Reddit Campaign Delivers 264% Surge in Brand Impressions
            </h2>
            <h3 className="font-newspaper text-2xl text-slate-700 italic">
              Week One Results Exceed Projections as Positive Sentiment Climbs 71 Percent
            </h3>
            <p className="text-sm mt-3 font-newspaper">
              By <span className="font-bold">Sree & Analytics Team</span> | Special Report to Maddie
            </p>
          </div>

          {/* Article Content - Two Column Layout */}
          <div className="newspaper-columns space-y-4">
            <p className="font-newspaper text-base leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
              In a decisive victory for strategic social media engagement, FoodieClub's inaugural Reddit campaign has shattered baseline metrics, achieving a 264 percent increase in impressions and reaching 6,200 users across California communities in just seven days.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              The campaign, which launched April 8 with a carefully orchestrated post in r/san_francisco, has fundamentally altered the brand's perception among skeptical consumers. Positive sentiment surged from 34 percent to 58 percent, while negative sentiment plummeted 60 percent, from 25 percent to just 10 percent.
            </p>

            <div className="border-t border-b border-black py-4 my-6 bg-slate-50">
              <h4 className="font-newspaper text-2xl font-bold mb-3 text-center">
                BY THE NUMBERS
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-newspaper text-4xl font-bold">8,750</p>
                  <p className="font-newspaper text-sm">Total Impressions</p>
                  <p className="text-xs text-green-700 font-bold">+264% vs Baseline</p>
                </div>
                <div>
                  <p className="font-newspaper text-4xl font-bold">6.8%</p>
                  <p className="font-newspaper text-sm">Engagement Rate</p>
                  <p className="text-xs text-green-700 font-bold">+224% vs Baseline</p>
                </div>
                <div>
                  <p className="font-newspaper text-4xl font-bold">58%</p>
                  <p className="font-newspaper text-sm">Positive Sentiment</p>
                  <p className="text-xs text-green-700 font-bold">+71% vs Baseline</p>
                </div>
                <div>
                  <p className="font-newspaper text-4xl font-bold">6,200</p>
                  <p className="font-newspaper text-sm">Users Reached</p>
                  <p className="text-xs text-green-700 font-bold">+235% vs Baseline</p>
                </div>
              </div>
            </div>

            <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3">
              The Reddit Difference
            </h4>

            <p className="font-newspaper text-base leading-relaxed">
              Reddit's notoriously advertising-hostile user base presents unique challenges for brand campaigns. Traditional promotional content is swiftly downvoted and buried, rendering conventional marketing approaches ineffective.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              The campaign's success hinged on authenticity. Posts were crafted to read as genuine user inquiries rather than advertisements, a strategy that yielded 127 upvotes and 43 comments without a single accusation of promotional content.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              "The community responded because the content felt organic," noted the campaign team. "We're not selling. We're participating in existing conversations about restaurant discount apps."
            </p>

            <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3 mt-6">
              Search Visibility Transformed
            </h4>

            <p className="font-newspaper text-base leading-relaxed">
              Perhaps most significantly, the campaign has captured the top position for "foodieclub legit" searches on Reddit, directly addressing consumer skepticism at the point of inquiry. This organic search dominance represents a long-term asset, as Reddit threads remain indexed indefinitely.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              Artificial intelligence systems, including ChatGPT and similar platforms, are now indexing these positive discussions, ensuring that future queries about FoodieClub surface authentic, favorable user experiences.
            </p>

            <div className="border-l-4 border-black pl-4 my-6 bg-slate-50 p-4">
              <p className="font-newspaper text-lg italic leading-relaxed">
                "Actually been using Foodieclub for about 4 months now. It's legit - got decent discounts at places like dumpling home. Way better than having to show coupons like an idiot."
              </p>
              <p className="font-newspaper text-sm mt-2">
                - u/Inspector635, r/san_francisco (43 upvotes)
              </p>
            </div>

            <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3">
              Strategic Implications
            </h4>

            <p className="font-newspaper text-base leading-relaxed">
              The Week One results establish a foundation for sustained momentum. Three additional posts are scheduled across r/bayarea, r/AskSF, and r/FoodLosAngeles over the coming three weeks, each designed to build upon the established positive narrative.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              Campaign leadership recommends continuation through Month Two to consolidate market position and prevent competitor encroachment. "Four positive threads aren't enough to own the narrative long-term," the team advised. "By Month Two's end, we'll have eight-plus positive threads across all major California subreddits."
            </p>

            <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3 mt-6">
              Week Two Outlook
            </h4>

            <p className="font-newspaper text-base leading-relaxed">
              The critical metric for Week Two will be whether Post #2, scheduled for April 17 in r/bayarea, maintains the 6 percent-plus engagement rate. This will determine whether Week One's performance represents a sustainable pattern or an anomalous result.
            </p>

            <p className="font-newspaper text-base leading-relaxed">
              Campaign monitors will watch closely for any "this is an ad" accusations or downvote brigading, prepared to adjust strategy immediately if community sentiment shifts.
            </p>

            <div className="border-t-2 border-black pt-4 mt-6">
              <p className="font-newspaper text-sm italic text-center">
                End of Report - Prepared for Maddie by Sree & Team
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screenshots Report
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="max-w-4xl mx-auto p-8 newspaper-page">
        {/* Header with close button - hidden in print */}
        <div className="no-print flex justify-between items-center mb-4 pb-4 border-b">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
          >
            Print / Save as PDF
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
          >
            Close
          </button>
        </div>

        {/* Newspaper Header */}
        <div className="border-t-4 border-b-4 border-black py-2 mb-6">
          <h1 className="font-newspaper text-6xl text-center font-bold tracking-tight">
            The FoodieClub Chronicle
          </h1>
          <div className="flex justify-between items-center mt-2 text-xs font-newspaper">
            <span>Vol. 1, No. 2</span>
            <span className="font-bold">REDDIT POST DOCUMENTATION</span>
            <span>April 15, 2026</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="border-b-2 border-black pb-4 mb-6">
          <h2 className="font-newspaper text-5xl font-bold leading-tight mb-2">
            Inside the Campaign: A Visual Chronicle
          </h2>
          <h3 className="font-newspaper text-2xl text-slate-700 italic">
            Documentation of Reddit Engagement and Community Response
          </h3>
          <p className="text-sm mt-3 font-newspaper">
            By <span className="font-bold">Campaign Documentation Team</span> | Visual Evidence Report
          </p>
        </div>

        {/* Article Content */}
        <div className="space-y-6">
          <p className="font-newspaper text-base leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
            This supplementary report provides visual documentation of the FoodieClub Reddit campaign's first week, capturing the organic community engagement that drove the campaign's exceptional performance metrics.
          </p>

          <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3 mt-6">
            Post #1: "Is Foodieclub actually legit?"
          </h4>

          <div className="border-2 border-black p-4 bg-slate-50">
            <p className="font-newspaper text-sm mb-2">
              <span className="font-bold">Subreddit:</span> r/san_francisco
            </p>
            <p className="font-newspaper text-sm mb-2">
              <span className="font-bold">Posted:</span> April 8, 2026
            </p>
            <p className="font-newspaper text-sm mb-2">
              <span className="font-bold">Performance:</span> 127 upvotes, 43 comments
            </p>
            <p className="font-newspaper text-sm mb-4">
              <span className="font-bold">Status:</span> Ranked #1 for "foodieclub legit" searches
            </p>
            
            <div className="bg-white p-4 border border-slate-300 mb-4">
              <p className="font-mono text-sm mb-3 text-slate-700">
                [Screenshot would appear here showing the original post]
              </p>
              <p className="font-newspaper text-sm italic">
                "I keep seeing ads for Foodieclub and I'm skeptical. Has anyone actually used this? Is it legit or just another scam app?"
              </p>
            </div>

            <h5 className="font-newspaper text-lg font-bold mb-2">Notable Community Responses:</h5>
            
            <div className="space-y-3">
              <div className="bg-white p-3 border-l-4 border-green-600">
                <p className="font-newspaper text-sm mb-1">
                  <span className="font-bold">u/Inspector635</span> (43 upvotes)
                </p>
                <p className="font-newspaper text-sm italic">
                  "Actually been using Foodieclub for about 4 months now. It's legit - got decent discounts at places like dumpling home. Way better than having to show coupons like an idiot."
                </p>
              </div>

              <div className="bg-white p-3 border-l-4 border-blue-600">
                <p className="font-newspaper text-sm mb-1">
                  <span className="font-bold">u/foodieclub</span> [Official] (67 upvotes)
                </p>
                <p className="font-newspaper text-sm italic">
                  "We get this question a lot. The discount model works because restaurants use us to fill tables during their off hours. We've got about 4,000 venues across Cali now."
                </p>
              </div>

              <div className="bg-white p-3 border-l-4 border-green-600">
                <p className="font-newspaper text-sm mb-1">
                  <span className="font-bold">u/SarahStar</span> (28 upvotes)
                </p>
                <p className="font-newspaper text-sm italic">
                  "Good to know someone's actually had success with it. Might give it a try if the restaurant selection is decent in my area."
                </p>
              </div>

              <div className="bg-white p-3 border-l-4 border-yellow-600">
                <p className="font-newspaper text-sm mb-1">
                  <span className="font-bold">u/NaturalPhenomina</span> (34 upvotes)
                </p>
                <p className="font-newspaper text-sm italic">
                  "I'm always skeptical of these discount apps too. Most of them either have terrible restaurant selection or the 'discounts' are just inflated menu prices marked down to normal."
                </p>
              </div>
            </div>
          </div>

          <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3 mt-8">
            Engagement Analysis
          </h4>

          <p className="font-newspaper text-base leading-relaxed">
            The post's success stemmed from its authentic framing. Rather than promoting FoodieClub, the initial post expressed skepticism, inviting genuine user experiences to surface organically.
          </p>

          <div className="border-t border-b border-black py-4 my-6 bg-slate-50">
            <h5 className="font-newspaper text-xl font-bold mb-3 text-center">
              SENTIMENT BREAKDOWN
            </h5>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-newspaper text-3xl font-bold text-green-700">58%</p>
                <p className="font-newspaper text-sm">Positive</p>
              </div>
              <div>
                <p className="font-newspaper text-3xl font-bold text-slate-600">32%</p>
                <p className="font-newspaper text-sm">Neutral</p>
              </div>
              <div>
                <p className="font-newspaper text-3xl font-bold text-red-700">10%</p>
                <p className="font-newspaper text-sm">Negative</p>
              </div>
            </div>
          </div>

          <h4 className="font-newspaper text-2xl font-bold border-b border-black pb-1 mb-3 mt-8">
            Upcoming Posts Preview
          </h4>

          <div className="space-y-4">
            <div className="border border-black p-4">
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Post #2:</span> "Best discount apps for Bay Area restaurants?"
              </p>
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Target:</span> r/bayarea
              </p>
              <p className="font-newspaper text-sm">
                <span className="font-bold">Scheduled:</span> April 17, 2026
              </p>
            </div>

            <div className="border border-black p-4">
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Post #3:</span> "FoodieClub vs other restaurant apps"
              </p>
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Target:</span> r/AskSF
              </p>
              <p className="font-newspaper text-sm">
                <span className="font-bold">Scheduled:</span> April 22, 2026
              </p>
            </div>

            <div className="border border-black p-4">
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Post #4:</span> "Has anyone tried FoodieClub for lunch deals?"
              </p>
              <p className="font-newspaper text-sm mb-1">
                <span className="font-bold">Target:</span> r/FoodLosAngeles
              </p>
              <p className="font-newspaper text-sm">
                <span className="font-bold">Scheduled:</span> April 28, 2026
              </p>
            </div>
          </div>

          <div className="border-t-2 border-black pt-4 mt-8">
            <p className="font-newspaper text-sm italic text-center">
              End of Visual Documentation - Prepared for Maddie by Campaign Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
