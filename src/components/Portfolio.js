import { Card, Placeholder, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import pr0 from "./Images/Portfolio/IG_blender.jpg";
import pr1 from "./Images/Portfolio/IG_openGL.jpg";
import pr2 from "./Images/Portfolio/RV.jpg";
import pr3 from "./Images/Portfolio/WEBAPP.jpg";
import pr4 from "./Images/Portfolio/ASE.jpg";
import pr5 from "./Images/Portfolio/SWENG.png";

const projects = [
  {propic: pr0, data: "Mar 2022", nome: "Informatica Grafica: Blender", breveDescrizione: "Modellazione ed il rendering di scene 3D statiche in Blender", page : true},
  {propic: pr1, data: "Mar 2022", nome: "Informatica Grafica: OpenGL", breveDescrizione: "Realizzazione di applicazione interattiva in openGL", page : true},
  {propic: pr2, data: "Feb 2022", nome: "Realtà Virtuale", breveDescrizione: "Applicazione desktop di natura didattica per scoprire il complesso e affascinante mondo delle formiche a partire dal loro punto di vista", page : true},
  {propic: pr3, data: "Jul 2021", nome: "Applicazione Web", breveDescrizione: "Sito di gestione di Surveys (Questionari) in React Bootstrap, gestendo sia parte di fontend sia parte backend", page : true},
  {propic: pr4, data: "Jan 2021", nome: "Architetture degli elaboratori", breveDescrizione: "Applicazione interattiva per emulatore Keil uVision della scheda LandTiger", page : true},
  {propic: pr5, data: "Jun 2021", nome: "Progetto di ingegneria del Software", breveDescrizione: "Ezshop: applicazione per piccoli negozi per supportare proprietario e manager", page : false}
]

function PortfolioPage(props) {
  props.updateTitle("Portfolio");
  return (
    <div className="mt-5 pt-4">
      <div className="d-flex flex-wrap justify-content-around">
        {projects.map((p) => <AddProject project={p}/>)}
        <div className="d-flex justify-content-around mt-5 pt-5">

        <div className="m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="danger" xs={6}>
              Incoming
            </Placeholder.Button>
          </Card.Body>
        </Card>
        </div>
      </div>
      </div>
    </div>
  );
}


function AddProject(props)
{
  return(
      <div className="m-3">
      <small>{props.project.data}</small>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.project.propic} />
          <Card.Body>
            <Card.Title>{props.project.name}</Card.Title>
            <Card.Text>
            {props.project.breveDescrizione}             
            </Card.Text>
            <div style={{ "textAlign": "center" }}>
              {props.project.page ? <Button variant="danger">Vai</Button> : <></>} 
            </div>            
          </Card.Body>
        </Card>
      </div>
  )
}

export { PortfolioPage };
