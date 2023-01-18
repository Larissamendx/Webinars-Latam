import Head from "next/head";
import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Formulario(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [posto, setPosto] = useState("");
  const [scurso, setScurso] = useState("");

  // const notify = () => toast.success("¡Registro completado!");
  // const Carregar = () => toast.success("¡Aguarde!");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      pais: pais,
      empresa: empresa,
      posto: posto,
      scurso: scurso,
    };
    
    axios.post('https://sheet.best/api/sheets/c2271082-8e41-413c-822c-c60bdcf6bf2e', templateParams ).then((response)=>{
    emailjs
      .send(
        "gmailMessage",
        "template_nkkupep",
        templateParams,
        "8U3LPI7DMH1OYxzFy"
      )
      .then(
        (response) => {
          console.log(response.text, "Email enviado");
          // notify();
          setEmail("");
          setName("");
          setPais("");
          setEmpresa("");
          setPosto("");
          setScurso("");
        },
        (error) => {
          console.log(error.text);
        },
        (pending) => {
          console.log(pending.text, "Carregando");
          Carregar();
        }
      );
    })

    const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));
toast.promise(
    resolveWithSomeData,
    {
      pending: {
        render(){
          return "Cargando, esperar"
        },
        icon: false,
        position: "top-center",
        theme: "colored",
      },
      success: {
        render({data}){
          return `¡Registro completado!`
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({data}){
          // When the promise reject, data will contains the error
          return <MyErrorComponent message={data.message} />
        }
      }
    }
)
  }

  return (
    <Container color={props.color} id="form">
      <ToastContainer />
      <Form
        // onSubmit={sendEmail, Submit(e)}
        color={props.color}
        buttonColor={props.buttonColor}
        onSubmit={sendEmail}
      >
        <div className="content">
          <h2>Formulario de inscripción</h2>
          <div className="input-container">
            <label className="text-input">
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Escriba su nombre"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name=""
                required
              />
            </label>
            <label className="text-input">
              <span>Correo electrónico</span>
              <input
                type="email"
                placeholder="Escriba su correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name=""
                required
              />
            </label>

            <label className="text-input">
              <span>País</span>
              <input
                type="text"
                placeholder="Escriba su país"
                onChange={(e) => setPais(e.target.value)}
                value={pais}
                required
              />
            </label>

            <label className="text-input">
              <span>Empresa</span>
              <input
                type="text"
                placeholder="Escriba su empresa"
                onChange={(e) => setEmpresa(e.target.value)}
                value={empresa}
                required
              />
            </label>
            <label className="text-input">
              <span>Puesto</span>
              <input
                type="text"
                placeholder="Escriba su puesto"
                onChange={(e) => setPosto(e.target.value)}
                value={posto}
                required
              />
            </label>
            <label>
              <h6>Webinar</h6>
              <div className="input">
                <select
                  name="select"
                  onChange={(e) => setScurso(e.target.value)}
                  value={scurso}
                >
                  <option
                    value="Escolha um webinar"
                    className="opt"
                  >Escolha um webinar</option>
                  <option
                    value="Reportes ESG: Panorama, Tendencias y Metodologías"
                    className="opt"
                  >
                    Reportes ESG: Panorama, Tendencias y Metodologías
                  </option>
                  <option value="Finanzas Sostenibles & “Sustainability-linked bonds (SBL)" className="opt">
                    Finanzas Sostenibles & “Sustainability-linked bonds (SBL)
                    
                  </option>
                </select>
              </div>
            </label>
          </div>
        </div>
        <div className="form-footer">
          <label>
            <input type="checkbox" required />
            <span>
              “Soy consciente de que Grupo Report respeta mis Datos Personales y
              la Ley General de Protección de Dados Brasileira, por lo que los
              datos ingresados ​​aquí serán utilizados exclusivamente para
              gestión de inscripciones en el programa "Conexión ESG: Diálogos
              Latam", incluyendo el envío de mensajes relacionados con el mismo.
              Si yo me opongo a este tratamiento, no debo marcar esta opción y,
              en consecuencia, no podré participar del programa.
            </span>
          </label>

          <label>
            <input type="checkbox" />
            <span>
              Acepto recibir información sobre otras iniciativas y servicios del
              grupo report
            </span>
          </label>

          <input className="button" type="submit" value="¡Regístrese ahora!" />
         
        </div>
      </Form>
    </Container>
  );
}
