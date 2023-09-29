import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

// Initialize htm with Preact
const html = htm.bind(h);

function App (props) {
   return html`<h1 class="text-3xl font-bold underline">Hello world!</h1>`;
}

render(html`<${App} name="World" />`, document.body);