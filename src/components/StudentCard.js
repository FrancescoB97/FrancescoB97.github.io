import './StudentCard.css'
import i18next from 'i18next';
import { Table, Image, Accordion } from "react-bootstrap";
import it from "./Images/ita.svg";
import en from "./Images/eng.svg";
import ielts_it from "./File/IELTS/IELTScertificazione_it.png";
import ielts_en from "./File/IELTS/IELTScertificazione_en.png";
import { useEffect } from 'react';
import API from "./API";

function StudentCardPage(props) 
{  
  
  useEffect(() => {
    props.updateTitle("Student Card");
  }, []); 

  useEffect(() => {
    API.getExams(i18next.language)
        .then( ex => {
        props.setExams(ex);        
    }).catch();
  }, [i18next.language]);

  return (
    <div className="mt-5 pt-4">
      <h5>STUDENT ID: <u>282890</u></h5>
      <h5><b>{props.t("education_title")}</b></h5>           
      <EducationTable t={props.t}/>      

      <h5 className="mt-4 pt-4"><b>{props.t("language_title")}</b></h5>
      <p>{props.t("mather_tongue")}</p>
      <p>{props.t("other_languages")}</p>
      <LanguageTable t={props.t}/>
      <IeltsSection t={props.t}/>

      <h5 className="mt-4 pt-4"><b>{props.t("exams_title")}</b></h5>
      <p>{props.t("master_title")}</p>    
      <ExamsTable t={props.t} exams={props.exams}/>
    </div>        
  );
}


function IeltsSection(props) {        
  return (
      <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.t("ielts_cert")}</Accordion.Header>
        <Accordion.Body>
          <Image src={i18next.language === "en" ? ielts_en : ielts_it}/>
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>
  );
}


function EducationTable(props) {        
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
                <td colSpan="5" style={{ "textAlign": "center" }}><b>{props.t("diploma_title")}</b><br/>Filippo Juvarra</td>
                <td colSpan="5" style={{ "textAlign": "center" }}>Venaria Reale, Italia</td>
              </tr>

              <tr>
                <td colSpan="5" style={{ "textAlign": "left" }}>Sep 2016 –<br/> Jul 2020</td>
                <td colSpan="5" style={{ "textAlign": "center" }}><b>{props.t("banchelor_title")}</b><br/>{props.t("banchelor_location")}</td>
                <td colSpan="5" style={{ "textAlign": "center" }}>Torino, Italia</td>
              </tr>

              <tr>
              <td colSpan="5" style={{ "textAlign": "left" }}>Sep 2020 – present</td>
              <td colSpan="5" style={{ "textAlign": "center" }}><b>{props.t("master_title")}<br/>{props.t("master_spec")}</b><br/>{props.t("master_location")}</td>
              <td colSpan="5" style={{ "textAlign": "center" }}>Torino, Italia</td>
              </tr>          
          </tbody>
      </Table>
  );
}


function LanguageTable(props) {        
  return (
      <Table id="languageTable" striped className="table-borderless">
          <thead >
              <tr>
                  <th colSpan="2" width='4%' className="text-center">{props.t("ielts_u")}</th>
                  <th colSpan="2" width='4%' className="text-center">{props.t("ielts_s")}</th>
                  <th width='4%' className="text-center">{props.t("ielts_w")}</th>                   
              </tr>
          </thead>
          <tbody>
          <tr>
            <td style={{ "textAlign": "center" }}>{props.t("ielts_u_l")}</td>
            <td style={{ "textAlign": "center" }}>{props.t("ielts_u_r")}</td>     
            <td style={{ "textAlign": "center" }}>{props.t("ielts_s_si")}</td>
            <td style={{ "textAlign": "center" }}>{props.t("ielts_s_sp")}</td>        
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
                  <th width='1%' className="text-center">{props.t("exam_date")}</th>
                  <th width='4%' className="text-center">{props.t("exam_exam")}</th>
                  <th width='1%' className="text-center">{props.t("exam_credits")}</th>     
                  <th width='1%' className="text-center">{props.t("exam_mark")}</th>       
                  <th width='1%' className="text-center">{props.t("exam_lang")}</th>            
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
    <td style={{ "textAlign": "center" }}><Image inline="true" className="mx-auto d-none d-sm-block" src={props.exam.lingua == "it" ? it : en} rounded width="15"/></td>   
  </>;
}



export { StudentCardPage };
