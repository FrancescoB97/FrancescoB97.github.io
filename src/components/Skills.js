const skills = [
  {name : "GRAFICA", list : "Unity | Blender | OpenGL"},
  {name : "LINGUAGGI DI PROGRAMMAZIONE", list : "Assembly | C | C++ | C# | Java | Javascript | Html | Python"},
  {name : "ANALISI E VISUALIZZAZIONE DATI", list : "Sistemi di gestione di database (DBMS) | SQL | MATLAB"},
  {name : "SISTEMI OPERATIVI", list : "Windows | Linux | Unix based systems"},
  {name : "CRITTOGRAFIA E SICUREZZA INFORMATICA", list : "Python | C"},
  {name : "ELABORAZIONE FOTO E VIDEO", list : "Photoshop | DaVinci | GIMP"},
  {name : "ARCHITETTURE DI RETE", list : "Wireshark | Ettercap"} 
]  

function SkillsPage(props) {
  props.updateTitle("Skills");
  return (
    <div className="mt-5 pt-4">
      {skills.map((s) => <SkillField name={s.name} list={s.list}/>)}      
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
