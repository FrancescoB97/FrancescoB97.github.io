import "./SideBarButton.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';



function AboutMeBtn(props) {  
  return (
    <>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            About me
          </Tooltip>
        )}
        placement="bottom">
      <Link to="/"><Button variant={props.title === "AboutMe" ?  "dark" : "outline-dark"} id="btn-style"  >
      <i class="bi bi-person-vcard-fill h1"></i>
      </Button></Link></OverlayTrigger>
    </>
  );
}

function SkillsBtn(props) {
  return (
    <>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Skills
          </Tooltip>
        )}
        placement="bottom">
      <Link to="/Skills"><Button variant={props.title === "Skills" ?  "dark" : "outline-dark"} id="btn-style">
        <i class="bi bi-joystick h1"></i>     
      </Button></Link></OverlayTrigger>
    </>
  );
}

function PortfolioBtn(props) {
  return (
    <>
    <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Portfolio
          </Tooltip>
        )}
        placement="bottom">
      <Link to="/Portfolio"><Button variant={props.title === "Portfolio" ?  "dark" : "outline-dark"} id="btn-style">        
        <i class="bi bi-folder h1"></i>    
      </Button></Link></OverlayTrigger>
    </>
  );
}

function ProfessionalCardBtn(props) {
    return (
        <>
            <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                    <Tooltip {...props}>
                        Professional Card
                    </Tooltip>
                )}
                placement="bottom">
                <Link to="/ProfessionalCard"><Button variant={props.title === "Professional Card" ?  "dark" : "outline-dark"} id="btn-style">
                  <i class="bi bi-suitcase-lg h1"></i>                       
                </Button></Link></OverlayTrigger>
        </>
    );
}

function StudentCardBtn(props) {
  return (
    <>
    <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Student Card
          </Tooltip>
        )}
        placement="bottom">
      <Link to="/StudentCard"><Button variant={props.title === "Student Card" ?  "dark" : "outline-dark"} id="btn-style">
        <i class="bi bi-mortarboard h1"></i>          
      </Button></Link></OverlayTrigger>
    </>
  );
}

export { AboutMeBtn, SkillsBtn, PortfolioBtn, StudentCardBtn, ProfessionalCardBtn };
