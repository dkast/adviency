"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

import Modal from "@/components/Modal";
import { Gift } from "@/types/gift";
import { XMarkIcon } from "@heroicons/react/20/solid";
interface GiftFormAddProps {
  onSubmit: (gift: Gift) => void;
}

const GiftFormAdd = ({ onSubmit }: GiftFormAddProps) => {
  const [open, setOpen] = useState(false);
  const [giftDescription, setGiftDescription] = useState<string>("");
  const [giftQty, setGiftQty] = useState<number>(1);

  const handleSubmit = () => {
    if (giftQty <= 0) {
      toast.error("Cantidad debe ser mayor a cero");
      return;
    }

    const newGift: Gift = {
      description: giftDescription,
      qty: giftQty,
    };

    onSubmit(newGift);
    setGiftDescription("");
    setGiftQty(1);
  };

  return (
    <>
      <div className="flex gap-2 bg-emerald-500 p-3 text-white">
        {/* <input
        type="text"
        placeholder="Describe tu regalo"
        className="block w-full border-0 border-b placeholder:text-emerald-400 border-emerald-300 bg-transparent focus:border-emerald-200 focus:ring-0 sm:text-sm"
        value={giftDescription}
        onChange={(e) => setGiftDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="0"
        value={giftQty}
        className="block w-24 border-0 border-b placeholder:text-emerald-400 border-emerald-300 bg-transparent focus:border-emerald-200 focus:ring-0 sm:text-sm"
        onChange={(e) => setGiftQty(parseInt(e.target.value))}
      />
      <button
        className="rounded-full border border-transparent bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-800 disabled:bg-emerald-500 disabled:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        type="button"
        onClick={handleSubmit}
        disabled={giftDescription === ""}
      >
        Añadir
      </button> */}
        <button
          className="rounded-full border border-transparent bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-800 disabled:bg-emerald-500 disabled:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          type="button"
          onClick={() => setOpen(true)}
        >
          Añadir regalo
        </button>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Agrega un regalo</h2>
          <button
            className="text-stone-500 hover:bg-stone-200 rounded-full"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="gift"
            >
              Regalo
            </label>
            <input
              type="text"
              placeholder="Calcetines"
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="imageURL"
            >
              Imagen
            </label>
            <input
              type="text"
              placeholder="http://imagen..."
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="user"
            >
              Para
            </label>
            <input
              type="text"
              placeholder="Destinatario"
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="qty"
            >
              Cantidad
            </label>
            <input
              type="number"
              placeholder="1"
              className="block w-1/4 rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
          </div>
          <div>
            <button className="w-full mt-2 rounded-lg border border-transparent shadow-lg shadow-emerald-300/60 bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-600 hover:text-white disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Guardar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GiftFormAdd;
