import './StudentCard.css'
import { Table, Image, Accordion } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";
import ielts from "./File/IELTScertificazione.png";

const exams = [
  {data: "26/01/2021", name: "Data Science e Tecnologie per le Basi di Dati", crediti: "8", voto: "20", lang: "it"},
  {data: "03/02/2021", name: "Architetture dei sistemi di elaborazione", crediti: "10", voto: "30", lang: "it"},
  {data: "13/02/2021", name: "Tecnologie e servizi di rete", crediti: "6", voto: "26", lang: "it"},
  {data: "24/02/2021", name: "Information systems security", crediti: "6", voto: "24", lang: "en"},
  {data: "25/06/2021", name: "Software engineering", crediti: "8", voto: "30", lang: "en"},
  {data: "29/06/2021", name: "Web Applications I", crediti: "6", voto: "28", lang: "en"},
  {data: "02/07/2021", name: "Cryptography", crediti: "6", voto: "21", lang: "en"},
  {data: "16/02/2022", name: "Realtà virtuale", crediti: "6", voto: "30", lang: "it"}  
]

function StudentCardPage(props) {
  props.updateTitle("Student Card");
  return (
    <div className="mt-5 pt-4">
      <h5>STUDENT ID: <u>282890</u></h5>
      <h5><b>Istruzione</b></h5>           
      <EducationTable/>      

      <h5 className="mt-4 pt-4"><b>Lingue</b></h5>
      <p>Lingua madre : ITALIANO</p>
      <p>Altre lingue : INGLESE</p>
      <LanguageTable/>
      <IeltsSection/>

      <h5 className="mt-4 pt-4"><b>Esami</b></h5>
      <p>Laurea magistrale in Ingegneria Informatica (Computer Engineering)</p>    
      <ExamsTable/>
    </div>        
  );
}


function IeltsSection() {        
  return (
      <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Certificazione IELTS</Accordion.Header>
        <Accordion.Body>
          <Image src={ielts}/>
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>
  );
}


function EducationTable() {        
  return (
      <Table id="educationTable" striped className="table">
          <thead >
              <tr>
                  <th width='4%' className="text-center"></th>
                  <th width='4%' className="text-center"></th>
                  <th width='4%' className="text-center"></th>                  
              </tr>
          </thead>
          <tbody>
              <tr>
                <td colSpan="5" style={{ "textAlign": "left" }}>2016</td>
                <td colSpan="5" style={{ "textAlign": "center" }}><b>Diploma MATURITA' SCIENTIFICA - OPZIONE SCIENZE APPLICATE</b><br/>Liceo Juvarra</td>
                <td colSpan="5" style={{ "textAlign": "center" }}>Venaria Reale, Italia</td>
              </tr>

              <tr>
                <td colSpan="5" style={{ "textAlign": "left" }}>Sep 2016 –<br/> Jul 2020</td>
                <td colSpan="5" style={{ "textAlign": "center" }}><b>Laurea in Ingegneria Informatica</b><br/>Politecnico di Torino</td>
                <td colSpan="5" style={{ "textAlign": "center" }}>Torino, Italia</td>
              </tr>

              <tr>
              <td colSpan="5" style={{ "textAlign": "left" }}>Sep 2020 – present</td>
              <td colSpan="5" style={{ "textAlign": "center" }}><b>Laurea magistrale in Ingegneria Informatica (Computer Engineering)<br/>GRAFICA E MULTIMEDIA</b><br/>Politecnico di Torino</td>
              <td colSpan="5" style={{ "textAlign": "center" }}>Torino, Italia</td>
              </tr>          
          </tbody>
      </Table>
  );
}


function LanguageTable() {        
  return (
      <Table id="languageTable" striped className="table-borderless">
          <thead >
              <tr>
                  <th colspan="2" width='4%' className="text-center">COMPRENSIONE</th>
                  <th colspan="2" width='4%' className="text-center">ESPRESSIONE</th>
                  <th width='4%' className="text-center">SCRITTURA</th>                   
              </tr>
          </thead>
          <tbody>
          <tr>
            <td style={{ "textAlign": "center" }}>Ascolto</td>
            <td style={{ "textAlign": "center" }}>Lettura</td>     
            <td style={{ "textAlign": "center" }}>Interaz. orale</td>
            <td style={{ "textAlign": "center" }}>Produz. orale</td>        
            <td></td>   
          </tr>
          <tr>
            <td style={{ "textAlign": "center" }}>B2</td>
            <td style={{ "textAlign": "center" }}>B2</td>     
            <td style={{ "textAlign": "center" }}>B2</td>
            <td style={{ "textAlign": "center" }}>B2</td>        
            <td style={{ "textAlign": "center" }}>B2</td>   
          </tr>
                       
          </tbody>
      </Table>
  );
}

function ExamsTable() {        
  return (
      <Table id="languageTable" striped className="table-borderless">
          <thead >
              <tr>
                  <th width='1%' className="text-center">Data</th>
                  <th width='4%' className="text-center">Esame</th>
                  <th width='1%' className="text-center">Crediti</th>     
                  <th width='1%' className="text-center">Voto</th>       
                  <th width='1%' className="text-center">Lingua</th>            
              </tr>
          </thead>
          <tbody>
            {
              exams.map((ex) => <ExamRow key={ex.data} exam={ex}/>)
            }                                 
          </tbody>
      </Table>
  );
}

function ExamRow(props) {
  return <tr><ExamRowData exam={props.exam}/></tr>
}

function ExamRowData(props) {
  return <>
    <td>{props.exam.data}</td>
    <td >{props.exam.name}</td>
    <td style={{ "textAlign": "center" }}>{props.exam.crediti}</td>
    <td style={{ "textAlign": "center" }}>{props.exam.voto}</td>
    <td style={{ "textAlign": "center" }}><Image inline className="mx-auto d-none d-sm-block" src={props.exam.lang == "it" ? it : en} rounded width="15"/></td>   
  </>;
}



export { StudentCardPage };
