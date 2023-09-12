'use client';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import AppointmentCard from '../../../Components/Appointments/AppointmentCard';
import { getAllConsultsByDoctor, getAllConsultsByPatient } from '@/lib/getAllConsults';
import { getAllPatients } from '@/lib/getAllPatients';
import { getAllDoctors } from '@/lib/getAllDoctors';

const UpcomingAppointments = ({ userData }) => {
	const [allConsults, setAllConsults] = useState([]);
	const [allDoctors, setAllDoctors] = useState([]);
	const [allPatients, setAllPatients] = useState([]);
	const fetchConsultations = async () => {
		if (!userData) return;

		try {
			let consultsData;
			if (userData.profesionalid) {
				consultsData = await getAllConsultsByDoctor(userData.id);
			} else {
				consultsData = await getAllConsultsByPatient(userData.id);
			}

			const patientsData = await getAllPatients();
			const doctorsData = await getAllDoctors();
			setAllConsults(consultsData.data.consult);
			setAllPatients(patientsData.data.patient);
			setAllDoctors(doctorsData.data.medic);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchConsultations();
	}, [userData]);

	return (
		<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
			<Box component={'div'}>
				<Typography
					variant='h4'
					color={colors.text}
					fontWeight={500}
					className='inter'
					fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
				>
					Upcoming appointments
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{allConsults ? (
					allConsults.map((consult, idx) => {
						// Encuentra el paciente correspondiente usando su ID
						const patient = allPatients.find(patient => patient.id === consult.patientId);
						// Encuentra el médico correspondiente usando su ID
						const doctor = allDoctors.find(doctor => doctor.id === consult.medicId);
						return (
							<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
								{patient && doctor ? (
									<AppointmentCard
										consultation={consult}
										patient={patient}
										doctor={doctor}
										userData={userData}
									/>
								) : (
									<Typography>Loading...</Typography>
								)}
							</Grid>
						);
					})
				) : (
					<Grid item xs={12}>
						<Typography>No consults programmed</Typography>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default UpcomingAppointments;
