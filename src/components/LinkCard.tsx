"use client";

import BrandIcon from "@/components/BrandIcon";
import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  const recordClick = () => {
    const body = JSON.stringify({ linkId: id });
    // 페이지를 떠나는 중에도 전송되도록 sendBeacon을 우선 사용합니다.
    if (!navigator.sendBeacon?.("/api/clicks", body)) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true });
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="group flex w-full items-center justify-between rounded-lg border border-white/70 bg-white/45 px-5 py-4 font-medium shadow-[0_4px_20px_-8px_rgba(120,53,15,0.18)] backdrop-blur-md transition duration-200 hover:bg-white/65 hover:shadow-[0_8px_24px_-10px_rgba(120,53,15,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:bg-white/[0.1]"
    >
      <span className="flex items-center gap-3">
        <BrandIcon id={id} />
        {title}
      </span>
      <span
        aria-hidden
        className="text-stone-400 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-300"
      >
        ↗
      </span>
    </a>
  );
}
