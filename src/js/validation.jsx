import { render } from "preact";
import { Dialog } from "./components/Dialog";

function isNullOrWhitespace( input ) {
    return !input || !input.trim();
}

function isValidEmail(email) {
  const parts = email.split('@');
    if (parts.length === 2) {
      const domain = parts[1].toLowerCase();
            if (domain.endsWith('.com') || domain.endsWith('.hu') || domain.endsWith('.net') || domain.endsWith('.edu')) {
          return true;
      }
  }
  return false;
}
  
export function formValidate(form) {
    let success = true;
    let message;
    let title;
  
    if(!/^[A-Z][^0-9]*$/.test(form.get("name"))) {
      success = false;
      message += "A megadott név nem felel meg a követelményeknek!\n";
    }
  
    if(isNullOrWhitespace(form.get("agegroup"))) {
      success = false;
      message += "Ki kell választania egy korcsoportot!\n";
    }

    if(!isValidEmail(form.get("email"))) {
      success = false;
      message += "Az email cím nem felel meg a követelményeknek!\n";
    }
  
    if(success) {
      title = "Sikeres regisztráció!";
      message = `Név: ${form.get("name")}
Foglalkozás: ${form.get("profession")}
Email: ${form.get("email")}
Jelszó: ${form.get("password")}
Életkor: ${form.get("agegroup")}
Nem: ${form.get("gender")}
Ágazat: ${form.get("field")}`;
      document.getElementsByTagName("form")[0].reset();
    }else{
      title = "Sikertelen regisztráció!"
      message += '\nTovábbi információért olvassa el a <a href="./docs/Felhasználóknak/use">dokumentációt</a>.';
    }
  
    render(<Dialog id="status" title={title} text={message} />, document.body);
    document.getElementById('status').showModal()
  }