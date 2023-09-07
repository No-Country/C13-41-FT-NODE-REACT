'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Avatar, Stack, Typography } from '@mui/material';

const AvatarProfile = ({ doctorData }) => {
	if (!doctorData) return null;

	return (
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
				alt={doctorData && doctorData.fullname}
				src={
					doctorData &&
					`https://mecharcovz-be.onrender.com/public/uploads/${
						doctorData.profesionalid ? 'avatarmedic' : 'avatarpatient'
					}/${doctorData.avatar}`
				}
				imgProps={{
					style: {
						objectFit: 'cover',
						objectPosition: 'center',
						borderRadius: '50%',
					},
				}}
			>
				{doctorData?.fullname?.charAt(0).toUpperCase()}
			</Avatar>
			<Stack direction={'column'} spacing={1} alignItems={{ xs: 'center', sm: 'start' }}>
				<Typography
					className='inter'
					variant='h1'
					sx={{
						color: colors.text,
						fontWeight: 600,
						textTransform: 'none',
						fontSize: { xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 },
					}}
				>
					{doctorData?.fullname}
				</Typography>
				<Typography
					className='inter'
					variant='body1'
					sx={{
						color: colors.text,
						fontWeight: 500,
						textTransform: 'none',
						fontSize: { xs: titleFontSizeMobile.normal, sm: titleFontSizeDesktop.normal },
					}}
				>
					{doctorData?.specialties[0]?.name ? doctorData.specialties[0].name : 'General Practitioner'}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default AvatarProfile;
