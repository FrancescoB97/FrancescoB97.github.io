import "./Portfolio.css";
import { Card, Placeholder, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

function PortfolioPage(props) {
  useEffect(() => {
    props.updateTitle("Portfolio");
  }, []); 
  
  return (
    <div className="mt-5 pt-4">
      <AddThesis t={props.t} project={props.projects[0]}></AddThesis>
      <div className="d-flex flex-wrap justify-content-around">
        {props.projects.slice(1).map((p) => <AddProject t={props.t} project={p}/>)}
        <div className="d-flex justify-content-around mt-5 pt-5">
        
        <div className="m-3">
        <Card style={{ width: "18rem" }}>          
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
      <div className="m-3 projectcorners">
      <small>{props.project.data}</small>
        <div style={{ width: "18rem" , "background-color": "whitesmoke"}}>
          <Card.Img variant="top" src={props.project.propic} />
          <Card.Body>
            <Card.Title><b>{props.project.name}</b></Card.Title>
            <Card.Text>
            {props.project.breveDescrizione}             
            </Card.Text>
            <div style={{ "textAlign": "center"}}>
              {props.project.page ? <Link to={"/Portfolio/" + props.project.id}><Button variant="danger">{props.t("proj_thumb_btn")}</Button></Link> : <></>} 
            </div>            
          </Card.Body>
        </div>
      </div>
  )
}

function AddThesis(props)
{
  return(
      <div className="m-4 thesiscorners ">
      <small>{props.project.data}</small>
        <div className="d-flex justify-content-center">
          <Card.Img variant="top" src={props.project.propic} />
          <Card.Body>
            <Card.Title><b>{props.project.name}</b></Card.Title>
            <Card.Text>
            {props.project.breveDescrizione}             
            </Card.Text>
            <div style={{ "textAlign": "center"}}>
              {props.project.page ? <Link to={"/Portfolio/" + props.project.id}><Button variant="danger">{props.t("proj_thumb_btn")}</Button></Link> : <></>} 
            </div>            
          </Card.Body>
        </div>
      </div>
  )
}

export { PortfolioPage };
