'use client';
import { useAuth } from '@/contexts/Auth.context';
import { Box, Card, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import AvatarProfile from './AvatarProfile';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import {
	ChatBubbleRounded,
	EmailOutlined,
	Payment,
	PhoneAndroidOutlined,
	PlaceOutlined,
	Settings,
	Videocam,
} from '@mui/icons-material';

import { useEffect, useState } from 'react';
import { getSinglePatient } from '@/lib/getSinglePatient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PatientProfilePage = ({ params }) => {
	const [patientData, SetPatientData] = useState();
	const { push } = useRouter();
	const { userData } = useAuth();

	const fetchPatientData = async () => {
		const patientData = await getSinglePatient(params.patientID);

		if (patientData.data.patient === null) push('/not-found');
		SetPatientData(patientData.data.patient);
	};

	useEffect(() => {
		fetchPatientData();
	}, []);

	return (
		<Container sx={{ paddingY: 4, minHeight: '100vh' }}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<Stack direction={'column'} spacing={4}>
						<AvatarProfile patientData={patientData} />
						<Stack
							direction={'row'}
							spacing={1}
							justifyContent={{ xs: 'center', sm: 'start' }}
							alignItems={'center'}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: colors.cardBackground,
									borderRadius: '0.5rem',
									padding: '0.5rem',
								}}
							>
								<ChatBubbleRounded
									sx={{
										color: colors.profileIcon,
									}}
									fontSize='medium'
								/>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: colors.cardBackground,
									borderRadius: '0.5rem',
									padding: '0.5rem',
								}}
							>
								<Videocam
									sx={{
										color: colors.profileIcon,
									}}
									fontSize='medium'
								/>
							</Box>
							{userData?.id === patientData?.id && (
								<Link href={`/profile/patient/${userData?.email}/edit`}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											backgroundColor: colors.cardBackground,
											borderRadius: '0.5rem',
											padding: '0.5rem',
											cursor: 'pointer',
										}}
									>
										<Settings
											sx={{
												color: colors.profileIcon,
											}}
											fontSize='medium'
										/>
									</Box>
								</Link>
							)}
						</Stack>
						<Stack direction={'row'} spacing={1} justifyContent={'start'} alignItems={'center'}>
							<PlaceOutlined sx={{ color: colors.locationIcon }} />
							<Typography variant='body2' className='inter' color={colors.text}>
								{patientData?.country}
							</Typography>
						</Stack>
						<Stack direction={'column'} spacing={1} justifyContent={'start'}>
							<Typography
								variant={'h4'}
								color={colors.text}
								fontWeight={600}
								className='inter'
								fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
							>
								Info
							</Typography>
							<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
								<Card
									sx={{
										width: '10rem',
										height: '7.5rem',
										backgroundColor: colors.cardBackground,
										borderRadius: '0.5rem',
										boxShadow: 'none',
										padding: '1rem',
									}}
								>
									<Stack direction={'row'} spacing={1} alignItems={'center'}>
										<Box
											display={'flex'}
											alignItems={'center'}
											justifyContent={'center'}
											sx={{
												backgroundColor: colors.categoryIcons.doctors,
												borderRadius: '100%',
												width: '2.5rem',
												height: '2.5rem',
											}}
										>
											<Payment
												sx={{
													color: colors.text,
												}}
												fontSize='medium'
											/>
										</Box>
										<Typography
											variant={'h6'}
											color={colors.text}
											fontWeight={500}
											className='inter'
											fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
										>
											Price
										</Typography>
									</Stack>
								</Card>
							</Stack>
						</Stack>
						<Stack direction={'column'} spacing={1} justifyContent={'start'}>
							<Typography
								variant={'h4'}
								color={colors.text}
								fontWeight={600}
								className='inter'
								fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
							>
								Professional statement
							</Typography>
							<Typography
								variant={'body2'}
								color={colors.text}
								fontWeight={400}
								className='inter'
								fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
							>
								{patientData?.resume ? patientData.resume : 'Resume not provided yet.'}
							</Typography>
						</Stack>
						<Stack direction={'column'} spacing={1} justifyContent={'start'}>
							<Typography
								variant={'h4'}
								color={colors.text}
								fontWeight={600}
								className='inter'
								fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
							>
								Contact
							</Typography>
							<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
								<EmailOutlined sx={{ color: colors.buttonIcon }} />
								<Typography
									variant={'body2'}
									color={colors.text}
									fontWeight={400}
									className='inter'
									fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
								>
									{patientData && patientData.email}
								</Typography>
							</Stack>
							{patientData && patientData.phone && (
								<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
									<PhoneAndroidOutlined sx={{ color: colors.buttonIcon }} />
									<Typography
										variant={'body2'}
										color={colors.text}
										fontWeight={400}
										className='inter'
										fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
									>
										{patientData.phone}
									</Typography>
								</Stack>
							)}
						</Stack>
					</Stack>
				</Grid>

			</Grid>
		</Container>
	);
};

export default PatientProfilePage;
