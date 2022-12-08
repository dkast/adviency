"use client";

import React, { useEffect, useState } from "react";

import { Gift } from "@/types/gift";
import GiftFormAdd from "@/components/GiftFormAdd";
import GiftItem from "@/components/GiftItem";

interface GiftListProps {
  data: Gift[];
}

const GiftList = ({ data }: GiftListProps) => {
  const [gifts, setGifts] = useState<Gift[]>(data);

  useEffect(() => {
    setGifts(data);
  }, [data]);

  const handleAdd = (giftDescription: string) => {
    const newGift: Gift = {
      description: giftDescription,
    };
    setGifts((gifts) => [...gifts, newGift]);
  };

  const handleDelete = (gift: Gift) => {
    setGifts(
      gifts.filter((g) => {
        return g.description !== gift.description;
      })
    );
  };

  const handleDeleteAll = () => {
    setGifts([]);
  };

  return (
    <div className="flex flex-col gap-8">
      <GiftFormAdd onClick={handleAdd} />
      {gifts && gifts.length > 0 ? (
        <div className="flex flex-col gap-2 px-2">
          {gifts.map((gift) => {
            return (
              <GiftItem
                key={gift.description}
                gift={gift}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      ) : (
        <span>No hay regalos</span>
      )}
      <button
        type="button"
        className="rounded-lg m-1 border border-transparent bg-rose-200 text-rose-800 px-3 py-2 hover:bg-rose-600 hover:text-white disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        onClick={handleDeleteAll}
      >
        Borrar todos
      </button>
    </div>
  );
};

export default GiftList;
