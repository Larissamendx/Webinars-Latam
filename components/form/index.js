import Head from 'next/head'
import { React, useState } from 'react'
// import styles from '../styles/Home.module.css';
import emailjs from '@emailjs/browser'

export default function Formulario() {
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
    <div>
      <form onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Digite seu país"
          onChange={e => setPais(e.target.value)}
          value={pais}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Digite sua empresa"
          onChange={e => setEmpresa(e.target.value)}
          value={empresa}
          required
        />
        <input
          className="input"
          type="checkbox"
          placeholder="Digite sua empresa"
          onChange={e => setEmpresa(e.target.value)}
          value={empresa}
          required
        />
        <label for="scales">
          Estou ciente que o Grupo Report possui respeito aos meus Dados
          Pessoais e à Lei Geral de Proteção de Dados Brasileira, de forma que
          os dados aqui inseridos serão utilizados exclusivamente para
          gerenciamento das inscrições no programa "Conexión ESG: diálogos
          Latam", incluindo-se o envio de mensagens referente ao mesmo e, e os
          dados serão eliminados após a conclusão do programa. Caso eu me oponha
          a este tratamento não devo marcar essa opção e, consequentemente, não
          poderei participar do programa.
        </label>
        <input
          className="input"
          type="checkbox"
          placeholder="Digite sua empresa"
          onChange={e => setEmpresa(e.target.value)}
          value={empresa}
        />
        <label for="scales">
        Aceito receber informações sobre outras iniciativas e serviços do grupo report
        </label>

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  )
}
