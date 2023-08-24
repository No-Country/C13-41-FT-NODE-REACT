"use client";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import styles from './patient.module.css'
import {patientSchema} from '../validations/userPacient'
export default function PacientSingUp() {
  const createUser = async (e) => {
    e.preventDefault()
    
    const formData = {
      name: e.target.name.value,
      birthdate: e.target.birthdate.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
      checkbox: e.target.rememberme.checked
    };

    try {
      await patientSchema.validate(formData);
      console.log('Form data is valid');
      // Proceed with  sending data to the server
    } catch (error) {
      console.error('Form data validation error:', error.message);
      // Handle error, show error messages to the user, etc.
    }
  }
  const showPassword = (e) => {
    let password = document.getElementById('passw')
    password.setAttribute('type', 'text')
    e.target.style.display = 'none'
    document.querySelector('.eyeInvisible').style.display = 'block'
  }
  const hidePassword = (e) => {
    let password = document.getElementById('passw')
    password.setAttribute('type', 'password')
    e.target.style.display = 'none'
    document.querySelector('.eyeVisible').style.display = 'block'
  }
  return (
    <main className={styles.main}>

      <img src="/" alt="logo" />
      <form onSubmit={createUser} className={styles.form}>
        <input name='name' type="text" className={styles.input}placeholder="Name & Surname"/>
        <div className={styles.section}>
          <input className={styles.specialinput} type="date" name='birthdate'  placeholder="Birthdate"/>
          <select className={styles.specialinput} placeholder=''name="gender" id="gen">
            <option value="Select">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <select  className={styles.input}autoComplete='off' required id="country" name="country">
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
          <option value="Venezuela">Ecuador</option>
          <option value="Venezuela">Bolivia</option>
        </select> 
        <input className={styles.input} name='phone' type="number" placeholder="Phone"/>
        <input className={styles.input}  type="text" name="email" id="email" placeholder="email" />
        <div className={styles.passwordContainer}>
        <input className={styles.passwordInput} autoComplete='on' type="password" name="password" id="passw" placeholder="password" />
        <AiOutlineEye className={ `${styles.AiOutlineEye} eyeVisible`} onClick={showPassword}/>
        <AiOutlineEyeInvisible className="eyeInvisible" onClick={hidePassword} style={{display: 'none'}}/>
        </div>
        <input className={styles.checkbox} id='rememberme'  type="checkbox" value='rememberme'  name="rememberme"/>
        <label className={styles.checkbox} htmlFor="remember me">Remember me</label>
        <input  className={styles.input} type="submit" value='Sing up' placeholder='singUp'/>
      </form>
    </main>
  )
}
