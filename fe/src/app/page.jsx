import styles from './page.module.css';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	List,
	ListItem,
	Stack,
	Typography,
} from '@mui/material';
import Link from '@mui/material/Link';

const HomePage = () => {
	return (
		<>
			<header className={styles.header}>
				<Link href={'/'} className={styles.logo}>
					Logo
				</Link>
				<nav className={styles.nav}>
					<div className={styles.linkContainer}>
						<ul className={styles.list}>
							<li className={styles.listItem}>
								<Link href={'/'} underline='none' color={'#2e2e2e'}>
									Home
								</Link>
							</li>
							<li className={styles.listItem}>
								<Link href={'/'} underline='none' color={'#2e2e2e'}>
									About
								</Link>
							</li>
							<li className={styles.listItem}>
								<Link href={'/'} underline='none' color={'#2e2e2e'}>
									Contact
								</Link>
							</li>
						</ul>
						<Button
							variant='contained'
							href='/sign-up/patient'
							size='medium'
							sx={{ textTransform: 'none' }}
							color='secondary'
						>
							I'm a patient
						</Button>
						<Button
							variant='contained'
							href='/sign-up/doctor'
							size='medium'
							sx={{ textTransform: 'none' }}
							color='secondary'
						>
							I'm a doctor
						</Button>
					</div>
				</nav>
			</header>
			<Box component={'main'} className={styles.main}>
				<Box
					component={'section'}
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						alignItems: 'start',
						justifyContent: 'center',
						overflow: 'hidden',
					}}
				>
					<Stack
						spacing={2}
						direction={'column'}
						sx={{ padding: '2rem 0', width: '50%', xs: { width: '50%' } }}
					>
						<Typography variant='h1' fontSize={{ xs: '1.5rem', sm: '2rem' }}>
							Welcome to Klinika
						</Typography>
						<Typography variant='body1' className={styles.slogan}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam ducimus
							quis deleniti nihil voluptates perferendis fugit quaerat labore. Exercitationem veniam at qui
							nesciunt dolore cum amet enim dolor!
						</Typography>
						<Button
							variant='contained'
							href='/appointment'
							size='medium'
							sx={{ textTransform: 'none', width: 'fit-content' }}
							color='secondary'
						>
							Get an appointment
						</Button>
					</Stack>
					<Box
						component={'img'}
						sx={{ width: { xs: '100%', sm: '50%', height: { xs: '35vh', sm: '70vh' } } }}
						src={
							'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
						}
					></Box>
					<Stack direction='column' display={{ sm: 'none' }} spacing={2} paddingY={2} width={'100%'}>
						<Button
							variant='contained'
							href='/sign-up/patient'
							size='medium'
							sx={{ textTransform: 'none' }}
							fullWidth
							color='secondary'
						>
							I'm a patient
						</Button>
						<Button
							variant='contained'
							href='/sign-up/doctor'
							size='medium'
							sx={{ textTransform: 'none' }}
							fullWidth
							color='secondary'
						>
							I'm a doctor
						</Button>
						<Typography className={styles.text}>
							Already have an account?
							<Link href={'/sign-in'} underline='hover'>
								Log in
							</Link>
						</Typography>
					</Stack>
				</Box>
				<Box
					component={'section'}
					paddingY={6}
					rowGap={2}
					sx={{ display: 'flex', flexDirection: 'column' }}
				>
					<Typography variant='h2' className={styles.subtitle}>
						Services
					</Typography>
					<Stack
						direction='row'
						spacing={2}
						justifyContent='center'
						paddingY={2}
						alignItems={'center'}
						overflow={'auto'}
					>
						<Card variant='outlined' sx={{ maxWidth: 300, backgroundColor: '#f5f5f5' }}>
							<CardContent>
								<Stack direction='column' spacing={2}>
									<Box className={styles.serviceIcon}></Box>
									<Typography variant='h4' className={styles.serviceTitle}>
										Dentistry
									</Typography>
									<Typography variant='body2' className={styles.serviceDescription}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem tenetur
										necessitatibus ducimus consectetur est libero laborum dolores voluptatibus officia tempore
										assumenda maiores error qui, aut quo sapiente adipisci natus?
									</Typography>
								</Stack>
							</CardContent>
							<CardActions>
								<Link href={'/'} paddingX={2} paddingY={1} underline='hover' color={'#2e2e2e'}>
									Get started
								</Link>
							</CardActions>
						</Card>
					</Stack>
				</Box>
				<section className={styles.appointmentSection}>
					<Typography className={styles.subtitle}>Meet your specialist</Typography>
					<Stack direction='row' spacing={2} paddingY={2}>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								sx={{ height: 130 }}
								image='https://w0.peakpx.com/wallpaper/302/817/HD-wallpaper-plain-colour.jpg'
								title='green iguana'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Dr Full Name
								</Typography>
								<Typography variant='subtitle1'>Specialty</Typography>
								<Typography variant='body1' color='text.secondary'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni soluta
									necessitatibus enim quam impedit quas non ratione adipisci.
								</Typography>
								<Typography variant='body2'>4.5 (2734 reviews)</Typography>
							</CardContent>
							<CardActions>
								<Button size='small' href='/' variant='outlined'>
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Stack>
				</section>
				<Box component={'section'} className={styles.whyUsSection}>
					<Typography variant='h2' className={styles.subtitle}>
						Why you choose us
					</Typography>
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} paddingY={2}>
						<List sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '50%' } }}>
							<ListItem alignItems='flex-start' sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant='h4' className={styles.whyUsItemTitle}>
									Motive One
								</Typography>
								<Typography variant='body2' className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</Typography>
							</ListItem>
							<ListItem alignItems='flex-start' sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant='h4' className={styles.whyUsItemTitle}>
									Motive Two
								</Typography>
								<Typography variant='body2' className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</Typography>
							</ListItem>
							<ListItem alignItems='flex-start' sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant='h4' className={styles.whyUsItemTitle}>
									Motive Three
								</Typography>
								<Typography variant='body2' className={styles.whyUsItemDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam minus consectetur
									mollitia, voluptas quibusdam aliquam
								</Typography>
							</ListItem>
						</List>
						<Box
							component={'img'}
							sx={{ minHeight: 200, width: { xs: '100%', sm: '50%' }, backgroundColor: '#f5f5f5' }}
						></Box>
					</Stack>
				</Box>
				<Box component={'section'} className={styles.patientSection}>
					<Typography variant='h2' className={styles.subtitle}>
						Our services in the eyes of our patients
					</Typography>
					<Stack direction='row' spacing={2} paddingY={2}>
						<Card sx={{ maxWidth: 300, backgroundColor: '#bbbbbb' }}>
							<CardHeader
								sx={{ color: '#2e2e2e', fontSize: '1.5rem', fontWeight: 'bold' }}
								avatar={
									<Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64 }} aria-label='profile'>
										R
									</Avatar>
								}
								title='Full Name'
							/>
							<Stack direction='row' spacing={1} paddingX={2}>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
								<span className={styles.patientTag}></span>
							</Stack>
							<CardContent>
								<Typography gutterBottom variant='body2'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nepellat?
								</Typography>
							</CardContent>
						</Card>
					</Stack>
				</Box>
				<Box
					component={'section'}
					sx={{ display: 'flex', flexDirection: 'column', rowGap: 4, paddingY: 2 }}
				>
					<Typography variant='h2' className={styles.subtitle}>
						Download our mobile app
					</Typography>
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} columnGap={4} height={300}>
						<Box
							component={'img'}
							sx={{
								width: { xs: '100%', sm: '50%' },
								backgroundColor: '#f5f5f5',
								height: '100%',
							}}
						></Box>
						<Stack
							direction={'column'}
							spacing={2}
							sx={{ width: { xs: '100%', sm: '50%' } }}
							justifyContent={'center'}
						>
							<Typography variant='body2' textAlign={'center'}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, blanditiis soluta. Culpa
								suscipit nostrum dicta cupiditate magnam officia fugiat nesciunt, non vitae illum excepturi,
								sunt iste, fuga optio odio quo.
							</Typography>
							<Stack direction={'row'} spacing={2} justifyContent={'center'}>
								<Button href={'/'} color='inherit' variant='outlined' sx={{ textTransform: 'none' }}>
									Playstore
								</Button>
								<Button href={'/'} color='inherit' variant='outlined' sx={{ textTransform: 'none' }}>
									Appstore
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</>
	);
};

export default HomePage;