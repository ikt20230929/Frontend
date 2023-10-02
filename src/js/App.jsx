import { Form, FormItem } from "./Form";
import { Header, HeaderItem } from "./components/Header";
import { render, Component } from "preact";

class App extends Component {
  render() {
    return [
      <Header title="Regisztráció" items={[
        <HeaderItem href="docs" text="Dokumentáció" />
      ]} />,
      <Form class="ml-5" items={[
        <FormItem name="name" class="mb-5" type="text" text="Név" required="true" />,
        <div class="join">
          <FormItem name="agegroup" type="radio" text="18-20" required="true" />
          <FormItem name="agegroup" type="radio" text="25-30" required="true" />
          <FormItem name="agegroup" type="radio" text="21-24" required="true" />
          <FormItem name="agegroup" type="radio" text="30+" required="true" />
        </div>,
        <FormItem name="field" class="mt-5 mb-5" type="text" text="Foglalkozás" required="true" />,
        <div class="grid grid-cols-2">
          <FormItem name="profession" type="radio" text="Bányászat" />
          <FormItem name="profession" type="radio" text="Egészségügy" />
          <FormItem name="profession" type="radio" text="Építőipar" />
          <FormItem name="profession" type="radio" text="Élelmiszeripar" />
          <FormItem name="profession" type="radio" text="Épületgépészet" />
          <FormItem name="profession" type="radio" text="Honvédelem" />
          <FormItem name="profession" type="radio" text="Gépészet" />
          <FormItem name="profession" type="radio" text="Kereskedelem" />
          <FormItem name="profession" type="radio" text="Oktatás" />
          <FormItem name="profession" type="radio" text="Szociális" />
        </div>,
        <FormItem type="submit" class="mt-5" text="Regisztráció" />,
      ]} />
    ];
  }
}

render(<App />, document.getElementById("root"));
