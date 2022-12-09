"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { Gift } from "@/types/gift";
interface GiftFormAddProps {
  onSubmit: (gift: Gift) => void;
}

const GiftFormAdd = ({ onSubmit }: GiftFormAddProps) => {
  const [giftDescription, setGiftDescription] = useState<string>("");
  const [giftQty, setGiftQty] = useState<number>(1);

  const handleSubmit = () => {
    if (giftQty <= 0) {
      toast.error("Cantidad debe ser mayor a cero");
      return;
    }

    const newGift: Gift = {
      description: giftDescription,
      qty: giftQty,
    };

    onSubmit(newGift);
    setGiftDescription("");
    setGiftQty(1);
  };

  return (
    <div className="flex gap-2 bg-emerald-500 p-3 text-white">
      <input
        type="text"
        placeholder="Describe tu regalo"
        className="block w-full border-0 border-b placeholder:text-emerald-400 border-emerald-300 bg-transparent focus:border-emerald-200 focus:ring-0 sm:text-sm"
        value={giftDescription}
        onChange={(e) => setGiftDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="0"
        value={giftQty}
        className="block w-24 border-0 border-b placeholder:text-emerald-400 border-emerald-300 bg-transparent focus:border-emerald-200 focus:ring-0 sm:text-sm"
        onChange={(e) => setGiftQty(parseInt(e.target.value))}
      />
      <button
        className="rounded-full border border-transparent bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-800 disabled:bg-emerald-500 disabled:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        type="button"
        onClick={handleSubmit}
        disabled={giftDescription === ""}
      >
        Añadir
      </button>
    </div>
  );
};

export default GiftFormAdd;
