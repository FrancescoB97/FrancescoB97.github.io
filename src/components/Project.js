import React from "react";
import "./Project.css"
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";


function ProjectPage(props) {
  props.updateTitle(props.project.name);
  
  return (
    <>
      <div className="App mt-5">
        {props.project.embedYT.length !== 0 ? <YoutubeEmbed embedId={props.project.embedYT} /> : <></>}     

        {props.project.screenshots.length !== 0 ? 
        <Carousel className="mt-3" interval={3000}>
        {props.project.screenshots.map((screen, i) => (
          <Carousel.Item key={i++}>
            <img
              className="d-block w-100"
              src={screen}           
            />            
          </Carousel.Item>
        ))}         
        </Carousel>  : <></>}      
        </div>

        <h3 className = "mt-4"><b>{props.t("proj_intoduction")}</b></h3>
        <p>{props.project.intro}</p>

        <h3 className = "mt-4"><b>{props.t("proj_description")}</b></h3>
        <p>{props.project.descrizione}</p>

        <h3 className = "mt-4"><b>{props.t("proj_teaching")}</b></h3>
        <p>{props.project.insegnamenti}</p>

        {props.project.attributes.length !== 0 ? 
        <>
          <h3 className = "mt-4"><b>{props.t("proj_attributions")}</b></h3>
          <p>
            {props.project.attributes.map((a) => <><a href={a.link}>{a.nome}</a><br/></>)}
          </p></> : <></>}

          {props.project.links.length !== 0 ? 
          <>
          <h3 className = "mt-4"><b>Links</b></h3>
          <p>
            {props.project.links.map((l) => <><a href={l.link}>{l.platform}</a><br/></>)}
          </p></> : <></>}
      
    </>
  );
}

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" >
    <iframe         
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export { ProjectPage };
