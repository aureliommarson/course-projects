export function TitleForm({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white font-normal text-[20px] leading-[1.25] py-6">
      {children}
    </h2>
  );
}
