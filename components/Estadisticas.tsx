// components/ProfileStats.tsx

interface Props {
  price: string;
  hours: string;
  month: string;
}

export default function ProfileStats({ price, hours, month }: Props) {
  return (
    <div className="flex justify-between text-sm">
      <div className="flex flex-col items-center">
        ⭐
        <span className="font-semibold">5.0</span>
        <span className="opacity-60">Rating</span>
      </div>

      <div className="flex flex-col items-center">
        💲
        <span className="font-semibold">{price}</span>
        <span className="opacity-60">Hours</span>
      </div>

      <div className="flex flex-col items-center">
        🕒
        <span className="font-semibold">{month}</span>
        <span className="opacity-60">Month</span>
      </div>
    </div>
  );
}
