import * as React from "react";
import { X, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SlackConversation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Floating Slack Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#4A154B] hover:bg-[#611f69] shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        >
          <svg
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <path
              d="M26.3996 78.3998C26.3996 84.5998 21.5996 89.3998 15.3996 89.3998C9.19961 89.3998 4.39961 84.5998 4.39961 78.3998C4.39961 72.1998 9.19961 67.3998 15.3996 67.3998H26.3996V78.3998Z"
              fill="#E01E5A"
            />
            <path
              d="M32 78.3998C32 72.1998 36.8 67.3998 43 67.3998C49.2 67.3998 54 72.1998 54 78.3998V108.6C54 114.8 49.2 119.6 43 119.6C36.8 119.6 32 114.8 32 108.6V78.3998Z"
              fill="#E01E5A"
            />
            <path
              d="M43 26.3998C36.8 26.3998 32 21.5998 32 15.3998C32 9.19981 36.8 4.39981 43 4.39981C49.2 4.39981 54 9.19981 54 15.3998V26.3998H43Z"
              fill="#36C5F0"
            />
            <path
              d="M43 32C49.2 32 54 36.8 54 43C54 49.2 49.2 54 43 54H12.8C6.6 54 1.8 49.2 1.8 43C1.8 36.8 6.6 32 12.8 32H43Z"
              fill="#36C5F0"
            />
            <path
              d="M97.5996 43C97.5996 36.8 102.4 32 108.6 32C114.8 32 119.6 36.8 119.6 43C119.6 49.2 114.8 54 108.6 54H97.5996V43Z"
              fill="#2EB67D"
            />
            <path
              d="M92 43C92 49.2 87.2 54 81 54C74.8 54 70 49.2 70 43V12.8C70 6.6 74.8 1.8 81 1.8C87.2 1.8 92 6.6 92 12.8V43Z"
              fill="#2EB67D"
            />
            <path
              d="M81 97.5998C87.2 97.5998 92 102.4 92 108.6C92 114.8 87.2 119.6 81 119.6C74.8 119.6 70 114.8 70 108.6V97.5998H81Z"
              fill="#ECB22E"
            />
            <path
              d="M81 92C74.8 92 70 87.2 70 81C70 74.8 74.8 70 81 70H111.2C117.4 70 122.2 74.8 122.2 81C122.2 87.2 117.4 92 111.2 92H81Z"
              fill="#ECB22E"
            />
          </svg>
        </button>
      )}

      {/* Slack Conversation Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-[#4A154B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M26.3996 78.3998C26.3996 84.5998 21.5996 89.3998 15.3996 89.3998C9.19961 89.3998 4.39961 84.5998 4.39961 78.3998C4.39961 72.1998 9.19961 67.3998 15.3996 67.3998H26.3996V78.3998Z"
                  fill="white"
                />
                <path
                  d="M32 78.3998C32 72.1998 36.8 67.3998 43 67.3998C49.2 67.3998 54 72.1998 54 78.3998V108.6C54 114.8 49.2 119.6 43 119.6C36.8 119.6 32 114.8 32 108.6V78.3998Z"
                  fill="white"
                />
                <path
                  d="M43 26.3998C36.8 26.3998 32 21.5998 32 15.3998C32 9.19981 36.8 4.39981 43 4.39981C49.2 4.39981 54 9.19981 54 15.3998V26.3998H43Z"
                  fill="white"
                />
                <path
                  d="M43 32C49.2 32 54 36.8 54 43C54 49.2 49.2 54 43 54H12.8C6.6 54 1.8 49.2 1.8 43C1.8 36.8 6.6 32 12.8 32H43Z"
                  fill="white"
                />
              </svg>
              <div>
                <p className="font-semibold text-sm">Maddie</p>
                <p className="text-xs opacity-80">FoodieClub</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded p-1 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {/* Message 1 - Maddie */}
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/150?u=maddie" />
                <AvatarFallback className="bg-purple-100 text-purple-700">M</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm">Maddie</span>
                  <span className="text-xs text-slate-500">2:34 PM</span>
                </div>
                <div className="bg-slate-50 rounded-lg rounded-tl-none p-3 text-sm">
                  Hey.. I know you guys have run the first campaign. Can you give us a report? Not sure if how well its working so far / worth paying for
                </div>
              </div>
            </div>

            {/* Message 2 - Sree */}
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/150?u=sree" />
                <AvatarFallback className="bg-blue-100 text-blue-700">S</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm">Sree</span>
                  <span className="text-xs text-slate-500">2:41 PM</span>
                </div>
                <div className="bg-slate-50 rounded-lg rounded-tl-none p-3 text-sm">
                  <p className="mb-2">
                    Hey Maddie, the campaign is going just as expected. Our post is getting the right engagement on reddit. People are asking questions, we're leveling out and straightening out some skepticism that are naturally around products like FoodieClub.
                  </p>
                  <p className="mb-2">
                    We cant seem too pushy or have a reddit thread read like a total advertisement, because the community will downvote it to oblivion.
                  </p>
                  <p className="mb-2">
                    Overall we're surgically pushing out the right message and building the correct narrative around FoodieClub. We're expecting threads like this to be picked up my AI scrapers as well. So that's an added bonus.
                  </p>
                </div>
              </div>
            </div>

            {/* Message 3 - Maddie */}
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/150?u=maddie" />
                <AvatarFallback className="bg-purple-100 text-purple-700">M</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm">Maddie</span>
                  <span className="text-xs text-slate-500">2:43 PM</span>
                </div>
                <div className="bg-slate-50 rounded-lg rounded-tl-none p-3 text-sm">
                  Got it .. can you share a report of results so far?
                </div>
              </div>
            </div>

            {/* Message 4 - Sree */}
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/150?u=sree" />
                <AvatarFallback className="bg-blue-100 text-blue-700">S</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm">Sree</span>
                  <span className="text-xs text-slate-500">2:45 PM</span>
                </div>
                <div className="bg-slate-50 rounded-lg rounded-tl-none p-3 text-sm">
                  Absolutely, let me put a rush on it. You'll have all the info laid out in a dashboard and exportable as a report in pdf format shortly.
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-slate-50">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MessageSquare className="h-4 w-4" />
              <span>Context for this dashboard</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
