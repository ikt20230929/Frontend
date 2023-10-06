import { KeyRound, Mail, User, Briefcase } from "lucide-preact";
import { Form, FormItem, FormItemSet } from "./components/Form";
import { Header, HeaderItem } from "./components/Header";
import { render, Component } from "preact";
import { generateRandomPassword } from "./passwordGenerator";
import { formValidate } from "./validation";

class App extends Component {
  render() {    
    return [
      <Header title="Regisztráció" items={[
        <HeaderItem href="docs" text="Dokumentáció" />
      ]} />,
      <Form class="container mx-auto" onsubmit={(e) => {
        e.preventDefault();
        formValidate(new FormData(e.target));
      }} items={[
        <div class="space-y-2">
          <FormItemSet class="join flex justify-center items-center" items={[
            <User class="ml-3" />,
            <FormItem name="name" autocomplete="name" type="text" text="Név" />
          ]} />

          <FormItemSet class="join flex justify-center items-center" items={[
            <Briefcase class="ml-3" />,
            <FormItem name="profession" autocomplete="organization-title" type="text" text="Foglalkozás" required="true" />
          ]} />


          <FormItemSet class="join flex justify-center items-center" items={[
            <Mail class="ml-3" />,
            <FormItem name="email" autocomplete="email" type="email" text="Email (.com/.hu/.net/.edu)" required="true"/>
          ]} />

          <FormItemSet class="join flex justify-center items-center" items={[
              <KeyRound class="ml-3 w-12" />,
              <FormItem name="password" autocomplete="new-password" id="password" type="password" text="Jelszó" required="true" />,
              <FormItem type="button" onclick={() => {
                document.getElementById("password").value = generateRandomPassword(16);
              }} class="btn-ghost no-animation" text="Generálás" />
          ]} />
        </div>,

        <FormItemSet title="Életkor" items={[
          <div class="join gap-2">
            <FormItem name="agegroup" type="radio" text="18-20" />
            <FormItem name="agegroup" type="radio" text="25-30" />
            <FormItem name="agegroup" type="radio" text="21-24" />
            <FormItem name="agegroup" type="radio" text="30+" />
          </div>
        ]} />,

        <FormItemSet title="Nem" items={[
          <div class="join gap-10 flex justify-center items-center">
            <FormItem name="gender" type="radio" text="Férfi" required="true" />
            <FormItem name="gender" type="radio" text="Nő" required="true" />
          </div>
        ]} />,

        <FormItemSet title="Ágazat" items={[
          <div class="grid grid-cols-2 gap-x-12">
            <FormItem name="field" type="radio" text="Bányászat" required="true" />
            <FormItem name="field" type="radio" text="Egészségügy" required="true" />
            <FormItem name="field" type="radio" text="Építőipar" required="true" />
            <FormItem name="field" type="radio" text="Élelmiszeripar" required="true" />
            <FormItem name="field" type="radio" text="Épületgépészet" required="true" />
            <FormItem name="field" type="radio" text="Honvédelem" required="true" />
            <FormItem name="field" type="radio" text="Gépészet" required="true" />
            <FormItem name="field" type="radio" text="Kereskedelem" required="true" />
            <FormItem name="field" type="radio" text="Oktatás" required="true" />
            <FormItem name="field" type="radio" text="Szociális" required="true" />
          </div>
        ]} />,

        <FormItem type="submit" class="mt-2" text="Regisztráció" />,
      ]} />
    ];
  }
}

render(<App />, document.getElementById("root"));