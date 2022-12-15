"use client";
import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { GiftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { Gift } from "@/types/gift";

interface GiftItemProps {
  gift: Gift;
  onDelete: (gift: Gift) => void;
}
const GiftItem = ({ gift, onDelete }: GiftItemProps) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      className="flex justify-between items-center gap-6 bg-gradient-to-r from-emerald-100 via-transparent to-transparent rounded-lg px-2 py-1.5"
    >
      {/* <GiftIcon className="w-6 h-6 text-emerald-600" /> */}
      {gift.imageUrl ? (
        <img
          src={gift.imageUrl}
          alt={gift.description}
          className="h-20 w-20 object-cover rounded-lg"
        />
      ) : (
        <GiftIcon className="w-6 h-6 text-emerald-600" />
      )}
      <div className="grow">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{gift.description}</span>
          <div className="text-gray-700 text-sm">
            <span>Cant:</span>
            <span className="ml-2 font-semibold">{gift.qty}</span>
          </div>
          <span className="text-gray-700 text-sm">Para {gift.name}</span>
        </div>
      </div>
      <button
        className="rounded border border-transparent text-gray-500 hover:text-rose-600 hover:bg-rose-100 px-2 py-1 disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        onClick={(e) => onDelete(gift)}
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default GiftItem;
