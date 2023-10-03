import { Form, FormItem, FormItemSet } from "./Form";
import { Header, HeaderItem } from "./components/Header";
import { render, Component } from "preact";

function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  const passwordArray = new Uint8Array(length);
  const charsetLength = charset.length;

  window.crypto.getRandomValues(passwordArray);

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[passwordArray[i] % charsetLength];
  }

  return password;
}

class App extends Component {
  render() {    
    return [
      <Header title="Regisztráció" items={[
        <HeaderItem href="docs" text="Dokumentáció" />
      ]} />,
      <Form class="container mx-auto" items={[
        <div class="space-y-2">
          <FormItem name="name" type="text" text="Név" pattern="^[A-Z][a-zA-Z]*$" required="true" />
          <FormItem name="field" type="text" text="Foglalkozás" required="true" />
          <FormItem name="email" type="email" text="Email (.com/.hu/.net/.edu)" pattern=".*(\.com|\.hu|\.net|\.edu)" required="true" />

          <FormItemSet class="join" items={[
              <FormItem name="password" id="password" class="border-none join-item" type="password" text="Jelszó" required="true" />,
              <FormItem type="button" onclick={() => {
                document.getElementById("password").value = generateRandomPassword(16);
              }} class="btn-ghost no-animation join-item" text="Generálás" />
          ]} />
        </div>,

        <FormItemSet title="Életkor" items={[
          <table class="join gap-2">
            <FormItem name="agegroup" type="radio" text="18-20" required="true" />
            <FormItem name="agegroup" type="radio" text="25-30" required="true" />
            <FormItem name="agegroup" type="radio" text="21-24" required="true" />
            <FormItem name="agegroup" type="radio" text="30+" required="true" />
          </table>
        ]} />,

        <FormItemSet title="Nem" items={[
          <table class="join gap-10 flex justify-center items-center">
            <FormItem name="gender" type="radio" text="Férfi" required="true" />
            <FormItem name="gender" type="radio" text="Nő" required="true" />
          </table>
        ]} />,

        <FormItemSet title="Ágazat" items={[
          <table class="grid grid-cols-2 gap-x-12">
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
          </table>
        ]} />,

        <FormItem type="submit" class="mt-2" text="Regisztráció" />,
      ]} />
    ];
  }
}

render(<App />, document.getElementById("root"));
