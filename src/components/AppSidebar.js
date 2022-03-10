import "./AppSidebar.css";
import { Nav, ListGroup, NavLink } from "react-bootstrap";
import {
  AboutMeBtn,
  SkillsBtn,
  PortfolioBtn,
  StrudentCardBtn,
  SocialsBtn,
} from "./SideBarButton";

function AppSidebar() {
  return (
    <div className = "ms-3">
      <Nav id="filters-nav">
        <ListGroup as="ul" id="filters-nav-list">
          
          <NavLink as="li" className="myContainer">
            <AboutMeBtn />
          </NavLink>
          <NavLink as="li" className="myContainer">
            <SkillsBtn />
          </NavLink>
          <NavLink as="li" className="myContainer">
            <PortfolioBtn />
          </NavLink>
          <NavLink as="li" className="myContainer">
            <StrudentCardBtn />
          </NavLink>
          <NavLink as="li" className="myContainer">
            <SocialsBtn />
          </NavLink>
        </ListGroup>
      </Nav>
    </div>
  );
}

export default AppSidebar;
