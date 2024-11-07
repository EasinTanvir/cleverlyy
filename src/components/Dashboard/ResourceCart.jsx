import React from "react";
import Image from "next/image";

import { penImage } from "@/constant";

const ResourceCart = ({ title = "Revision" }) => {
  return (
    <div className="p-3 min-w-60 max-w-60 ">
      <div className="flex items-center gap-2  ">
        <div className="relative w-10">
          <Image className="w-full h-full" src={penImage} alt={title} />
        </div>
        <div>
          <h6 className="text-[10px]">Chapterwise QP</h6>
          <h1 className="text-[16px] font-semibold">{title}</h1>
        </div>
      </div>

      <ul className="text-[10px] list-disc ps-5 pt-2">
        <li>Over 10000+ revision notes</li>
        <li>Flashcards: Coming Soon</li>
        <li>Flashcards: Coming Soon</li>
      </ul>
    </div>
  );
};

export default ResourceCart;
