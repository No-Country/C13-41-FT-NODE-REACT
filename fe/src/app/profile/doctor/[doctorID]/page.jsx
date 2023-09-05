'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { useAuth } from '@/contexts/Auth.context';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

const PublicDoctorProfilePage = () => {
	const { userData } = useAuth();
	return (
		<Container>
			<Box
				display={'flex'}
				flexDirection={'column'}
				alignItems={{ xs: 'center', sm: 'start' }}
				minHeight={'100vh'}
				padding={'4rem 0 4rem'}
			>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent={{ xs: 'center', sm: 'start' }}
					alignItems={'center'}
					spacing={4}
				>
					<Avatar
						sx={{
							height: { xs: '7.5rem', sm: '5rem' },
							width: { xs: '7.5rem', sm: '5rem' },
							fontSize: { xs: '3rem', sm: '3rem' },
							fontWeight: 500,
						}}
						alt={userData && userData.fullname}
						src={userData && userData.avatar}
						imgProps={{
							style: {
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: '50%',
							},
						}}
					>
						{userData && userData.fullname.charAt(0).toUpperCase()}
					</Avatar>
					<Stack direction={'column'} spacing={1} alignItems={{ xs: 'center', sm: 'start' }}>
						<Typography
							variant='h1'
							sx={{
								color: colors.text,
								fontWeight: 600,
								textTransform: 'none',
								fontSize: { xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 },
							}}
						>
							{userData && userData.fullname}
						</Typography>
						<Typography
							variant='body1'
							sx={{
								color: colors.text,
								fontWeight: 400,
								textTransform: 'none',
								fontSize: { xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body },
							}}
						>
							{userData?.speciality ? userData.speciality : 'Especialidad no asignada'}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</Container>
	);
};

export default PublicDoctorProfilePage;
