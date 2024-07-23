"use client";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { Doc } from "../../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function ProductCard(props: { product: Doc<"products"> }) {
  const getImageUrl = useQuery(api.products.getProductFeaturedImage, {
    featuredImageId: props.product.featuredImage,
  });

  return (
    <div className="flex flex-col gap-2 w-52">
      <div className="size-52 rounded-lg bg-gray-50 overflow-hidden">
        <img
          src={getImageUrl ? getImageUrl : ""}
          alt={props.product.name}
          width={208}
          height={208}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-3">{props.product.name}</h3>
        <span className="flex items-center text-yellow-600">
          {props.product.stars}
          <StarIcon />
        </span>
        <p className="font-bold">{props.product.price} USD</p>
        <Button variant={"outline"} className="border-black">
          Comprar en Amazon
        </Button>
      </div>
    </div>
  );
}
