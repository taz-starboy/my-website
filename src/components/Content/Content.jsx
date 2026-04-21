import Card from "../Card/Card.jsx";
import Tags from "../Tags/Tags.jsx";
import './Content.scss';

export default function Content() {
    return (
        <main className="content">
            <section id="about" className="section">                
                <div className="about-text-content">
                    <p>
                        Sono un professionista del web focalizzato sulla progettazione di <b>architetture scalabili</b> e soluzioni che bilanciano prestazioni e ottimizzazione dei costi.<br/>
                        Mi considero un programmatore <b>agnostico rispetto al linguaggio</b>: la mia vera passione risiede nel design e nell'architettura del software.<br/><br/>

                        Attualmente, in <b>Mondo Convenienza</b>, metto a disposizione le mie competenze e le mie idee per lo sviluppo di applicativi web.<br/>
                        Snellisco e rinnovo i flussi esistenti, portando un approccio ingegneristico moderno.<br/><br/>

                        In oltre cinque anni di esperienza, ho consolidato il mio percorso in realtà come <b>Lynx</b> e <b>Capgemini</b>. 
                        In Lynx ho avuto il privilegio di gestire le <b>code di messaggistica</b> per una nota impresa bancaria: una sfida in cui ho dovuto apprendere nuove tecnologie in poco tempo e che mi ha permesso di capire cosa si cela dietro l’integrazione tra stack di software complessi ed eterogenei. 
                        In Capgemini ho invece vissuto la realtà di un team talentuoso e strutturato, acquisendo competenze avanzate in ambito <b>Cloud</b> e <b>CI/CD</b> e imparando a connettere efficacemente le esigenze del business con le metodologie di sviluppo.<br/><br/>

                        La mia curiosità tecnologica non si ferma al codice e non si esaurisce al lavoro. 
                        Ho un legame profondo con il mondo <b>hardware ed elettronico</b> — i cui frutti finiscono spesso su <a href="https://github.com/taz-starboy" target="_blank" title="GitHub"><b>GitHub</b></a> — e sto attualmente consolidando le mie competenze nel <b>networking</b>, convinto che una visione completa dell’infrastruttura sia ciò che distingue un buon ingegnere da uno eccezionale.<br/><br/>

                        Quando non sono davanti allo schermo, mi piace coltivare il rapporto con i miei amici e i miei cari. Per staccare mi dedico all’attività fisica, tra bodybuilding e corsa, oppure mi perdo nella visione di un buon film.
                    </p>
                </div>
            </section>


            <section id="experience" className="section">
                <Card labelText="2025 — Presente" detailsTitle="Senior Engineer · Mondo Convenienza" tags={["C#", "Node.js", "React", "Microsoft SQL Server", "AWS"]}>
                    In una fase di passaggio da strumenti legacy a nuove tecnologie, porto il mio contributo con l'implementazione di tecnologie moderne, sempre con un occhio alla visione d'insieme, all'efficienza e ai costi di implementazione.
                </Card>
                <Card labelText="2022 — 2025" detailsTitle="Full Stack Developer · Capgemini" tags={["Java", "HTL", "AEM", "OSGi Model", "Javascript", "SCSS"]}>
                    Sviluppo Enterprise con Adobe Experience Manager (AEM) Mi sono occupato dell’intero ciclo di vita di componenti AEM, focalizzandomi sulla creazione di soluzioni modulari e riutilizzabili.<br />
                    Questa esperienza mi ha permesso di approfondire il paradigma OSGi, affinando la mia capacità di progettare software secondo modelli architetturali a servizi, garantendo alta manutenibilità e scalabilità in ecosistemi software di grandi dimensioni.
                </Card>
                <Card labelText="2021 — 2022" detailsTitle="System Integrator · Lynx" tags={["IBM ACE", "WebSphere MQ", "ESQL", "Queue Management"]}>
                    Gestione dei messaggi in coda su Websphere MQ.
                    Gestione del formatting e del routing con IBM ACE (ex Integration Bus).<br />
                    Esperienza preziosa per conoscere lo sviluppo middleware e di system integrator, essenziale per una visione dello stack tecnologico a 360 gradi.
                </Card>
                <Card labelText="2020 — 2021" detailsTitle="Full Stack Developer · AKT" tags={["Java", "SpringBoot", "Microservizi", "SQL", "HTML", "CSS", "Javascript"]}>
                    Gestore di Test Scolastici Full-Stack Implementazione "end-to-end" di un sistema per la gestione di test scolastici basato sull'ecosistema Spring.<br />
                    Ho progettato un'architettura solida focalizzata sulla protezione dei dati sensibili e sull'integrità delle transazioni su database Oracle.<br />
                    La scelta di Vanilla JS per il frontend riflette un approccio orientato alle performance e alla padronanza delle tecnologie core del web. Un progetto chiave che testimonia la mia capacità di trasformare processi logici complessi in software scalabili e sicuri.
                </Card>
                <Card labelText="2012 — 2015" detailsTitle="Backend Developer · Consoft" tags={["Java", "JSP", "HTML", "CSS", "Javascript"]}>
                    Gestione dei messaggi in coda su Websphere MQ.
                    Gestione del formatting e del routing con IBM ACE (ex Integration Bus).<br />
                    Esperienza preziosa per conoscere lo sviluppo middleware e di system integrator, essenziale per una visione dello stack tecnologico a 360 gradi.
                </Card>
            </section>


            <section id="projects" className="section">
                <a href="https://github.com/taz-starboy/arduino-uno--TETRIS" target="_blank">
                    <div className="card">
                        <div className="project-img">
                            <img src="tetris_per_arduino.png"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Tetris su Arduino Uno / Nano</p>
                            <p className="details-content">
                                Il mio progetto open source di una versione light del gioco del Tetris direttamente sul chip ATMega328PU montato su Arduino Uno (valido anche per Arduino Nano).<br/>
                                Un progetto modulare votato all'efficienza e al corretto utilizzo dei limitati 32 kB di memoria.
                            </p>
                            <Tags tags={["C / C++", "Arduino", "ATMega328PU"]} />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/taz-starboy/progetto-antifurto" target="_blank">
                    <div className="card">
                        <div className="project-img">
                            <img src="antifurto_service_thumbnail.png" />
                        </div>
                        <div className="details">
                            <p className="details-title">Microservizi IoT e notifche AI generated</p>
                            <p className="details-content">
                                Ecosistema IoT & AI Notification Engine. Soluzione a microservizi sviluppata in SpringBoot per la gestione di flussi IoT in tempo reale.<br/>
                                Il sistema integra un motore di notifiche basato su intelligenza artificiale. Servizi orchestrati con Docker e Docker Compose per massimizzare la portabilità e semplificare l'orchestrazione dei servizi.
                            </p>
                            <Tags tags={["Java", "SpringBoot", "Docker", "Twilio", "WhatsApp API"]} />
                        </div>
                    </div>
                </a>                
            </section>

        </main>
    );
}