import { Navbar, Image } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";

function AppNavbar() {
  return (
    <Navbar className="justify-content-end" variant="light" expand="sm">       
      <Navbar.Brand>
        <Image inline className="mx-auto d-none d-sm-block" src={it} rounded width="20"/>
      </Navbar.Brand>

      <Navbar.Brand>
       <Image inline className="mx-auto d-none d-sm-block" src={en} rounded width="20"/>
      </Navbar.Brand>
    </Navbar>    
  );
}

export { AppNavbar };
