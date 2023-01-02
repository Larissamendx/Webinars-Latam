import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import { Banner, Course } from "../styles/StylesHome";
import Shape from "../assets/shape.png";
import RptLogo from "../assets/logo.svg";
import Footer from "../components/footer"
import CourseContext from "../context/CourseContext";
import { useContext } from "react";

export default function Home() {
  const {aboutCourses} = useContext(CourseContext);
  return (
    <div>
      <Banner>
        <div className="back">
          <Image src={RptLogo} alt="logo" className="logo" />
          <Image src={Shape} alt="fundo" className="shape" priority={1} />
        </div>
        <div className="text">
          <h1>
            CONEXIÓN ESG <span>Diálogos Latinoamericanos</span>
          </h1>
          <p>
            La Conexión ESG | Latam Diálogos es una serie de 5 Webinars, con eventos online gratuitos
            para discutir temas como Estrategia ESG, Reportes ESG, Metodologías, Indicadores,
            Materialidad, Agenda Climática, Finanzas Sostenibles y Comunicación para la Sostenibilidad
            con la participación de actores con experiencia en el tema, atenta a las tendencias y
            conocimientos de las diferentes regiones.
            Esta iniciativa es liderada por el grupo report, consultoría especializada en los temas ESG,
            con más de 20 años de actuación en Brasil, cuenta con la participación de importantes
            aliados globales y de América Latina para intercambiar conocimientos, casos y lecciones
            aprendidas entre los países latinoamericanos.
            <br />
            <br />
            Esta iniciativa es liderada por el <b>grupo report, consultoría especializada en los temas ESG,
            con más de 20 años de actuación en Brasil</b>, cuenta con la participación de importantes
            aliados globales y de América Latina para intercambiar conocimientos, casos y lecciones
            aprendidas entre los países latinoamericanos.
          </p>
        </div>
      </Banner>
      <Course>
      {
        aboutCourses.map((course, id )=> {
          return <Card key={id} course={course} />
        })
      }
      </Course>
      <Footer />
    </div>
  );
}
