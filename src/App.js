import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from 'react';
import AppSidebar from "./components/AppSidebar";
import { AppNavbar } from "./components/AppNavbar";
import { AboutMePage } from "./components/AboutMe";
import { SkillsPage } from "./components/Skills";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  const [title, setTitle] = useState("AboutMe");

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };


  return (
    <Router >
      <Container fluid className="AppBk m-0 p-0">
        <div id="body" class="pt-3 px-3">
          <AppNavbar />
          <Row>
            <Col md={3}>
              <AppSidebar title={title}/>
            </Col>

            <Switch>
              <Col md={7}>

              <h2><b>{title}</b></h2>

              <Route exact path="/" render={() => (
                <Redirect to='/AboutMe' />
              )} />

              <Route path="/AboutMe" render={() => (
                  <AboutMePage updateTitle={updateTitle}/>                  
              )} />

              <Route path="/Skills" render={() => (
                  <SkillsPage updateTitle={updateTitle}/>              
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
