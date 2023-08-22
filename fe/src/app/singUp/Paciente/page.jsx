import styles from './paciente.module.css'
export default function PacientSingUp() {
  return (
    <main className={styles.main}>

      <img src="/" alt="logo" />
      <form className={styles.form}>
        <input type="text" className={styles.input}placeholder="Name & Surname"/>
        <div className={styles.section}>
          <input className={styles.specialinput} type="date"  placeholder="Birthdate"/>
          <select className={styles.specialinput} placeholder=''name="gender" id="gen">
            <option value="Select">Gender</option>
            <option value="Male">Male</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input className={styles.input} type="text" placeholder="City" />
        <input className={styles.input} type="number" placeholder="Phone"/>
        <input className={styles.input} type="email" name="email" id="email" placeholder="email" />
        <input className={styles.input} type="password" name="passw" id="passw" placeholder="password" />
        <input className={styles.checkbox} id='rememberme'  type="checkbox" value='rememberme'  name="rememberme"/>
        <label className={styles.checkbox} htmlFor="remember me">Remember me</label>
        <button className={styles.input} type="submit">Sing up</button>
      </form>
    </main>
  )
}
