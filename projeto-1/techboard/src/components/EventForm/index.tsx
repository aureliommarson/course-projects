import { EntryField } from "../EntryField";
import { FormField } from "../FormField";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { DropdownList } from "../DropdownList";
import { Button } from "../Button";

interface ThemeType {
  id: number;
  name: string;
}

interface EventFormProps {
  themes: ThemeType[];
  onSubmit?: (event: any) => void;
}

export function EventForm({ themes, onSubmit }: EventFormProps) {
  function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const form = {
      img: formData.get("img"),
      theme: themes.find(
        (theme: ThemeType) => theme.id == Number(formData.get("theme"))
      ),
      data: new Date(formData.get("eventDate") as string),
      title: formData.get("nameEvent"),
    };

    onSubmit?.(form);
  }
  return (
    <form
      className="lg:w-[384px] w-[330px] mx-auto font-worksans"
      onSubmit={formSubmitted}
    >
      <div className="bg-[#212121] px-7 rounded-2xl my-16 mx-auto">
        <TitleForm>Preencha para criar um evento:</TitleForm>
        <div className="flex flex-col gap-4">
          <FormField>
            <Label htmlFor="name">Qual o nome do evento?</Label>
            <EntryField
              type="text"
              id="name"
              name="nameEvent"
              placeholder="Summer dev hits"
            />
          </FormField>
          <FormField>
            <Label htmlFor="name">Qual o endereço da imagem de capa?</Label>
            <EntryField
              type="text"
              name="img"
              id="img"
              placeholder="Cole a URL aqui.."
            />
          </FormField>
          <FormField>
            <Label htmlFor="eventDate">Data do evento</Label>
            <EntryField type="date" id="eventDate" name="eventDate" />
          </FormField>
          <Label htmlFor="DropdownList">Tema do evento</Label>
          <DropdownList themes={themes} id="theme" name="theme" />
        </div>
        <div className="py-8 text-center">
          <Button>Criar Evento</Button>
        </div>
      </div>
    </form>
  );
}
