interface DropdownListProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  themes?: { id: number; name: string }[];
}

export function DropdownList({ themes, children, ...rest }: DropdownListProps) {
  return (
    <select
      className="rounded-[8px] border-[1px] border-solid border-[#4A4949] leading-[1.2] text-white text-[16px] py-2 px-4 font-normal"
      {...rest}
      name="theme"
    >
      <option className="bg-[#4A4949] cursor-pointer" value="">
        Selecione uma opção
      </option>
      {themes?.map((theme) => (
        <option
          className="bg-[#4A4949] text-worksans"
          key={theme.id}
          value={theme.id}
        >
          {theme.name}
        </option>
      ))}
      {children}
    </select>
  );
}
