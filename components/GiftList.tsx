"use client";

import React from "react";

import { Gift } from "@/types/gift";

interface GiftListProps {
  gifts: Gift[];
}

const GiftList = ({ gifts }: GiftListProps) => {
  return (
    <ul>
      {gifts.map((gift) => {
        return <li key={gift.description}>{gift.description}</li>;
      })}
    </ul>
  );
};

export default GiftList;
