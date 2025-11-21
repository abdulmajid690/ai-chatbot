import { cn } from "@/lib/utils";

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 px-4 py-3">
      <div className="flex space-x-1">
        <div className={cn(
          "w-2 h-2 bg-primary rounded-full animate-pulse-dot"
        )} style={{ animationDelay: '0s' }} />
        <div className={cn(
          "w-2 h-2 bg-primary rounded-full animate-pulse-dot"
        )} style={{ animationDelay: '0.2s' }} />
        <div className={cn(
          "w-2 h-2 bg-primary rounded-full animate-pulse-dot"
        )} style={{ animationDelay: '0.4s' }} />
      </div>
      <span className="text-sm text-muted-foreground">AI is thinking...</span>
    </div>
  );
}
