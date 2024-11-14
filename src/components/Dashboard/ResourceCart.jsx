import React from "react";
import Image from "next/image";

import { penImage } from "@/constant";

const ResourceCart = ({ title, lists, noResource = false, red = false }) => {
  return (
    <div className="p-3 min-w-56 max-w-56 bg-white rounded-2xl">
      <div className="flex items-center gap-2  ">
        <div className="relative w-10">
          <Image className="w-full h-full" src={penImage} alt={title} />
        </div>
        <div>
          {!noResource && <h6 className="text-[10px]">Resources</h6>}
          <h1 className="text-[16px] font-bold">{title}</h1>
        </div>
      </div>

      <ul className="text-[10px] list-disc ps-5 pt-2">
        {lists.map((item, index) => {
          // Check if the item contains "Coming Soon"
          const parts = item.split("Coming Soon");
          return (
            <li key={index}>
              {parts[0]}
              {parts.length > 1 && (
                <span className={red ? `text-customRed` : "text-[#e2a161]"}>
                  Coming Soon
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResourceCart;
