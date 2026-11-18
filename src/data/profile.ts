export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 보여 주기용 더미값입니다. 실제 프로필과 링크로 교체하세요.
export const profile = {
  name: "노용헌",
  bio: "폭넓은 관심사를 가진 열렬한 독서가",
  image: "/profile.jpeg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/greathunteroh" },
  { id: "facebook", title: "Facebook", url: "https://www.facebook.com/hunter.roh" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/sirhunteroh" },
];
