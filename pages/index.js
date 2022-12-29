import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Formulario from "../components/form";
import { Banner, Curse } from "../styles/StylesHome";
import Shape from "../assets/shape.png";
import RptLogo from "../assets/logo.svg";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Banner>
        <div className="back">
          <Image src={RptLogo} alt="logo" className="logo" />
          <Image src={Shape} alt="fundo" className="shape" />
        </div>
        <div className="text">
          <h1>
            CONEXIÓN ESG <span>Diálogos Latinoamericanos</span>
          </h1>
          <p>
            Con una gran experiencia en Brasil y nuevas alianzas formadas en
            América Latina, el grupo report destacó la importancia de
            intercambiar conocimientos, casos y lecciones aprendidas entre los
            países latinoamericanos.
            <br />
            <br />
            La Conexión ESG | Latam Diálogos es entonces una serie de 5
            Webinars, con eventos online gratuitos para discutir temas como
            Estrategia ESG, Reportes ESG, Metodologías, Indicadores,
            Materialidad, Agenda Climática, Finanzas Sostenibles y Comunicación
            para la Sostenibilidad con la participación de actores con
            experiencia en el tema, atenta a las tendencias y conocimientos de
            las diferentes regiones.
          </p>
        </div>
      </Banner>
      <Curse>
        <Card
          Title="La doble materialidad y los informes ESG"
          background="blue"
          text="Invitados: Arturo Rodriguez (IFRS), XXXX (CEMEFI) y XXX (XX)"
          date="17.01.2023"
        />
        <Card
          Title="La doble materialidad y los informes ESG"
          background="gray"
          text="Invitados: Arturo Rodriguez (IFRS), XXXX (CEMEFI) y XXX (XX)"
          date="17.01.2023"
        />
        <Card 
          Title="La doble materialidad y los informes ESG"
          background="blue"
          text="Invitados: Arturo Rodriguez (IFRS), XXXX (CEMEFI) y XXX (XX)"
          date="17.01.2023"
        />
      </Curse>
      <Footer />
    </div>
  );
}
