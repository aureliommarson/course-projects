import { useState } from "react";
import { Banner } from "./components/Banner";
import { CardEvent } from "./components/CardEvent";
import { EventForm } from "./components/EventForm";
import { Header } from "./components/Header";
import { Theme } from "./components/Theme";
import "./App.css";

interface ThemeType {
  id: number;
  name: string;
}

interface CardType {
  img: string;
  theme: ThemeType;
  data: Date;
  title: string;
}

const initialThemes: ThemeType[] = [
  { id: 1, name: "front-end" },
  { id: 2, name: "back-end" },
  { id: 3, name: "devops" },
  { id: 4, name: "inteligência artificial" },
  { id: 5, name: "data-science" },
  { id: 6, name: "cloud" },
];

const initialCards: CardType[] = [
  {
    img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
    theme: initialThemes[0],
    data: new Date(),
    title: "Mulheres no Front",
  },
];

function App() {
  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [themes] = useState<ThemeType[]>(initialThemes);

  function addEvent(event: CardType) {
    setCards((prev) => [...prev, event]);
  }

  return (
    <main className="bg-[#06151A]">
      <Header />
      <Banner />
      <EventForm themes={themes} onSubmit={addEvent} />
      <section className="w-[1000px] m-0 mx-auto">
        {themes.map((theme) => (
          <div key={theme.id} className="mb-6">
            <Theme theme={theme} />
            <div className="flex gap-3 flex-wrap">
              {cards
                .filter((card) => card.theme.id === theme.id)
                .map((card, index) => (
                  <CardEvent card={card} key={`${theme.id}-${index}`} />
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
