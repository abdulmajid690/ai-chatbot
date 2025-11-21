import { MessageList } from "@/components/MessageList";
import { MessageInput } from "@/components/MessageInput";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import type { Message } from "@/types";

interface ChatAreaProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
}

export function ChatArea({ messages, isTyping, onSendMessage }: ChatAreaProps) {
  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col h-full">
      {hasMessages ? (
        <MessageList messages={messages} isTyping={isTyping} />
      ) : (
        <WelcomeScreen />
      )}
      <MessageInput onSendMessage={onSendMessage} disabled={isTyping} />
    </div>
  );
}
