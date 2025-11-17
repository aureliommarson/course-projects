export function EntryField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="rounded-[8px] bg-transparent border-[1px] border-solid border-[#4A4949] leading-[1.2] text-white text-[16px] py-2 px-4 font-normal"
      {...props}
    />
  );
}
