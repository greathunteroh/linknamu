"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 서버에서 받은 값과 이 페이지에서 누른 횟수를 따로 두고 더해서 보여줍니다.
  // 데이터를 받기 전에는 서버 값이 비어 있으므로 0회로 표시됩니다.
  const [serverCounts, setServerCounts] = useState<Counts>({});
  const [localClicks, setLocalClicks] = useState<Counts>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Counts) => {
        if (!cancelled) setServerCounts(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const increment = (id: string) =>
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="mt-12 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClicked={() => increment(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
