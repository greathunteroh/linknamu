import { siFacebook, siGithub, siInstagram, type SimpleIcon } from "simple-icons";

// 링크 id별 서비스 로고. GitHub 로고는 검은색이라 다크모드에서도 보이도록 글자색을 따릅니다.
const icons: Record<string, { icon: SimpleIcon; color?: string }> = {
  github: { icon: siGithub },
  facebook: { icon: siFacebook, color: `#${siFacebook.hex}` },
  instagram: { icon: siInstagram, color: `#${siInstagram.hex}` },
};

export default function BrandIcon({ id }: { id: string }) {
  const entry = icons[id];
  if (!entry) return null;

  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill={entry.color ?? "currentColor"}
    >
      <path d={entry.icon.path} />
    </svg>
  );
}
