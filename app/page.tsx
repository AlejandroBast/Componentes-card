import CardPerfil from "@/components/Card"; 

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-full gap-4 justify-center items-center h-screen text-center text-black dark:text-white dark:bg-black">
       <div className="rounded-2xl bg-violet-500/20 p-4 border-rounded border-violet-400 shadow-lg hover:bg-violet-500/30 transition-all duration-300 items-center">
        <CardPerfil
          name="John Doe"
          role="Software Engineer"
          image="https://media.discordapp.net/attachments/1196590220460703867/1473508400230043758/fa969aba84e63c498441639f6fea8162.jpg?ex=69967723&is=699525a3&hm=d4f68372497f2c755ae651805cacc32b63dc0c27b4f556f430ff029c23086176&=&format=webp"
          price="$50/hr"
          hours="40"
          month="June"
          dark={false}>
        </CardPerfil>
      </div>

      <div className="rounded-2xl bg-violet-500/20 p-4 border-rounded border-violet-400 shadow-lg hover:bg-violet-500/30 transition-all duration-300 items-center">
      
      <CardPerfil
        name="Santiago bustos"
        role="Frontend Developer"
        image="https://media.discordapp.net/attachments/1211120524961386607/1473542301270937680/fc6c726b-894a-494c-911f-92aa32fe6745.jpg?ex=699696b5&is=69954535&hm=fa6a289ed6d4dbfef154fcc25bf682f1580aeab348a0fdb854077f7371742a73&=&format=webp&width=324&height=702"
        price="$45/hr"
        hours="35"
        month="June"
        dark={true}>
      </CardPerfil>

      </div>

    </div>
  );
}
``