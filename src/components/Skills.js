import { useEffect } from "react";
function SkillsPage(props) {
  useEffect(() => {
    props.updateTitle("Skills");
  }, []); 
 
  return (
    <div className="mt-5 pt-4">
      {props.t("skills", { returnObjects: true }) ? Array.from(props.t('skills', { returnObjects: true })).map((s) => <SkillField name={s.name} list={s.list}/>) : <></>}  
      <br/>
      <br/>      
    </div>        
  );
}


function SkillField(props) {
  return(
    <div className="mt-4">
      <h4><strong>{props.name}</strong></h4>
      <h6>{props.list}</h6>     
    </div>    
  );
  
}

export { SkillsPage };
