"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { XMarkIcon } from "@heroicons/react/20/solid";

import Modal from "@/components/Modal";
import { Gift, schema } from "@/types/gift";
import { useForm } from "react-hook-form";

interface GiftFormEditProps {
  onSaveGift: (gift: Gift) => void;
}

const GiftFormEdit = ({ onSaveGift }: GiftFormEditProps) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Gift>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Gift) => {
    onSaveGift(data);
    reset();
    setOpen(false);
  };

  return (
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="description"
            >
              Regalo
            </label>
            <input
              type="text"
              placeholder="Calcetines"
              {...register("description")}
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
            <span className="text-red-500 text-sm mt-1">
              {errors.description?.message}
            </span>
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
              {...register("imageUrl")}
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
            <span className="text-red-500 text-sm mt-1">
              {errors.imageUrl?.message}
            </span>
          </div>
          <div>
            <label
              className="block text-stone-600 font-medium text-sm mb-1"
              htmlFor="name"
            >
              Para
            </label>
            <input
              type="text"
              placeholder="Destinatario"
              {...register("name")}
              className="block w-full rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
            <span className="text-red-500 text-sm mt-1">
              {errors.name?.message}
            </span>
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
              placeholder=""
              {...register("qty", { valueAsNumber: true })}
              className="block w-1/4 rounded-md border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
            <span className="text-red-500 text-sm mt-1">
              {errors.qty?.message}
            </span>
          </div>
          <div>
            <button
              disabled={!isValid}
              type="submit"
              className="w-full mt-2 rounded-lg border border-transparent shadow-lg shadow-emerald-300/60 bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-600 hover:text-white disabled:bg-stone-200 disabled:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default GiftFormEdit;
