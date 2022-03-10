import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import AppSidebar from "./components/AppSidebar";
import { AppNavbar } from "./components/AppNavbar";
import { AboutMePage } from "./components/AboutMe";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



function App() {
  return (
    <Router >
      <Container fluid className="AppBk m-0 p-0">
        <div id="body" class="pt-3 px-3">
          <AppNavbar />
          <Row>
            <Col md={3}>
              <AppSidebar/>
            </Col>

            <Switch>
              <Col md={7}>

              <h2><b>About me</b></h2>

              <Route exact path="/" render={() => (
                <Redirect to='/AboutMe' />
              )} />

              <Route path="/AboutMe" render={() => (
                  <AboutMePage/>                  
              )} />

              <Route path="/Skills" render={() => (
                  <h2>testa</h2>                
              )} />
                
                
              </Col>
            </Switch>
          </Row>
        </div>
      </Container>
    </Router>
  );
}

export default App;
