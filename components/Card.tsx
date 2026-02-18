// components/ProfileCard.tsx
import Banner from "./Banner";
import Estadisticas from "./Estadisticas";
import Boton from "./Boton";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  price: string;
  hours: string;
  month: string;
  dark?: boolean;
}

export default function CardPerfil({
  name,
  role,
  image,
  price,
  hours,
  month,
  dark = false,
}: ProfileCardProps) {
  return (
    <div
      className={`w-80 rounded-3xl shadow-xl p-6 flex flex-col justify-center
      ${dark ? "bg-black text-white" : "bg-white text-gray-800"}`}
    >
      <div className="flex flex-col gap-6">
        <Banner name={name} role={role} image={image} />
        <Estadisticas price={price} hours={hours} month={month} />
      </div>

      <Boton moreInfo={dark} />
    </div>
  );
}
