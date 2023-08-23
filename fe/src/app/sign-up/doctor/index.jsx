"use client";

import React from 'react'
import styles from "./styles.module.css"
import { useFormik } from 'formik';
import axios from 'axios';

export default function Doctor (){

  

  const formik = useFormik({

    initialValues: {

      user: "doctor",
      fullname: "",
      email: "",
      gender: "Masculino",
      country: "Colombia",
      phone: "",
      password: "",
      dob: "",
      license: "",
      specialty: "",
      education: "",

    },
    
    onSubmit: values => {

      let data = (JSON.stringify (values));
      console.log (data);

      axios.post('/register/doctor', {

        data: data,

      })

      .then(function (response) {

        console.log(response);

      })

      .catch(function (error) {

        console.log(error);

      });

    },

  });



  return (

    <div className={styles.contenedorFormulario}>
      <form className={styles.Formulario} onSubmit={formik.handleSubmit} >

        <label htmlFor="fullname">Ingrese su Nombre y Apellido</label>
        <input placeholder='Solo se aceptan caracteres tipo letra' autoComplete='off' required id="fullname" name="fullname" type="text" onChange={formik.handleChange} value={formik.values.fullname}/>

        <label htmlFor="dob">Fecha de nacimiento</label>
        <input lang='es' autoComplete='off' required id="dob" name="dob" type="date" onChange={formik.handleChange} value={formik.values.dob}/>

        <label htmlFor="email">Ingrese su E-Mail</label>
        <input autoComplete='off' required id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>

        <label htmlFor="gender">Defina su Genero</label>
        <select autoComplete='off' required id="gender" name="gender" onChange={formik.handleChange} value={formik.values.gender}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>

        <label htmlFor="country">Ingrese su Pais</label>
        <select autoComplete='off' required id="country" name="country" onChange={formik.handleChange} value={formik.values.country}>
          <option value="Argentina">Argentina</option>
          <option value="Colombia">Colombia</option>
          <option value="Chile">Chile</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Honduras">Honduras</option>
          <option value="Mexico">Mexico</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Peru">Peru</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Venezuela">Venezuela</option>
        </select>

        <label htmlFor="phone">Ingrese su Numero Telefonico</label>
        <input placeholder='Incluyendo codigo pais ejemplo: +56977777777' autoComplete='off' required id="phone" name="phone" type="tel" inputMode='numeric' onChange={formik.handleChange} value={formik.values.phone}/>

        <label htmlFor="license">Ingrese su Numero de Matricula/Colegiatura profesional.</label>
        <input placeholder='Solo se aceptan caracteres tipo letra' autoComplete='off' required id="license" name="license" type="text" onChange={formik.handleChange} value={formik.values.license}/>

        <label htmlFor="specialty">Ingrese su Especialidad.</label>
        <input placeholder='Solo se aceptan caracteres tipo letra' autoComplete='off' required id="specialty" name="specialty" type="text" onChange={formik.handleChange} value={formik.values.specialty}/>

        <label htmlFor="education">Ingrese su Facultad de Egreso.</label>
        <input placeholder='Por ejemplo UNAM' autoComplete='off' required id="education" name="education" type="text" onChange={formik.handleChange} value={formik.values.education}/>

        <label htmlFor="password">Ingrese su Contraseña</label>
        <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder='8 Caracteres minimo y tener al menos un numero y una letra mayuscula' autoComplete='off' required id="password" name="password" type="password" inputMode='text' onChange={formik.handleChange} value={formik.values.password}/>


        <button type="submit">Registrar</button>
      </form>
    </div>

  );
};