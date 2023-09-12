'use client';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import DoctorCard from '../../../Components/Appointments/DoctorCard';
import { getAllDoctors } from '@/lib/getAllDoctors';

const NearbyDoctorsSection = ({ userData }) => {
	const [nearbyDoctors, setNearbyDoctors] = useState([]);

	const fetchData = async () => {
		try {
			const data = await getAllDoctors();
			const nearbyDoctors = data.data.medic.filter(doctor => {
				return (
					doctor.country.toLowerCase().includes(userData.country.toLowerCase()) &&
					doctor.id !== userData.id
				);
			});
			setNearbyDoctors(nearbyDoctors);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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
					Nearby doctors
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{nearbyDoctors?.length > 0 ? (
					nearbyDoctors?.map((doctor, idx) => {
						return (
							<Grid item key={idx} xs={6} sm={4} lg={2}>
								<DoctorCard doctor={doctor} />
							</Grid>
						);
					})
				) : (
					<Grid item xs={12}>
						<Typography
							variant='body2'
							className='inter'
							color={colors.text}
							fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
						>
							No doctors nearby
						</Typography>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default NearbyDoctorsSection;
