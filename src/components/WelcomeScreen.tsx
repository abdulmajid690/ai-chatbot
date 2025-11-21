import { MessageSquare, Sparkles, Zap, Code } from "lucide-react";

export function WelcomeScreen() {
  const suggestions = [
    { icon: MessageSquare, text: "Explain quantum computing", color: "text-blue-400" },
    { icon: Sparkles, text: "Write a creative story", color: "text-purple-400" },
    { icon: Zap, text: "Help me brainstorm ideas", color: "text-yellow-400" },
    { icon: Code, text: "Debug my code", color: "text-green-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">
          ChatGPT Clone
        </h1>
        <p className="text-lg text-muted-foreground">
          Start a conversation and experience AI-powered chat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Icon className={`w-6 h-6 mb-3 ${suggestion.color} group-hover:scale-110 transition-transform`} />
              <p className="text-foreground group-hover:text-primary transition-colors">
                {suggestion.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          This is a demo with simulated AI responses
        </p>
      </div>
    </div>
  );
}
