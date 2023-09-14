'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { colors } from '@/app/colors';
import styled from '@emotion/styled';
import { useAuth } from '@/contexts/Auth.context';
import { useRouter } from 'next/navigation';
import RegisterMenu from './RegisterMenu';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { LogoSvg } from './Logo';

const Logo = styled('img')({
	width: '64px',
	height: '64px',
});
const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { logout, token, userData } = useAuth();
	const { push } = useRouter();
	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleLogout = () => {
		handleCloseUserMenu();
		setTimeout(() => {
			logout();
			push('/');
		}, 2000);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: colors.navbarBackground, boxShadow: 'none' }}>
			<Container maxWidth='xl'>
				<Toolbar>
					<Box sx={{ display: { xs: 'none', md: 'flex', mr: 1 } }}>
						<Logo src='https://img.icons8.com/clouds/100/caduceus.png' />
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						className='inter'
						sx={{
							flexGrow1: 1,
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 800,
							color: colors.text,
							textTransform: 'none',
						}}
					>
						Klinika
					</Typography>

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
								<div>
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
											<MenuItem onClick={() => (token ? push('/appointments/1') : push('/sign-in'))}>
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
											<MenuItem onClick={() => (token ? push(`/doctor/schedule/${userData.id}`) : push('/sign-in'))}>
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
								</div>
							)}
						</Menu>
					</Box>

					<Box sx={{ display: { xs: 'flex', md: 'none', mr: 1 } }}>
						<Logo src='https://img.icons8.com/clouds/100/caduceus.png' />
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							flexGrow: 1,
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							fontWeight: 800,
							color: colors.text,
							textTransform: 'none',
						}}
						className='inter'
					>
						Klinika
					</Typography>

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
											onClick={() => (token ? push(`/doctor/schedule/${userData.email}`) : push('/sign-in'))}
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

					{token ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									{
										<Avatar
											alt={userData && userData.fullname}
											src={`https://mecharcovz-be.onrender.com/public/uploads/${
												userData.profesionalid ? 'avatarmedic' : 'avatarpatient'
											}/${userData.avatar}`}
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
									}
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
								disableScrollLock={true}
							>
								<MenuItem
									onClick={() => {
										if (userData && userData.profesionalid) {
											push(`/profile/doctor/${userData.email}`);
										} else {
											push('/home');
										}
									}}
								>
									<Typography
										textAlign='center'
										className='inter'
										sx={{ color: colors.text, textTransform: 'none' }}
									>
										Profile
									</Typography>
								</MenuItem>
								<MenuItem onClick={handleLogout}>
									<Typography
										textAlign='center'
										className='inter'
										sx={{ color: colors.text, textTransform: 'none' }}
									>
										Logout
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					) : (
						<Box
							sx={{
								display: 'flex',
								flexGrow: 0,
								alignItems: 'center',
								flexDirection: 'row',
								gap: '1rem',
							}}
						>
							<RegisterMenu />
							<Button
								onClick={() => push('/sign-in')}
								variant='contained'
								className='inter'
								sx={{
									color: 'white',
									display: 'block',
									textTransform: 'none',
									fontWeight: '500',
									backgroundColor: colors.buttonIcon,
									':hover': {
										backgroundColor: colors.buttonIcon,
									},
								}}
							>
								Login
							</Button>
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
