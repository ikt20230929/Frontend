import { Form, FormItem } from "./Form";
import { Header, HeaderItem } from "./components/Header";
import { render, Component } from "preact";


class App extends Component {
  render() {
    return [
      <Header title="Regisztráció" items={[
        <HeaderItem href="docs" text="Dokumentáció" />
      ]} />,
      <Form items={[
        <FormItem name="name" type="text" text="Név" required="true" />,
        <FormItem type="submit" text="Regisztráció" />
      ]} />
    ];
  }
}

render(<App />, document.getElementById("root"));
