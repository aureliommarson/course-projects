import { EntryField } from "../EntryField";
import { FormField } from "../FormField";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { DropdownList } from "../DropdownList";
import { Button } from "../Button";

export function EventForm() {
  return (
    <form className="lg:w-[384px] w-[330px]  mx-auto font-worksans">
      <div className="bg-[#212121] px-7 rounded-2xl my-16 mx-auto">
        <TitleForm>Preencha para criar um evento:</TitleForm>
        <div className="flex flex-col gap-4">
          <FormField>
            <Label htmlFor="name">Qual o nome do evento?</Label>
            <EntryField type="text" id="name" placeholder="Summer dev hits" />
          </FormField>
          <FormField>
            <Label htmlFor="eventDate">Data do evento</Label>
            <EntryField type="date" id="eventDate" />
          </FormField>
          <Label htmlFor="DropdownList">Tema do evento</Label>
          <DropdownList id="DropdownList"></DropdownList>
        </div>
        <div className="py-8 text-center">
          <Button>Criar Evento</Button>
        </div>
      </div>
    </form>
  );
}
