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
import { styled } from "@mui/material/styles";
import { useEffect, useState } from 'react';
import PatienteCalendar from '../../../../../Components/Calendar/PatientCalendar';
import { getSingleDoctor } from '@/lib/getSingleDoctor';
import getDoctorSchedule from '@/lib/getDoctorSchedule';
const steps = ['Select a date', 'Confirm personal details', 'Complete the payment'];
import Loader from '../../../../../Components/Loader/Loader';
import ConfirmDetails from '../../../../../Components/Appointments/ConfirmDetails';
import ProceedWithThePayment from '../../../../../Components/Appointments/ProceedWithThePayment';
import { colors } from '@/app/colors';
import { useAppoinmentContext } from '@/contexts/Appoinment.context';
const AppointmentInfoPage = ({params}) => {
	const {
		dayChoosed,
        setDayChoosed,
        timeChoosed,
        setTimeChoosed,
        doctorId,
        setDoctorId,
        serviceId,
				setUserId,
				userId,
        setServiceId,
        setScheduleIdChoosed,
				scheduleIdChoosed
	} = useAppoinmentContext()
	const [activeStep, setActiveStep] = useState(0);
	const [loading, setLoading] = useState(true);
	const [doctorAvatar, setDoctorAvatar] = useState('');
	const [doctorName, setDoctorName] = useState('');
	const [doctorSpeciality, setDoctorSpeciality] = useState('');
	const [doctorSchedule, setDoctorShchedule] = useState([]);
	const [vacationDays, setVacationDays] = useState([])
	const doctorEmail = params.doctor
	const localStorageData = localStorage.getItem('userData');
  const userData = JSON.parse(localStorageData)
  setUserId(userData.id)	
	setServiceId(params.serviceId)
	useEffect(() => {
		const fetchDoctor = async () => {
			const doctorData = await getSingleDoctor(doctorEmail)
			const doctor = doctorData.data.medic
			setDoctorId(doctor.id)
			setDoctorAvatar(doctor?.avatar)
			setDoctorName(doctor.fullname)
			setDoctorSpeciality(doctor.specialties[0].name)
			
		}
		
		fetchDoctor()
	},[])
	useEffect(() => {
		const fetchDoctorSchedule = async () => {
			const dataSchedule = await getDoctorSchedule(doctorId);
			setDoctorShchedule(dataSchedule)
			setLoading(false)

		}
		fetchDoctorSchedule()
	}, [doctorId])
	// Implementar una página donde se concierte una cita con el medico eligiendo sus horarios disponibles en
	// el componente de tres pasos
	const handleNext = () => {
		if(activeStep === 0){
			doctorSchedule.map(s => {
				const time = `${s.initialHour}-${s.finalHour}`
				console.log(time);
				console.log(timeChoosed);
				if(s.day.slice(0,3) === dayChoosed.slice(0,3) && timeChoosed.trim() === time.trim()){
					setScheduleIdChoosed(s.id)
				}
			})
		}else if(activeStep === 1) {
			const dividedTime = timeChoosed.split('-')
			const timeStamp = new Date(dayChoosed).getTime()

    const createConsult = async () => {
      try {
        const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/consult`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(
            {
              diagnostic: 'write the diagnostic',
              recipe: 'the recipe',
              consultTimestamp: timeStamp,
              status: 'programmed',
              resume: 'resume',
              urlFile: 'url',
              medicId: doctorId,
              patientId: userId,
              scheduleId: scheduleIdChoosed,
              serviceId: serviceId
            }
          )
        
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    createConsult()
		}
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};
	const Wrapper = styled(Box)(({ theme }) => ({
		[theme.breakpoints.down("sm")]: {
			flexWrap: 'wrap',
			justifyContent: 'center',
			alingItems: 'center'
		},
	}));
	
	return (
		<>
		{loading ? (
			<Loader/>
		) : (

		<Container sx={{ backgroundColor: '#f2f2f2', paddingY: 4}}>
			<Typography variant='h1' fontSize={'2rem'} paddingY={2}>
				Schedule Appointment
			</Typography>
			<Wrapper component='section' display={'flex'} flexDirection={'row'}   columnGap={8} paddingY={4}>
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
					{
						<Avatar
							alt={doctorName}
							src={`https://mecharcovz-be.onrender.com/public/uploads/avatarmedic/${doctorAvatar}`}
							sx={{width: 100, height: 100}}
							imgProps={{
								style: {
									objectFit: 'cover',
									objectPosition: 'center',
									borderRadius: '50%',
									width:'50%'
								},
							}}
						>
							<Typography variant='h3'>

								{doctorName.charAt(0).toUpperCase()}
							</Typography>
						</Avatar>
					}
				<Typography variant='h5'>Dr. {doctorName}</Typography>
				<Typography variant='body1'>{doctorSpeciality}</Typography>
				<Typography variant='body1'>Price: $20 USD/hr</Typography>
				</Box>
				<Box
					component='div'
					sx={{
						width: '75%',
						backgroundColor: colors.cardBackground,
						padding: 3,
						borderRadius: '2%'
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
							{activeStep === 0 && 
							<Container>
								This is the first step where u have to choose the date and time
								<PatienteCalendar dayChoosed={dayChoosed} 
								setDayChoosed={setDayChoosed} 
								timeChoosed={timeChoosed} 
								setTimeChoosed={setTimeChoosed}
								doctorSchedule={doctorSchedule}
								vacationDays={vacationDays}
								/>
							</Container>}
							{activeStep === 1 && 
							<Container>
								
								<ConfirmDetails   doctorSpeciality={doctorSpeciality} timeChoosed={timeChoosed} dayChoosed={dayChoosed} />
							</Container>
							}
							{activeStep === 2 && 
							<Container>
								<ProceedWithThePayment serviceId={serviceId} doctorId={doctorId}/>
							</Container>
							}
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button disabled={timeChoosed === ''} onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
							</Box>
						</>
					)}
				</Box>
			</Wrapper>
		</Container>
		)}
		</>
	);
};

export default AppointmentInfoPage;