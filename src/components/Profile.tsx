import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex items-center gap-5">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-24 w-24 shrink-0 rounded-full object-cover shadow-[0_12px_28px_-10px_rgba(120,53,15,0.45)] ring-4 ring-white/80 sm:h-28 sm:w-28 dark:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.7)] dark:ring-white/10"
      />
      <div className="min-w-0">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">{name}</h1>
        <p className="mt-1.5 whitespace-pre-line text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
          {bio}
        </p>
      </div>
    </section>
  );
}
