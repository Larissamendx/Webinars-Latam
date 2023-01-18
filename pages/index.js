import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import { Banner, Course, Report, Alianzas, Logos } from "../styles/StylesHome";
import Shape from "../assets/shape.png";
import RptLogo from "../assets/logo.svg";
import Footer from "../components/footer";
import CourseContext from "../context/CourseContext";
import { useContext } from "react";
import Ifrs from "../assets/ifrss.svg";
import Cemefi from "../assets/cemefi.png";
import Dnv from "../assets/dnv.png";
import Gri from "../assets/gri-blue.svg";
import ProCoReef from "../assets/procoreef.png";
import Formulario from '../components/form';
import RptLogoBlue from "../assets/logo3.svg";

export default function Home() {
  const { aboutCourses, currentCourse} = useContext(CourseContext);

  return (
    <div>
      <Banner id="presentacion">
        <div className="back">
          <Image src={RptLogo} alt="logo" className="logo" />
          <Image src={Shape} alt="fundo" className="shape" priority={1} />
        </div>
        <Image src={RptLogoBlue} alt="logo" className="logoblue" />
        <div className="text">
          <h1>Serie de Webinars</h1>
          <h2>
            CONEXIÓN ESG <span>Diálogos Latam</span>
          </h2>
          <p>
            La Conexión ESG | Latam Diálogos es una serie de 5 Webinars, con
            eventos online gratuitos para discutir temas como Estrategia ESG,
            Reportes ESG, Metodologías, Indicadores, Materialidad, Agenda
            Climática, Finanzas Sostenibles y Comunicación para la
            Sostenibilidad con la participación de actores con experiencia en el
            tema, atenta a las tendencias y conocimientos de las diferentes
            regiones. Esta iniciativa es liderada por el grupo report,
            consultoría especializada en los temas ESG, con más de 20 años de
            actuación en Brasil, cuenta con la participación de importantes
            aliados globales y de América Latina para intercambiar
            conocimientos, casos y lecciones aprendidas entre los países
            latinoamericanos.
            <br />
            <br />
            Esta iniciativa es liderada por el{" "}
            <b>
              grupo report, consultoría especializada en los temas ESG, con más
              de 20 años de actuación en Brasil
            </b>
            , cuenta con la participación de importantes aliados globales y de
            América Latina para intercambiar conocimientos, casos y lecciones
            aprendidas entre los países latinoamericanos.
          </p>
        </div>
      </Banner>
      <Course id="programacion">
        {aboutCourses.map((course, id) => {
          return <Card key={id} course={course} />;
        })}
      </Course>
      <Report id="report">
        <h2>
          Grupo report <span>quienes somos</span>
        </h2>
        <p>
          El <b>grupo report</b> es una consultoría ESG, miembro activo del
          movimiento internacional desde sus principios, con 20 años de
          actuación en Sostenibilidad, RSC, ESG y un amplio portfolio de
          servicios para apoyar a las empresas en la inserción de esas pautas en
          la estrategia y gestión del negocio.
          <br />
          <br />
          Con más de 1000 informes de Sostenibilidad/ESG realizados para
          empresas de diferentes sectores y países, alineados a los más
          rigurosos standards internacionales, el Grupo Report cuenta con amplia
          experiencia en el diagnóstico, levantamiento de información,
          indicadores, procesos de reporte y comunicación de la Sostenibilidad,
          así como en el desarrollo de Estrategia ESG.
          <br />
          <br />
          Para eso, además desarrollar metodologías propias, cuenta con alianzas
          estratégicas con organizaciones como GRI, Pacto Global, Value
          Reporting Foundation, CDP y WCBSD- Brasil, con las cuales colabora en
          proyectos para diseminación e implementación de herramientas,
          desarrollo de contenidos y mejora continua de las prácticas
          empresariales.
        </p>
      </Report>
      <Alianzas id="alianzas">
        <h2>Alianzas</h2>
        <p>
          En esta iniciativa, el grupo report reunió aliados con abrangencia
          internacional y en la América Latina. Juntos, conseguimos ampliar el
          debate sobre los diferentes frentes da Agenda ESG, con conocimiento
          amplio más también concentrado nas necesidades de cada país e
          localidade. Conozca nuestros aliados:
        </p>

        <Logos>
          <a href='https://www.cemefi.org/'><Image src={Cemefi} alt="logo" /></a>
          <a href='https://www.ifrs.org/'><Image src={Ifrs} alt="logo" /></a>
          {/* <a href='https://www.dnv.com.br/'><Image src={Dnv} alt="logo" /></a> */}
          <a href='https://www.globalreporting.org'><Image src={Gri} alt="logo" /></a>
          <a href='https://www.procoreef.com'><Image src={ProCoReef} alt="logo" /></a>
        </Logos>
      </Alianzas>
      <Formulario color={currentCourse.color} buttonColor={currentCourse.buttonColor} />
      <Footer />
    </div>
  );
}
