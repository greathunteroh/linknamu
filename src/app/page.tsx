import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-80 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-500/10"
      />

      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-6 sm:px-8">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-8">
          <Profile {...profile} />
        </div>
        <LinkList links={links} />
      </main>
    </div>
  );
}
