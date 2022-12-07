"use client";
import React, { useState } from "react";

interface GiftFormAddProps {
  onClick: (giftDescription: string) => void;
}

const GiftFormAdd = ({ onClick }: GiftFormAddProps) => {
  const [giftDescription, setGiftDescription] = useState<string>("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="rounded-lg border-stone-300 text-sm focus:border-emerald-500 focus:ring-emerald-300"
        value={giftDescription}
        onChange={(e) => setGiftDescription(e.target.value)}
      />
      <button
        className="rounded-lg border border-transparent bg-emerald-600 text-white shadow-sm px-3 py-2 hover:bg-emerald-800 disabled:bg-emerald-500 disabled:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
