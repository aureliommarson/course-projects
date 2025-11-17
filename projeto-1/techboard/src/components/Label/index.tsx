export function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-white text-[16px] leading-[1.2] font-normal"
    >
      {children}
    </label>
  );
}
