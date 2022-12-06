"use client";
import React, { useState } from "react";

interface GiftFormAddProps {
  onClick: (giftDescription: string) => void;
}

const GiftFormAdd = ({ onClick }: GiftFormAddProps) => {
  const [giftDescription, setGiftDescription] = useState<string>("");

  return (
    <div className="flex">
      <input
        type="text"
        value={giftDescription}
        onChange={(e) => setGiftDescription(e.target.value)}
      />
      <button type="submit" onClick={(e) => onClick(giftDescription)}>
        Añadir
      </button>
    </div>
  );
};

export default GiftFormAdd;
