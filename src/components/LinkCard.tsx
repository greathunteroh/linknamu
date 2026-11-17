"use client";

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
      className="block w-full rounded-2xl border-2 border-gray-900 bg-white px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-100 dark:bg-gray-900"
    >
      {title}
    </a>
  );
}
