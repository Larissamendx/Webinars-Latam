import Head from 'next/head'
import { React, useState } from 'react'
// import styles from '../styles/Home.module.css';
import emailjs from '@emailjs/browser'
import { Container, Form } from './styles'

export default function Formulario(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pais, setPais] = useState('')
  const [empresa, setEmpresa] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    alert('teste')

    const templateParams = {
      from_name: name,
      email: email,
      pais: pais,
      empresa: empresa
    }

    emailjs
      .send(
        'gmailMessage',
        'template_nkkupep',
        templateParams,
        '8U3LPI7DMH1OYxzFy'
      )
      .then(
        response => {
          console.log(response.text, 'Email enviado')
          setEmail('')
          setName('')
          setPais('')
          setEmpresa('')
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container color={props.color} id="form">
      <Form onSubmit={sendEmail} color={props.color} buttonColor={props.buttonColor}>
        <div className='content'>
          <h2>Formulario de inscripción</h2>
          <div className="input-container">
            <label className='text-input'>
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Escriba su nombre"
                onChange={e => setName(e.target.value)}
                value={name}
                required
              />
            </label>
            <label className='text-input'>
              <span>Correo electrónico</span>
              <input
                type="email"
                placeholder="Escriba su correo electrónico"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
              />
            </label>
            
            <label className='text-input'>
              <span>País</span>
              <input
                type="text"
                placeholder="Escriba su país"
                onChange={e => setPais(e.target.value)}
                value={pais}
                required
              />
            </label>
            
            <label className='text-input'>
              <span>Empresa</span>
              <input
                type="text"
                placeholder="Escriba su empresa"
                onChange={e => setEmpresa(e.target.value)}
                value={empresa}
                required
              />
            </label>
          </div>
        </div>
        <div className='form-footer'>
          <label>
            <input type="checkbox" required />
            <span>
              “Soy consciente de que Grupo Report respeta mis Datos Personales y la Ley General de Protección
              de Dados Brasileira, por lo que los datos ingresados ​​aquí serán utilizados exclusivamente para
              gestión de inscripciones en el programa "Conexión ESG: Dias Latam", incluyendo el envío de
              mensajes relacionados con el mismo y, y los datos se eliminarán después de la finalización del 
              programa. Si yo me opongo a este tratamiento, no debo marcar esta opción y, en consecuencia, 
              no podré participar del programa.
            </span>
          </label>
          
          <label>
            <input type="checkbox" />
            <span>
              Acepto recibir información sobre otras iniciativas y servicios del grupo de informes
            </span>
          </label>

          <input className="button" type="submit" value="Presentar la solicitud" />
        </div>         
      </Form>
    </Container>
  )
}
