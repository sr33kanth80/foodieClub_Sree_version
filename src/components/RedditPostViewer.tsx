import * as React from "react";
import { X, ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  author: string;
  content: string;
  upvotes: number;
  avatar: string;
  isOfficial?: boolean;
  sentiment?: "positive" | "neutral" | "negative";
  replies?: Comment[];
  timeAgo?: string;
}

interface RedditPost {
  id: number;
  title: string;
  subreddit: string;
  author: string;
  content: string;
  upvotes: number;
  comments: Comment[];
  postedDate: string;
  status: string;
}

interface RedditPostViewerProps {
  post: RedditPost;
  onClose: () => void;
}

const CommentThread: React.FC<{ comment: Comment; depth?: number }> = ({ comment, depth = 0 }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  
  return (
    <div className={`${depth > 0 ? 'border-l-2 border-slate-200 pl-4 ml-4' : ''} py-2`}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8 flex-shrink-0">
          <AvatarImage src={comment.avatar} />
          <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-semibold text-sm">u/{comment.author}</span>
            {comment.isOfficial && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                Official
              </span>
            )}
            {comment.sentiment && (
              <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                comment.sentiment === "positive" 
                  ? "bg-green-100 text-green-700" 
                  : comment.sentiment === "negative"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}>
                {comment.sentiment}
              </span>
            )}
            <span className="text-xs text-slate-500">• {comment.timeAgo || "2d ago"}</span>
          </div>
          
          {!isCollapsed && (
            <>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                {comment.content}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <button className="flex items-center gap-1 hover:text-slate-700">
                  <ArrowUp className="h-3 w-3" />
                  <span className="font-semibold">{comment.upvotes}</span>
                  <ArrowDown className="h-3 w-3" />
                </button>
                <button className="hover:text-slate-700">Reply</button>
                <button className="hover:text-slate-700">Share</button>
                <button className="hover:text-slate-700">Report</button>
              </div>
            </>
          )}
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="space-y-2">
              {comment.replies.map((reply, index) => (
                <CommentThread key={index} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function RedditPostViewer({ post, onClose }: RedditPostViewerProps) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 overflow-auto" onClick={onClose}>
      <div className="min-h-screen py-8 px-4">
        <div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Reddit-style post */}
          <div className="bg-white">
            {/* Subreddit header */}
            <div className="px-6 pt-4 pb-2 border-b">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">r/</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{post.subreddit}</p>
                  <p className="text-xs text-slate-500">Posted by u/{post.author} • {post.postedDate}</p>
                </div>
              </div>
            </div>

            {/* Post content */}
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{post.content}</p>
            </div>

            {/* Post actions */}
            <div className="px-6 py-2 border-t border-b bg-slate-50">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <button className="flex items-center gap-1 px-2 py-1 hover:bg-slate-200 rounded">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">{post.upvotes}</span>
                    <ArrowDown className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">{post.comments.length} Comments</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Bookmark className="h-4 w-4" />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="px-6 py-4">
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Sort by: <span className="text-blue-600">Best</span>
                </p>
              </div>

              <div className="space-y-4">
                {post.comments.map((comment, index) => (
                  <CommentThread key={index} comment={comment} />
                ))}
              </div>

              {/* Load more comments */}
              <div className="mt-6 text-center">
                <button className="text-sm text-blue-600 hover:underline font-medium">
                  Load more comments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
