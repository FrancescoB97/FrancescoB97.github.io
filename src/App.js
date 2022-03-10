import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Image } from "react-bootstrap";
import AppSidebar from "./components/AppSidebar";
import { AppNavbar } from "./components/AppNavbar";

import proPic from "./components/Images/myPhoto.jpg";

function App() {
  return (
    <Container fluid className="AppBk m-0 p-0">
      <div id="body" class="pt-3 px-3">
        <AppNavbar />
        <Row>
          <Col md={3}>
            <AppSidebar/>
          </Col>
          <Col md={7}>
            <Image inline className="mx-auto d-none d-sm-block" src={proPic} roundedCircle width="200"/>
            <div className="App mt-3 pt-5">
                <p className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <a>   Via Silvio Pellico, 10073 Ciriè (TO), Piemonte, Italia</a>
                </p>

                <p className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                 <a>   20 Apr 1997</a> 
                </p>

                <p className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  <a>   345 08 69 334</a>                  
                </p>

                <p className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                  <a>   Patente B</a>                   
                </p>
            </div>

            <div className="mt-3 pt-5">
              <div>
                <h2>Su di me</h2>   
                <br/> 
                <p>
                  Sin da piccolo ho avuto la passione per l'informatica e in generale per i computer. Mi piace passare il mio tempo libero ammirando opere di animazione e computer grafica, ma anche
                  vivere in prima persona avventure in cui altre persone hanno messo l'anima. Sono anche appassionato di strategia, il che mi ha portato a farmi una vetrinetta di giochi da tavolo
                  impegnativi ma anche goliardici.
                </p>
                <p>
                  Mi sono sempre visto come un buon connubio di razionalità e sentimentalismo, combinazione che mi ha portato ad apprezzare molto la psicologia approfondendo con diverse letture. Grazie alla psicologia
                  e alle mie esperienze nei lavori di gruppo, ho capito quanto sia fondamentale una buona comunicazione e un buon rapporto con tutti i colleghi/clienti
                  <br/>Uno degli obiettivi della mia vita è infatti riuscire a realizzare qualcosa, che sia un videogioco o un cortometraggio, in grado di emozionare e trasportare profondi insegnamenti                  
                </p>
                <p>
                  Il mio amore per la scienza e l'informatica mi hanno portato a conseguire una laurea Triennale al Politecnico di Torino in ingegneria informatica, e la passione per i videogiochi
                  mi ha fatto intraprendere il ramo di Grafica e Multimedia, con qualche pizzico di sicurezza informatica, un altro campo che mi ha sempre appassionato.
                  Adesso sono quasi alla fine di questo intenso cammino che sono orgoglioso di aver scelto perché mi ha permesso di crescere ed aprire la mente.           
                </p>

              </div>
            </div>

            <div className="mt-3 pt-5">
            <div>
                <h2>I miei interessi</h2>   
                <br/> 
                <p>Videogiochi, letteratura, psicologia, informatica, sicurezza informatica, medicina, giochi da tavolo, sport</p>            
                
              </div>            
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
