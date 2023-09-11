'use client';
import { useAuth } from '@/contexts/Auth.context';
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import AvatarProfile from './AvatarProfile';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { EmailOutlined, Payment, PhoneAndroidOutlined, PlaceOutlined } from '@mui/icons-material';
import CommentInput from './CommentInput';
import { useEffect, useState } from 'react';
import { getSingleDoctor } from '@/lib/getSingleDoctor';
import { useRouter } from 'next/navigation';
import Comments from './Comments';
import ButtonsProfile from './ButtonsProfile';
import InfoProfile from './InfoProfile';
import ProfessionalStatement from './ProfessionalStatement';
import ContactProfile from './ContactProfile';
const PublicDoctorProfilePage = ({ params }) => {
	const [doctorData, setDoctorData] = useState();
	const { push } = useRouter();
	const { userData } = useAuth();

	const fetchDoctorData = async () => {
		const doctorData = await getSingleDoctor(params.doctorID);
		// Pregunto si existe el id del médico, sino lo redirigo
		if (doctorData.data.medic === null) push('/not-found');
		setDoctorData(doctorData.data.medic);
	};
	console.log(doctorData);
	useEffect(() => {
		fetchDoctorData();
	}, []);

	return (
		<Container sx={{ paddingY: 4, minHeight: '100vh' }}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<Stack direction={'column'} spacing={4}>
						<AvatarProfile doctorData={doctorData} />
						<ButtonsProfile userData={userData} doctorData={doctorData} />
						<Stack direction={'row'} spacing={1} justifyContent={'start'} alignItems={'center'}>
							<PlaceOutlined sx={{ color: colors.locationIcon }} />
							<Typography variant='body2' className='inter' color={colors.text}>
								{doctorData?.country}
							</Typography>
						</Stack>
						<InfoProfile />
						<ProfessionalStatement doctorData={doctorData} />
						<ContactProfile doctorData={doctorData} />
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
							Comentarios
						</Typography>
						{userData && !userData.hasOwnProperty('profesionalid') && (
							<CommentInput doctorData={doctorData} userData={userData} />
						)}
						<Comments doctorData={doctorData} />
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PublicDoctorProfilePage;
