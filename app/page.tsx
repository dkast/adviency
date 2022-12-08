import GiftList from "@/components/GiftList";
import { Gift } from "@/types/gift";

async function getGifts() {
  const data: Gift[] = [
    {
      description: "Guitarra electrica",
    },
    {
      description: "Pedal chorus",
    },
    {
      description: "Pastillas Humbucker",
    },
  ];

  return data;
}

export default async function Home() {
  const data = await getGifts();
  return (
    <div className="flex justify-center items-center h-full">
      <div className="rounded-xl bg-sky-50 overflow-clip shadow-lg shadow-sky-500/60 z-50">
        <div className="bg-emerald-500 p-4 text-center">
          <h1 className="text-white text-2xl">Regalos</h1>
        </div>
        {data.length > 0 && <GiftList data={data}></GiftList>}
      </div>
    </div>
  );
}
