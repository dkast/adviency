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
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-xl bg-orange-50 p-4 shadow-lg">
        <h1 className="text-red-800 text-2xl mb-6">Regalos</h1>
        {data.length > 0 && <GiftList data={data}></GiftList>}
      </div>
    </div>
  );
}
