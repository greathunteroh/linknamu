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
        className="h-24 w-24 shrink-0 rounded-full border-2 border-gray-900 object-cover sm:h-28 sm:w-28 dark:border-gray-100"
      />
      <div className="min-w-0">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{bio}</p>
      </div>
    </section>
  );
}
