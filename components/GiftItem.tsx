"use client";
import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { GiftIcon } from "@heroicons/react/24/outline";

import { Gift } from "@/types/gift";

interface GiftItemProps {
  gift: Gift;
  onDelete: (gift: Gift) => void;
}
const GiftItem = ({ gift, onDelete }: GiftItemProps) => {
  return (
    <div className="flex justify-between gap-2 bg-gradient-to-r from-emerald-100 via-transparent to-transparent rounded-lg px-2 py-1.5">
      <GiftIcon className="w-6 h-6 text-emerald-600" />
      <div className="grow">
        <span>{gift.description}</span>
      </div>
      <button
        className="rounded border border-transparent text-stone-500 hover:text-rose-600 hover:bg-rose-100 px-2 py-1 disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        onClick={(e) => onDelete(gift)}
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default GiftItem;
