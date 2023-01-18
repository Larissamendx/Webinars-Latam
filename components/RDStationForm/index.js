import React, { useEffect } from 'react'
import { Container } from './styles'
import Head from 'next/head'

function RDStationForm() {
  useEffect(()=> {
    if (document.getElementById('form-webinar-5f5b0c5950345d382ae2')) {
      new RDStationForms('form-webinar-5f5b0c5950345d382ae2', 'UA-173698472-1').createForm();
    }
  },[])
  return(
    <Container>
      <Head>
        <script src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" defer />
      </Head>
      <div role="main" id="form-webinar-5f5b0c5950345d382ae2"></div>
    </Container>
  )
}
export default RDStationForm;