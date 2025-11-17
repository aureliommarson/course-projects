export function Theme({ theme }: { theme: { id: number; name: string } }) {
  return (
    <h3 className="font-orbitron text-white font-semibold text-transform: uppercase; text-3xl leading-[1.25] tracking-[0.1em] pb-6">
      {theme.name}
    </h3>
  );
}
