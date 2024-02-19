import i18next from 'i18next';
import {Navbar, Image, Button, NavLink} from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";
import {AboutMeBtn, PortfolioBtn, ProfessionalCardBtn, SkillsBtn, StudentCardBtn} from "./SideBarButton";

function AppNavbar(props) {
  return (
    <Navbar className="d-flex justify-content-end" variant="light" expand="sm">      
     <div className="d-sm-none d-flex justify-content-around">
         <NavLink as="li">
             <AboutMeBtn title={props.title}/>
         </NavLink>
         <NavLink as="li">
             <SkillsBtn title={props.title}/>
         </NavLink>
         <NavLink as="li">
             <PortfolioBtn title={props.title}/>
         </NavLink>
         <NavLink as="li">
             <ProfessionalCardBtn title={props.title}/>
         </NavLink>
         <NavLink as="li">
             <StudentCardBtn title={props.title}/>
         </NavLink>   
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
