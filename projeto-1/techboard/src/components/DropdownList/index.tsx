import React from "react";

interface DropdownListProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function DropdownList({ children, ...props }: DropdownListProps) {
  return (
    <select
      className="rounded-[8px] border-[1px] border-solid border-[#4A4949] leading-[1.2] text-white text-[16px] py-2 px-4 font-normal"
      {...props}
    >
      <option value="">Selecione</option>
      {children}
    </select>
  );
}
