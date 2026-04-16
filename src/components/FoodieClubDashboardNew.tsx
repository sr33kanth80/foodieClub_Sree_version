import { ProjectDetailView, ProjectDetailViewProps } from "@/components/ui/project-detail-view";

export function FoodieClubDashboardNew() {
  const campaignData: ProjectDetailViewProps = {
    breadcrumbs: [
      { label: "Campaigns", href: "#" },
      { label: "FoodieClub Reddit Campaign", href: "#" },
    ],
    title: "FoodieClub Legitimacy Campaign - Week 1 Results",
    status: "Active",
    assignees: [
      { name: "Sree", avatarUrl: "https://i.pravatar.cc/150?u=sree" },
      { name: "Campaign Team", avatarUrl: "https://i.pravatar.cc/150?u=team" },
    ],
    dateRange: {
      start: "April 8, 2026",
      end: "May 8, 2026",
    },
    tags: [
      { label: "Reddit Campaign", variant: "default" },
      { label: "Sentiment Analysis", variant: "secondary" },
      { label: "Week 1", variant: "destructive" },
    ],
    description:
      "Strategic Reddit campaign to improve FoodieClub's brand sentiment and address legitimacy concerns. Using 70 accounts to organically engage with potential users across California subreddits. Week 1 shows strong positive momentum with 264% increase in impressions and 71% improvement in positive sentiment.",
    attachments: [
      { name: "Week1_Analytics_Report.pdf", size: "2.4 MB", type: "pdf" },
      { name: "Reddit_Post_Screenshots.pdf", size: "5.8 MB", type: "pdf" },
    ],
    subTasks: [
      {
        id: 1,
        task: "Is Foodieclub actually legit? (r/san_francisco)",
        category: "Live Post",
        status: "Completed",
        dueDate: "April 8, 2026",
      },
      {
        id: 2,
        task: "Best discount apps for Bay Area restaurants?",
        category: "Scheduled",
        status: "Pending",
        dueDate: "April 17, 2026",
      },
      {
        id: 3,
        task: "FoodieClub vs other restaurant apps - honest review",
        category: "Scheduled",
        status: "Pending",
        dueDate: "April 22, 2026",
      },
      {
        id: 4,
        task: "Has anyone tried FoodieClub for lunch deals?",
        category: "Scheduled",
        status: "Pending",
        dueDate: "April 28, 2026",
      },
    ],
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-8 bg-background min-h-screen">
      <ProjectDetailView {...campaignData} />
    </div>
  );
}
