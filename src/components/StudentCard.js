import './StudentCard.css'
import { Table, Image, Accordion } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";
import ielts from "./File/IELTScertificazione.png";
import { useEffect } from 'react';
import API from "./API";

function StudentCardPage(props) 
{  
  props.updateTitle("Student Card");

  useEffect(() => {
    API.getExams()
        .then( ex => {
        props.setExams(ex);        
    }).catch();
  }, []);

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
      <ExamsTable exams={props.exams}/>
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
                  <th colSpan="2" width='4%' className="text-center">COMPRENSIONE</th>
                  <th colSpan="2" width='4%' className="text-center">ESPRESSIONE</th>
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

function ExamsTable(props) 
{     

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
              props.exams.map((ex) => <ExamRow key={ex.data} exam={ex}/>)
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
    <td style={{ "textAlign": "center" }}><Image inline className="mx-auto d-none d-sm-block" src={props.exam.lingua == "it" ? it : en} rounded width="15"/></td>   
  </>;
}



export { StudentCardPage };
