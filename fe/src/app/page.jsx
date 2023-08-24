import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
	return (
		<>
			<header className={styles.header}>
				<Link href={'/'} className={styles.logo}>
					Logo
				</Link>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Link href={'/'}>Home</Link>
						</li>
						<li className={styles.listItem}>
							<Link href={'/'}>Our services</Link>
						</li>
						{/* La ruta de doctores hacia lista de doctores necesita autenticación, sino redirige a sign-in */}
						<li className={styles.listItem}>
							<Link href={'/'}>Doctors</Link>
						</li>
					</ul>
					<div className={styles.linkContainer}>
						<Link href='/sign-up/patient' className={[styles.button, styles.buttonSignup].join(' ')}>
							I{"'"}m a patient
						</Link>
						<Link href='/sign-up/doctor' className={[styles.button, styles.buttonSignup].join(' ')}>
							I{"'"}m a doctor
						</Link>
						<Link href='/sign-in' className={[styles.button, styles.buttonSignin].join(' ')}>
							Log in
						</Link>
					</div>
				</nav>
			</header>
			<main className={styles.main}>
				<section className={styles.container}>
					<div className={styles.bannerInfo}>
						<h1 className={styles.title}>Welcome to Klinika</h1>
						<p className={styles.slogan}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam ducimus
							quis deleniti nihil voluptates perferendis fugit quaerat labore. Exercitationem veniam at qui
							nesciunt dolore cum amet enim dolor!{' '}
						</p>
						<Link href='/appointment' className={[styles.button, styles.buttonAppointment].join(' ')}>
							Get an appointment
						</Link>
					</div>
					<div className={styles.backgroundImage}></div>
					<div className={styles.signupButtonContainer}>
						<Link href='/sign-up/patient' className={[styles.button, styles.buttonSignup].join(' ')}>
							I{"'"}m a patient
						</Link>
						<Link href='/sign-up/doctor' className={[styles.button, styles.buttonSignup].join(' ')}>
							I{"'"}m a doctor
						</Link>
						<p className={styles.text}>
							Already have an account? <Link href={'/sign-in'}>Log in</Link>
						</p>
					</div>
				</section>
				<section className={styles.servicesSection}>
					<h2 className={styles.subtitle}>Services</h2>
					<div className={styles.servicesContainer}>
						<article className={styles.serviceCard}>
							<div className={styles.serviceIcon}></div>
							<h4 className={styles.serviceTitle}>Dentistry</h4>
							<p className={styles.serviceDescription}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem tenetur
								necessitatibus ducimus consectetur est libero laborum dolores voluptatibus officia tempore
								assumenda maiores error qui, aut quo sapiente adipisci natus?
							</p>
							<Link href={'/'} className={styles.serviceLink}>
								Get started
							</Link>
						</article>
						<article className={styles.serviceCard}>
							<div className={styles.serviceIcon}></div>
							<h4 className={styles.serviceTitle}>Dentistry</h4>
							<p className={styles.serviceDescription}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem tenetur
								necessitatibus ducimus consectetur est libero laborum dolores voluptatibus officia tempore
								assumenda maiores error qui, aut quo sapiente adipisci natus?
							</p>
							<Link href={'/'} className={styles.serviceLink}>
								Get started
							</Link>
						</article>
						<article className={styles.serviceCard}>
							<div className={styles.serviceIcon}></div>
							<h4 className={styles.serviceTitle}>Dentistry</h4>
							<p className={styles.serviceDescription}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem tenetur
								necessitatibus ducimus consectetur est libero laborum dolores voluptatibus officia tempore
								assumenda maiores error qui, aut quo sapiente adipisci natus?
							</p>
							<Link href={'/'} className={styles.serviceLink}>
								Get started
							</Link>
						</article>
					</div>
				</section>
				<section className={styles.appointmentSection}>
					<h2 className={styles.subtitle}>Meet your specialist</h2>
					<div className={styles.appointmentContainer}>
						<article className={styles.appointmentCard}>
							<div className={styles.appointmentImage}></div>
							<div className={styles.appointmentInfo}>
								<p className={styles.appointmentTitle}>Dr Full Name</p>
								<p className={styles.appointmentSpecialty}>Specialty</p>
								<p className={styles.appointmentDescription}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni soluta
									necessitatibus enim quam impedit quas non ratione adipisci.
								</p>
								<p className={styles.appointmentDescription}>
									<span className={styles.appointmentCardIcon}></span>4.5 (2734 reviews)
								</p>
								<Link href={'/'} className={styles.appointmentLink}>
									Appointment
								</Link>
							</div>
						</article>
					</div>
				</section>
				<section className={styles.whyUsSection}>
					<h2 className={styles.subtitle}>Why you choose us</h2>
					<div className={styles.whyUsContainer}>
						<ul className={styles.whyUsList}>
							<li className={styles.whyUsItem}>
								<h4 className={styles.whyUsItemTitle}>Motive One</h4>
								<p className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</p>
							</li>
							<li className={styles.whyUsItem}>
								<h4 className={styles.whyUsItemTitle}>Motive Two</h4>
								<p className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</p>
							</li>
							<li className={styles.whyUsItem}>
								<h4 className={styles.whyUsItemTitle}>Motive Three</h4>
								<p className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</p>
							</li>
						</ul>
						<div className={styles.whyUsImage}></div>
					</div>
				</section>
				<section className={styles.patientSection}>
					<h2 className={styles.subtitle}>Our services in the eyes of our patients</h2>
					<div className={styles.patientContainer}>
						<article className={styles.patientCard}>
							<div className={styles.patientCardHeader}>
								<div className={styles.patientIcon}></div>
								<h4 className={styles.patientTitle}>Full Name</h4>
							</div>
							<div className={styles.patientTagContainer}>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
							</div>
							<p className={styles.patientDescription}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nepellat?
							</p>
						</article>
						<article className={styles.patientCard}>
							<div className={styles.patientCardHeader}>
								<div className={styles.patientIcon}></div>
								<h4 className={styles.patientTitle}>Full Name</h4>
							</div>
							<div className={styles.patientTagContainer}>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
							</div>
							<p className={styles.patientDescription}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nepellat?
							</p>
						</article>
					</div>
				</section>
				<section className={styles.appSection}>
					<h2 className={styles.subtitle}>Download our mobile app</h2>
					<div className={styles.appContainer}>
						<div className={styles.appImage}>Image</div>
						<div className={styles.appInfo}>
							<p className={styles.appDescription}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, blanditiis soluta. Culpa
								suscipit nostrum dicta cupiditate magnam officia fugiat nesciunt, non vitae illum excepturi,
								sunt iste, fuga optio odio quo.
							</p>
							<div className={styles.appLinkContainer}>
								<Link href={'/'} className={styles.appLink}>
									Playstore
								</Link>
								<Link href={'/'} className={styles.appLink}>
									Appstore
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className={styles.footer}>
				<div className={styles.companyDetailsContainer}>
					<h3 className={styles.companyTitle}>Company{"'"}s Name</h3>
					<p className={styles.companyDescription}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi vero, omnis in
						distinctio soluta perferendis et magnam quo voluptatem ipsa recusandae ipsam veritatis! Vero a
						tempora odio maiores maxime.
					</p>
				</div>
				<div className={styles.footerLinksContainer}>
					<ul className={styles.footerList}>
						<li className={styles.footerListItem}>
							<h4 className={styles.footerListItemTitle}>Services</h4>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								About
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Home
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Services
							</Link>
						</li>
					</ul>
					<ul className={styles.footerList}>
						<li className={styles.footerListItem}>
							<h4 className={styles.footerListItemTitle}>Services</h4>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								About
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Home
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Services
							</Link>
						</li>
					</ul>
					<ul className={styles.footerList}>
						<li className={styles.footerListItem}>
							<h4 className={styles.footerListItemTitle}>Services</h4>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								About
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Home
							</Link>
						</li>
						<li className={styles.footerListItem}>
							<Link href={'/'} className={styles.footerLink}>
								Services
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default HomePage;
