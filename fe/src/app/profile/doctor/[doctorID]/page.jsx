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
import { fakeComments } from './fakeComments';
import CommentCard from './CommentCard';
import CommentInput from './CommentInput';
import { useEffect, useState } from 'react';
import { getSingleDoctor } from '@/lib/getSingleDoctor';
import Link from 'next/link';
const PublicDoctorProfilePage = ({ params }) => {
	const [doctorData, setDoctorData] = useState();
	const doctorID = params.doctorID;
	if (!doctorID) return;

	const { userData } = useAuth();

	const fetchDoctorData = async () => {
		const doctorData = await getSingleDoctor(doctorID);
		setDoctorData(doctorData.data.medic);
	};

	useEffect(() => {
		fetchDoctorData();
	}, []);

	return (
		<Container sx={{ paddingY: 4, minHeight: '100vh' }}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<Stack direction={'column'} spacing={4}>
						<AvatarProfile doctorData={doctorData} />
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
							{userData?.id === doctorData?.id && (
								<Link href={`/profile/doctor/${userData?.email}/edit`}>
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
								{doctorData?.country}
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
										<Payment sx={{ color: colors.profileIcon }} fontSize='medium' />
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
								{doctorData?.resume ? doctorData.resume : 'Resume not provided yet.'}
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
									{doctorData && doctorData.email}
								</Typography>
							</Stack>
							{doctorData && doctorData.phone && (
								<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
									<PhoneAndroidOutlined sx={{ color: colors.buttonIcon }} />
									<Typography
										variant={'body2'}
										color={colors.text}
										fontWeight={400}
										className='inter'
										fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
									>
										{doctorData.phone}
									</Typography>
								</Stack>
							)}
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Stack direction={'column'} spacing={4}>
						<Typography
							variant={'h4'}
							color={colors.text}
							fontWeight={600}
							className='inter'
							fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
						>
							Comentarios ({fakeComments.length})
						</Typography>
						{userData?.email !== doctorData?.email && <CommentInput />}
						{fakeComments.length > 0 ? (
							fakeComments.map((comment, idx) => {
								return <CommentCard key={idx} comment={comment} />;
							})
						) : (
							<Chip
								label='This medic has no comment yet'
								className='inter'
								sx={{
									color: colors.text,
									fontSize: { xs: titleFontSizeMobile.body, sm: titleFontSizeMobile.body },
								}}
							/>
						)}
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PublicDoctorProfilePage;
