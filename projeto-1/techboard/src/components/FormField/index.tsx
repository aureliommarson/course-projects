export function FormField({ children }: { children: React.ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
      {children}
    </fieldset>
  );
}
