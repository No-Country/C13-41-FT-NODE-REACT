import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>Welcome to Klinika</h1>
				<div className={styles.backgroundImage}></div>
				<div className={styles.linkContainer}>
					<Link href='/sign-up/patient' className={styles.button}>
						Sign up as patient
					</Link>
					<Link href='/sign-up/doctor' className={styles.button}>
						Sign up as doctor
					</Link>
					<p className={styles.text}>
						Alread have an account? <Link href='/sign-in'>Log in</Link>
					</p>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
