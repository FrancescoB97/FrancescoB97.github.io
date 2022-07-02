import i18next from 'i18next';
import { Navbar, Image, Button } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";

function AppNavbar() {
  return (
    <Navbar className="justify-content-end" variant="light" expand="sm">       
      <Navbar.Brand>
      <Button variant={i18next.language === "it" ? "light" : "outline-light"} onClick={() => i18next.changeLanguage("it")}>
        <Image inline className="mx-auto d-none d-sm-block" src={it} rounded width="20"/>
      </Button>        
      </Navbar.Brand>

      <Navbar.Brand>
      <Button variant={i18next.language === "en" ? "light" : "outline-light"} onClick={() => i18next.changeLanguage("en")}>
        <Image inline className="mx-auto d-none d-sm-block" src={en} rounded width="20"/>
      </Button>    
      </Navbar.Brand>
    </Navbar>    
  );
}

export { AppNavbar };
