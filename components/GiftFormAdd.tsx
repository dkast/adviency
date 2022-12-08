"use client";
import React, { useState } from "react";

interface GiftFormAddProps {
  onClick: (giftDescription: string) => void;
}

const GiftFormAdd = ({ onClick }: GiftFormAddProps) => {
  const [giftDescription, setGiftDescription] = useState<string>("");

  return (
    <div className="flex gap-2 bg-emerald-500 p-3 text-white">
      <input
        type="text"
        className="block w-full border-0 border-b border-emerald-400 border-transparent bg-transparent focus:border-emerald-300 focus:ring-0 sm:text-sm"
        value={giftDescription}
        onChange={(e) => setGiftDescription(e.target.value)}
      />
      <button
        className="rounded-full border border-transparent bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-800 disabled:bg-emerald-500 disabled:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        type="button"
        onClick={(e) => onClick(giftDescription)}
        disabled={giftDescription === ""}
      >
        Añadir
      </button>
    </div>
  );
};

export default GiftFormAdd;
