interface Props {
  moreInfo?: boolean;
}

export default function masInformacion({ moreInfo }: Props) {
  return (
    <button
      className={`mt-6 w-full py-3 rounded-xl font-semibold transition
        ${moreInfo
          ? "bg-blue-500 hover:bg-blue-600 text-white"
          : "border border-gray-300 hover:bg-gray-100"}
      `}
    >
      Ver mas
      
    </button>
  );
}
