import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row, Container, Image } from 'react-bootstrap';
import AppSidebar from "./components/AppSidebar";
import { AppNavbar } from './components/AppNavbar';

import proPic from './components/Images/myPhoto.jpg' 


function App() {
  return (
    <Container fluid className="App m-0 p-0">
      <div id="body" class="pt-3 px-3">
      <AppNavbar/>
        <Row>
          <Col md={2}>
            <AppSidebar/>
          </Col>
          <Col md={10}>
            <Image inline className="mx-auto d-none d-sm-block" src={proPic} roundedCircle width = "200" />
            <div className = "mt-3 pt-5">
              <p>Via silvio pellico 1</p>
              <p>Via silvio pellico 1</p>
            </div>

            <div className = "mt-3 pt-5 d-flex">
              <h2>Su di me</h2>
            </div>


            <div className = "mt-3 pt-5 d-flex">
              <h2>Mie Passioni</h2>
            </div>
            
            
          </Col>
        </Row>
        
      </div>
    </Container>
  );
}

export default App;
