import React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="cursor-pointer hover:opacity-80 font-semibold text-[#212121] bg-[#17D9B1] text-[16px] py-2 px-4 rounded-[8px] border-0 leading-[1.2]">
      {children}
    </button>
  );
}
