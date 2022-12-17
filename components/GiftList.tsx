"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import GiftIcon from "@heroicons/react/24/outline/GiftIcon";

import GiftFormAdd from "@/components/GiftFormAdd";
import GiftItem from "@/components/GiftItem";
import { Gift } from "@/types/gift";
import GiftFormEdit from "@/components/GiftFormEdit";

// interface GiftListProps {
//   data: Gift[];
// }

const GiftList = () => {
  const [gifts, setGifts] = useState<Gift[]>(() => {
    const data = JSON.parse(localStorage.getItem("gifts")!);
    return data || [];
  });

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

  useEffect(() => {
    const gitfs = JSON.parse(localStorage.getItem("gifts")!);
    if (gifts) {
      setGifts(gifts);
    }
  }, []);

  const handleAdd = (gift: Gift) => {
    const found = gifts.some((g) => {
      return g.description === gift.description;
    });

    if (found) {
      toast("Regalo ya existe", {
        icon: "🎁",
      });
      return;
    }

    setGifts((gifts) => [...gifts, gift]);
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

  const handleEdit = (gift: Gift) => {};

  return (
    <>
      <motion.div
        layout
        transition={{ duration: 0.2 }}
        className="rounded-xl bg-sky-50 overflow-clip shadow-lg shadow-sky-500/60 z-50 min-w-[20rem]"
      >
        <div className="bg-emerald-500 text-center flex items-center">
          <h1 className="text-white p-4 text-3xl flex items-center gap-4">
            {/* <GiftIcon className="h-7 w-7" /> */}
            Lista de Regalos
          </h1>
          <GiftFormAdd onSaveGift={handleAdd} />
        </div>
        <motion.div className="flex flex-col gap-8 pt-8">
          {gifts && gifts.length > 0 ? (
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div className="flex flex-col gap-2 px-2">
                {gifts.map((gift) => {
                  return (
                    <GiftItem
                      key={gift.description}
                      gift={gift}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                    />
                  );
                })}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex flex-col justify-center items-center text-gray-500">
              <GiftIcon className="h-6 w-6" />
              <span>No hay regalos</span>
            </div>
          )}
          <button
            type="button"
            className="rounded-lg m-1 border border-transparent bg-rose-200 text-rose-800 px-3 py-2 hover:bg-rose-600 hover:text-white disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            onClick={handleDeleteAll}
          >
            Borrar todos
          </button>
        </motion.div>
      </motion.div>
      <GiftFormEdit onSaveGift={handleAdd} />
    </>
  );
};

export default GiftList;
