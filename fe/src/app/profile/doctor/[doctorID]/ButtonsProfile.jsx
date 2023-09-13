import { colors } from '@/app/colors';
import { ChatBubbleRounded, EventRounded, Settings, Videocam } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ButtonsProfile = ({ userData, doctorData }) => {
	return (
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
			{!userData.profesionalid && (
				<Link href={`/appointments/${doctorData?.email}`}>
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
						<EventRounded sx={{ color: colors.profileIcon }} fontSize='medium' />
					</Box>
				</Link>
			)}
		</Stack>
	);
};

export default ButtonsProfile;
