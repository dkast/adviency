"use client";
import React from "react";
import { Gift } from "@/types/gift";

interface GiftItemProps {
  gift: Gift;
  onDelete: (gift: Gift) => void;
}
const GiftItem = ({ gift, onDelete }: GiftItemProps) => {
  return (
    <div className="flex justify-between">
      <span>{gift.description}</span>
      <button onClick={(e) => onDelete(gift)}>X</button>
    </div>
  );
};

export default GiftItem;
