import { useTranslation } from "react-i18next";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import AppSidebar from "./components/AppSidebar";
import { AppNavbar } from "./components/AppNavbar";
import { AboutMePage } from "./components/AboutMe";
import { SkillsPage } from "./components/Skills";
import { PortfolioPage } from "./components/Portfolio";
import { StudentCardPage } from "./components/StudentCard";
import { SocialsPage } from "./components/Socials";
import { ProjectPage } from "./components/Project";
import API from "./components/API";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import projectsThumbnail_en from "./components/File/projectsThumbnails_en.json";
import projects_en from "./components/File/projects_en.json";
import projectsThumbnail_it from "./components/File/projectsThumbnails_it.json";
import projects_it from "./components/File/projects_it.json";
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  const [title, setTitle] = useState("AboutMe");  
  const [data, setData] = useState([]);  
  const [exams, setExams] = useState([]);     

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };  
  
  useEffect( () => {
    API.getData()
      .then(d => setData(d))               
  }, [])

  
  // mount
  useEffect(() => {       
    if(data.length !== 0)  
      API.pushViewer(data.data)   
      //set language by data? 
      /*
        data.country_code == "it" ? i18next.changeLanguage("it") : i18next.changeLanguage("en");
      */
     
  }, [data.length]);

  
  return (
    <Router >
      <Container fluid className="AppBk m-0 p-0">
        <div id="body" className="pt-3 px-3">
          <AppNavbar />
          <Row>
            <Col xs={3}>
              <AppSidebar title={title}/>
            </Col>

            <Switch>
              <Col xs={7}>

              <h2><b>{title}</b></h2>             

              <Route exact path="/" render={() => (
                <Redirect to='/AboutMe' />
              )} />

              <Route path="/AboutMe" render={() => (
                  <AboutMePage t={t} updateTitle={updateTitle}/>                  
              )} />

              <Route path="/Skills" render={() => (
                  <SkillsPage t={t} updateTitle={updateTitle}/>              
              )} />

              <Route exact path="/Portfolio" render={() => (
                  <PortfolioPage t={t} updateTitle={updateTitle} projects ={i18next.language == "en" ? projectsThumbnail_en : projectsThumbnail_it}/>              
              )} />

              <Route path="/StudentCard" render={() => (
                  <StudentCardPage t={t} updateTitle={updateTitle} exams={exams} setExams={setExams}/>              
              )} />

              <Route path="/Socials" render={() => (
                  <SocialsPage t={t} updateTitle={updateTitle}/>              
              )} />

              <Route exact path="/Portfolio/:ID" render={({ match }) => (               
                <ProjectPage t={t} updateTitle={updateTitle} project={i18next.language == "en" ? projects_en.filter((p) => p.id === match.params.ID)[0] : projects_it.filter((p) => p.id === match.params.ID)[0]}/>
              )}/>         
                
              </Col>
              <Route>
                <Redirect to='/AboutMe'/>
              </Route>
            </Switch>
          </Row>
        </div>
      </Container>
    </Router>
  );
}

export default App;
