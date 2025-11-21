import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Message as MessageType } from "@/types";
import { User, Bot, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex gap-4 px-4 py-6 animate-fade-in",
        isUser ? "bg-transparent" : "bg-muted/30"
      )}
    >
      <Avatar className={cn(
        "w-8 h-8 shrink-0",
        isUser ? "bg-primary" : "bg-accent"
      )}>
        <AvatarFallback>
          {isUser ? (
            <User className="w-5 h-5 text-primary-foreground" />
          ) : (
            <Bot className="w-5 h-5 text-accent-foreground" />
          )}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm">
            {isUser ? "You" : "AI Assistant"}
          </p>
          {!isUser && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          )}
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}
