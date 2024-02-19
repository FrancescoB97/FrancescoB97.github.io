import { Image } from "react-bootstrap";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import proPic from "./Images/myPhoto.jpg";
import { useEffect } from "react";


function AboutMePage(props) {
  useEffect(() => {
    props.updateTitle("AboutMe");
  }, []); 
  
  return (
    <div>  
    <div className="App">
      <Image inline="true" className="mx-auto d-sm-block" src={proPic} roundedCircle width="200"/>
    </div>   


    <div className="App mt-3 pt-5">     

        <AboutMeInfoField data={props.t('profile_address')} icon="bi bi-geo-alt-fill"/>

        <AboutMeInfoField data="20 Apr 1997" icon="bi bi-calendar-event"/>

        <AboutMeInfoField data="+39 345 08 69 334" icon="bi bi-telephone-fill"/>

    </div>

    <div className="App mt-3 pt-4 d-flex justify-content-center">     

        <AboutMeSocialField icon="bi bi-envelope" variant={"outline-dark"} newTab="mailto:bonini.francesco97@gmail.com"/>

        <AboutMeSocialField icon="bi bi-linkedin" variant={"outline-primary"} newTab="https://www.linkedin.com/in/francesco-bonini-51b321209/"/>

        <AboutMeSocialField icon="bi bi-github" variant={"outline-dark"} newTab="https://github.com/francescob97"/>

        <AboutMeSocialField icon="bi bi-youtube" variant={"outline-danger"} newTab="https://www.youtube.com/playlist?list=PLiUM5P7jBVacB_7z4eVBh8wCqPTYpl-Re"/>

    </div>


    <div className="mt-3 pt-5 d-grid" style={{ width: "50%", margin: "0 auto" }}>
      <OverlayTrigger
          delay={{ hide: 50, show: 100 }}
          overlay={(props) => (
            <Tooltip {...props}>
              Download CV
            </Tooltip>
          )}
          placement="bottom">
            
        <Button variant="outline-warning" size="lg" onClick={() => openInNewTab("https://raw.githubusercontent.com/francescob97/francescob97.github.io/main/src/components/File/CV/CV_BoniniFrancesco.pdf")}>
        <i class="bi bi-file-earmark-arrow-down h1"></i>
        </Button>   
        </OverlayTrigger>  
    </div>

    

    <AboutMeTextField t={props.t}/>

    <div className="mt-3 pt-5">

      <h2>{props.t('interest_title')}</h2>   
    
      <div className="d-flex flex-wrap mx-2 mt-5">      

        <AboutMeInterestField t={props.t} index={0} icon={"bi bi-controller"} />      

        <AboutMeInterestField t={props.t} index={1} icon={"bi bi-book"} />    

        <AboutMeInterestField t={props.t} index={2} icon={"bi bi-hypnotize"} />          

        <AboutMeInterestField t={props.t} index={3} icon={"bi bi-headset-vr"} />    

        <AboutMeInterestField t={props.t} index={4} icon={"bi bi-cpu"} />       

        <AboutMeInterestField t={props.t} index={5} icon={"bi bi-heart-pulse"} />      

        <AboutMeInterestField t={props.t} index={6} icon={"bi bi-puzzle"} />    

        <AboutMeInterestField t={props.t} index={7} icon={"bi bi-bicycle"} />    

      </div>
    </div>
    </div>    
  );
}

function AboutMeInfoField(props) {
  return(
    <p className="p-1">
      <i className={`p-2 ${props.icon}`}></i>   
      <a>{props.data}</a>
    </p>
  );
}

function AboutMeSocialField(props) {
  return(
    <div>   
      <OverlayTrigger
        delay={{ hide: 100, show: 200 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Open into new tab
          </Tooltip>
        )}
        placement="bottom">
        <Button className="me-2" size="sm" variant={props.variant} onClick={() => openInNewTab(props.newTab)}>
          <i className={`${props.icon} h3`} fill="currentColor"></i>   
        </Button> 
        </OverlayTrigger> 
      </div>  
  );
}

function AboutMeTextField(props) {
  return(
    <div className="mt-3 pt-5">
      <div>
        <h2>{props.t('about_me_title')}</h2>  
        <br/>         
        <p>{props.t('about_me_text', { returnObjects: true })[0]}</p>
        <p>{props.t('about_me_text', { returnObjects: true })[1]}</p>
        <p>{props.t('about_me_text', { returnObjects: true })[2]}</p>
      </div>
    </div>
  );
}

function AboutMeInterestField(props) {
    return(
      <div className="d-flex align-items-center center-block p-1">
        <div>
          <div className = "d-flex justify-content-center">
            <i className={`${props.icon} h1`}></i>   
          </div>
          <p>{props.t('interests', { returnObjects: true })[props.index]}</p>                   
        </div>                    
      </div>
    );  
}


function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
    alert("Copied to clipboard");
  }, function() {
    /* clipboard write failed */
  });
}

function openInNewTab(link) {
  window.open(link);
}

export { AboutMePage };
