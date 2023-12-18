import './StudentCard.css'
import courses from "./File/courses.json";
import { Table, Image, Accordion } from "react-bootstrap";
import { useEffect } from 'react';

function ProfessionalCardPage(props) 
{  
  
  useEffect(() => {
    props.updateTitle("Professional Card");
  }, []); 

  
  return (
    <div className="mt-5 pt-4">
        <h5><b>{props.t("Professional Experience")}</b></h5>
        <JobsTable></JobsTable>

        <h5 className="mt-4 pt-4"><b>{props.t("Courses")}</b></h5>
        {courses.map((c) => <CoursesRow t={props.t} course={c}/>)}   
        
    </div>        
  );
}

function JobsTable(props) {
  return (
      <Table id="educationTable" striped className="table">
        <thead >
        <tr>
          <th width='60%' className="text-center"></th>
          <th width='10%' className="text-center"></th> 
        </tr>
        </thead>
        <tbody>
        <tr>      
          <td colSpan="5" style={{ "textAlign": "centered" }}><b>Software Engineer</b>, Alten Italia - Leonardo
              <br/>Software developer for graphics interfaces in C++ and Qt for EFA simulator</td>
          <td colSpan="5" style={{ "textAlign": "right" }}>2023 May – 2023 Oct<br/>Turin, Italy</td>
        </tr> 
        </tbody>
      </Table>
  );
}

function CoursesRow(props) {
    return (
        <Accordion className="accordion my-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Table id="CourseTable" >                     
                        <tbody>
                        <tr>
                            <td colSpan="3" style={{ "textAlign": "centered" }}>
                                <b>{props.course.title}</b>
                                <br/>{props.course.platform}</td>
                            <td colSpan="3" style={{ "textAlign": "right" }}>{props.course.date}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Accordion.Header> 
                <Accordion.Body>               
                    <Image src={props.course.link}
                           style={{ maxWidth: '100%', height: 'auto' }}/>                 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}


export { ProfessionalCardPage };
