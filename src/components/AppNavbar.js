import i18next from 'i18next';
import { Navbar, Image, Button } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";

function AppNavbar() {
  return (
    <Navbar className="justify-content-end" variant="light" expand="sm">      
     <div>
      
     </div>
     <div className="d-flex justify-content-end">
      <Navbar.Brand>
      <Button variant={i18next.language === "it" ? "light" : "outline-light"} onClick={() => i18next.changeLanguage("it")}>
        <Image inline className="mx-auto " src={it} rounded width="20"/>
      </Button>        
      </Navbar.Brand>

      <Navbar.Brand>
      <Button variant={i18next.language === "en" ? "light" : "outline-light"} onClick={() => i18next.changeLanguage("en")}>
        <Image inline  src={en} rounded width="20"/>
      </Button>    
      </Navbar.Brand>
      </div>
    </Navbar>    

  );
}

export { AppNavbar };
