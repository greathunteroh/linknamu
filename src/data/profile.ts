export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 보여 주기용 더미값입니다. 실제 프로필과 링크로 교체하세요.
export const profile = {
  name: "노용헌",
  bio: "폭넓은 관심사를 가진 열렬한 독서가",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];
