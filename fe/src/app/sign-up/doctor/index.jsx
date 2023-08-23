"use client";

import React from 'react'
import styles from "./styles.module.css"
import InputName from './InputName'
import Dob from './InputDOB';
import Gender from './InputGender';
import Country from './InputCountry';
import Phone from './InputPhone';

export default function Doctor() {

  return (

    <div className={styles.contenedorFormulario}>

        <h1 className={styles.h1Saludo}>Por favor completa el formulario a continuación para registrarte como profesional de la salud.</h1>
        <InputName />
        <Dob />
        <Gender />
        <Country />
        <Phone />
        

    </div>

  )

}