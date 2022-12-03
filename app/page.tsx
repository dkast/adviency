import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-xl bg-orange-50 p-4 shadow-lg">
        <h1 className="text-red-800 text-2xl mb-6">Regalos</h1>
        <ul>
          <li>Epiphone SG</li>
          <li>Pedal compresor</li>
          <li>Pickups PFA</li>
        </ul>
      </div>
    </div>
  );
}
