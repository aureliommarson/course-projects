interface Card {
  img: string;
  theme: {
    id: number;
    name: string;
  };
  data: Date;
  title: string;
}

interface CardEventProps {
  card: Card;
}

export function CardEvent({ card }: CardEventProps) {
  return (
    <div className="bg-[#212121] flex flex-col w-[282px]">
      <img src={card.img} alt="Imagem do Card" />
      <div className="py-6 px-4 flex flex-col gap-2 ">
        <p className="bg-[#4A4949] rounded-[4px] py-2 px-3 w-max inline-block text-white font-orbitron text-sm font-bold leading-[1.2] text-transform: uppercase">
          {card.theme.name}
        </p>
        <p className="text-white font-worksans text-sm font-regular leading-[1.25]">
          {card.data.toLocaleDateString("pt-br")}
        </p>
        <h4 className="m-0 text-white font-orbitron text-3xl font-bold leading-[1.25]">
          {card.title}
        </h4>
      </div>
    </div>
  );
}
