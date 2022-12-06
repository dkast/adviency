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

  return (
    <>
      <GiftFormAdd onClick={handleAdd} />
      {gifts ? (
        <div>
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
    </>
  );
};

export default GiftList;
