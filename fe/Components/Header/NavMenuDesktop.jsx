import { colors } from '@/app/colors';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
const NavMenuDesktop = ({ userData, token }) => {
	const { push } = useRouter();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{token && userData && (
				<Stack direction='row' spacing={1}>
					<Button
						onClick={() => (token ? push('/home') : push('/sign-in'))}
						sx={{
							color: colors.text,
							display: 'block',
							textTransform: 'none',
							fontWeight: '600',
						}}
						className='inter'
					>
						Home
					</Button>
					<Button
						onClick={() => (token ? push('/doctors') : push('/sign-in'))}
						sx={{
							color: colors.text,
							display: 'block',
							textTransform: 'none',
							fontWeight: '600',
						}}
						className='inter'
					>
						Doctors
					</Button>
					{
						// Verifico que sea un paciente para mostrar link a new appointment
						!userData.profesionalid && (
							<Button
								onClick={() => (token ? push('/appointments/1') : push('/sign-in'))}
								sx={{
									color: colors.text,
									display: 'block',
									textTransform: 'none',
									fontWeight: '600',
								}}
								className='inter'
							>
								New appointment
							</Button>
						)
					}
					{
						// Verifico que sea un médico para mostrar el link al schedule
						userData.profesionalid && (
							<Button
								onClick={() => (token ? push('/doctor/schedule/1') : push('/sign-in'))}
								sx={{
									color: colors.text,
									display: 'block',
									textTransform: 'none',
									fontWeight: '600',
								}}
								className='inter'
							>
								Schedule
							</Button>
						)
					}
				</Stack>
			)}
		</Box>
	);
};

export default NavMenuDesktop;
