import { Form, FormItem } from "./Form";
import { Header } from "./components/Header";
import { render, Component } from "preact";


class App extends Component {
  render() {
    return [
      <Header title="Regisztráció" />,
      <Form items={[
        <FormItem type="text" text="Név" required="true" />,
        <FormItem type="submit" text="Regisztráció" />
      ]} />
    ];
  }
}

render(<App />, document.getElementById("root"));
