import AIChat from "@/components/chat-bot";
import ThemeSwitcher from "@/components/theme-swicher";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <AIChat />
    </div>
  );
}
