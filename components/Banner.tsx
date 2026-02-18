// components/ProfileHeader.tsx

interface Props {
  name: string;
  role: string;
  image: string;
}

export default function ProfileHeader({ name, role, image }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-32 w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 relative">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white absolute -bottom-8 left-4"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm opacity-70">{role}</p>
      </div>
    </div>
  );
}
