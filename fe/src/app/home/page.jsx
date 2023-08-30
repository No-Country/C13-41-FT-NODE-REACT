import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
	Container,
} from '@mui/material';
import { StarBorderOutlined } from '@mui/icons-material';
import React from 'react';
import Link from 'next/link';
import fakeConsultations from './fakeConsultationData';

const UserHomePage = () => {
	return (
		<Container
			component={'main'}
			sx={{ display: 'flex', flexDirection: 'column', rowGap: 4, padding: 4 }}
		>
			<Box component={'section'}>
				<Typography variant={'h1'} fontSize={'2rem'}>
					Good morning, <br /> Sophie!
				</Typography>
			</Box>
			<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
				<Box component={'div'}>
					<Typography variant={'h3'} fontSize={'1.5rem'}>
						Upcoming appointments
					</Typography>
				</Box>
				<Box
					component={'div'}
					display={'flex'}
					alignItems={'center'}
					columnGap={2}
					rowGap={2}
					sx={{ flexWrap: 'wrap' }}
				>
					{fakeConsultations &&
						fakeConsultations.map(consultation => {
							return (
								<Card sx={{ minWidth: 345, maxWidth: 400, backgroundColor: '#D9D9D9' }}>
									<CardHeader
										avatar={
											<Avatar sx={{ backgroundColor: '#34A0A4' }} aria-label='recipe'>
												{consultation.doctor.fullname.charAt(0).toUpperCase()}
											</Avatar>
										}
										action={
											<IconButton aria-label='settings'>
												<StarBorderOutlined />
											</IconButton>
										}
										title={consultation.doctor.fullname}
										subheader={consultation.doctor.speciality}
									/>

									<CardContent>
										<Typography variant='body2'>
											{new Date(consultation.consultTimestamp).toDateString()}
										</Typography>
										<Typography variant='body2'>Mail: {consultation.doctor.email}</Typography>
									</CardContent>
								</Card>
							);
						})}
				</Box>
			</Box>
			<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
				<Box component={'div'}>
					<Typography variant={'h3'} fontSize={'1.5rem'}>
						Services
					</Typography>
				</Box>
				<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
					<Box component={'div'} display={'flex'} alignItems={'center'} columnGap={2}>
						<Box
							component={'article'}
							display={'flex'}
							alignItems={'end'}
							justifyContent={'center'}
							padding={2}
							sx={{ height: '10rem', width: '10rem', backgroundColor: '#D9D9D9', borderRadius: '0.5rem' }}
						>
							<Link href={'/doctors'}>
								<Typography variant={'h4'} fontSize={'1rem'}>
									Doctors
								</Typography>
							</Link>
						</Box>
						<Box
							component={'article'}
							display={'flex'}
							alignItems={'end'}
							justifyContent={'center'}
							padding={2}
							sx={{ height: '10rem', width: '10rem', backgroundColor: '#D9D9D9', borderRadius: '0.5rem' }}
						>
							<Typography variant={'h4'} fontSize={'1rem'}>
								Medications
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default UserHomePage;
