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
    <main className="bg-[#06151A] min-h-screen pb-10">
      <Header />
      <Banner />
      <EventForm themes={themes} onSubmit={addEvent} />

      <section className="w-full">
        {themes.map((theme) => {
          const themeCards = cards.filter((card) => card.theme.id === theme.id);

          if (themeCards.length === 0) return null;

          return (
            <div key={theme.id} className="mb-10 px-6 md:px-12">
              <div className="mt-4">
                <Theme theme={theme} />
              </div>

              <div className="flex flex-col gap-6 mt-4 md:hidden">
                {themeCards.map((card, index) => (
                  <div key={index} className="w-full max-w-xs mx-auto">
                    <CardEvent card={card} />
                  </div>
                ))}
              </div>

              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4 items-stretch">
                {themeCards.map((card, index) => (
                  <CardEvent key={index} card={card} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
