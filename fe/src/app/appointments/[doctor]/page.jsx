'use client';
import {
	Avatar,
	Container,
	Typography,
	Box,
	Step,
	Button,
	Stepper,
	StepLabel,
} from '@mui/material';
import { useState } from 'react';

const steps = ['Select a date', 'Confirm personal details', 'Complete the payment'];
const AppointmentInfoPage = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());

	// Implementar una página donde se concierte una cita con el medico eligiendo sus horarios disponibles en
	// el componente de tres pasos
	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Container sx={{ backgroundColor: '#f2f2f2', paddingY: 4, marginTop: 2 }}>
			<Typography variant='h1' fontSize={'2rem'} paddingY={2}>
				Appointment Info
			</Typography>
			<Box component='section' display={'flex'} flexDirection={'row'} columnGap={8} paddingY={4}>
				<Box
					component='article'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						width: '25%',
					}}
				>
					<Avatar backgroundColor='#34A0A4' sx={{ width: 100, height: 100 }} />
					<Typography variant='h4'>Dr. Fullname</Typography>
					<Typography variant='body1'>Speciality</Typography>
					<Typography variant='body2'>Reviews</Typography>
				</Box>
				<Box
					component='div'
					sx={{
						width: '75%',
					}}
				>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<>
							<Typography sx={{ mt: 2, mb: 1 }}>Successful appointment</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleReset} href='/home'>
									Back home
								</Button>
							</Box>
						</>
					) : (
						<>
							<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
							</Box>
						</>
					)}
					{activeStep === 0 && <Box>Este es el primer paso donde se selecciona el horario</Box>}
				</Box>
			</Box>
		</Container>
	);
};

export default AppointmentInfoPage;
