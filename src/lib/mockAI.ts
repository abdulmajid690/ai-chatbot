// Mock AI response generator with realistic typing delay
const responses = [
  "I'm a simulated AI assistant. I can help you with various tasks, answer questions, and have conversations. What would you like to know?",
  "That's an interesting question! As a demo AI, I can provide helpful responses to demonstrate the chat interface. Feel free to ask me anything!",
  "I understand what you're asking. While I'm a simulated assistant for this demo, I'm designed to show how a real ChatGPT-like interface would work.",
  "Great question! I'm here to help demonstrate this chat interface. The real power would come from connecting to an actual AI API like OpenAI or Anthropic.",
  "I appreciate your message! This is a demonstration of a ChatGPT clone interface. In a production version, I would be connected to a real AI model.",
  "That's a thoughtful inquiry. As a mock AI, I can engage in conversation to showcase the features of this chat application.",
  "Interesting! I'm designed to simulate AI responses for this demo. Each message you send helps demonstrate the chat functionality.",
  "I see what you mean. This interface is built to replicate the ChatGPT experience with React and shadcn/ui components.",
];

const contextualResponses: Record<string, string> = {
  hello: "Hello! How can I assist you today?",
  hi: "Hi there! What can I help you with?",
  hey: "Hey! What's on your mind?",
  help: "I'm here to help! This is a demo ChatGPT clone. You can ask me questions, and I'll respond to demonstrate the interface.",
  thanks: "You're welcome! Is there anything else I can help you with?",
  thank: "You're welcome! Feel free to ask if you need anything else.",
  bye: "Goodbye! Have a great day!",
  goodbye: "Take care! Come back anytime.",
};

export async function generateMockResponse(userMessage: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Check for contextual responses
  const lowerMessage = userMessage.toLowerCase().trim();
  for (const [key, response] of Object.entries(contextualResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  // Return random response
  return responses[Math.floor(Math.random() * responses.length)];
}

export function generateConversationTitle(firstMessage: string): string {
  // Generate a title from the first message (max 50 chars)
  const title = firstMessage.slice(0, 50);
  return title.length < firstMessage.length ? title + '...' : title;
}
