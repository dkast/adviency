import GiftList from "@/components/GiftList";
import { Gift } from "@/types/gift";

// async function getGifts() {
//   const data: Gift[] = [
//     {
//       description: "Guitarra electrica",
//       qty: 1,
//     },
//     {
//       description: "Pedal chorus",
//       qty: 1,
//     },
//     {
//       description: "Pastillas Humbucker",
//       qty: 1,
//     },
//   ];

//   return data;
// }

export default async function Home() {
  // const data = await getGifts();
  return (
    <div className="flex justify-center items-center h-full">
      <GiftList />
    </div>
  );
}
