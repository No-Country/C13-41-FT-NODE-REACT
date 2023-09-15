import { colors } from '@/app/colors';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useRouter } from 'next/navigation';

const NavMenuMobile = ({ userData, token, handleCloseNavMenu, handleOpenNavMenu, anchorElNav }) => {
	const { push } = useRouter();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}
			>
				{/* Verifico que este logueado y tenga los datos de usuario */}
				{token && userData && (
					<Box>
						<MenuItem onClick={() => (token ? push('/home') : push('/sign-in'))}>
							<Typography
								textAlign='center'
								className='inter'
								sx={{ color: colors.text, textTransform: 'none' }}
							>
								Home
							</Typography>
						</MenuItem>
						<MenuItem onClick={() => (token ? push('/doctors') : push('/sign-in'))}>
							<Typography
								textAlign='center'
								className='inter'
								sx={{ color: colors.text, textTransform: 'none' }}
							>
								Doctors
							</Typography>
						</MenuItem>

						{
							// Verifico que sea un paciente para mostrar el link al new appointment
							!userData.profesionalid && (
								<MenuItem onClick={() => (token ? push('/doctors') : push('/sign-in'))}>
									<Typography
										textAlign='center'
										className='inter'
										sx={{ color: colors.text, textTransform: 'none' }}
									>
										New appointment
									</Typography>
								</MenuItem>
							)
						}

						{
							// Verifico que sea un medico para mostrar el link a schedule
							userData.profesionalid && (
								<MenuItem onClick={() => (token ? push('/doctor/schedule/1') : push('/sign-in'))}>
									<Typography
										textAlign='center'
										className='inter'
										sx={{ color: colors.text, textTransform: 'none' }}
									>
										Schedule
									</Typography>
								</MenuItem>
							)
						}
					</Box>
				)}
			</Menu>
		</Box>
	);
};

export default NavMenuMobile;
