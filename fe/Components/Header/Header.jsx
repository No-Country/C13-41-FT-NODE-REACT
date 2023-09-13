'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { colors } from '@/app/colors';
import { useAuth } from '@/contexts/Auth.context';
import { useRouter } from 'next/navigation';
import RegisterMenu from './RegisterMenu';
import { LogoSvg } from './Logo';
import AvatarMenu from './AvatarMenu';
import NavMenuDesktop from './NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile';
import Link from 'next/link';

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
				<Toolbar sx={{ paddingX: 0 }}>

					<Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '1rem', }}><Link href={"/"} >{LogoSvg()}</Link></Box>

					{token && (
						<NavMenuMobile
							userData={userData}
							token={token}
							handleCloseNavMenu={handleCloseNavMenu}
							handleOpenNavMenu={handleOpenNavMenu}
							anchorElNav={anchorElNav}
						/>
					)}

					<Box sx={{ display: { xs: 'flex', md: 'none', mr: 3, flexGrow: 1 } }}><Link href={"/"} >{LogoSvg()}</Link></Box>

					<NavMenuDesktop userData={userData} token={token} />
					{token ? (
						<AvatarMenu
							userData={userData}
							handleLogout={handleLogout}
							handleOpenUserMenu={handleOpenUserMenu}
							handleCloseUserMenu={handleCloseUserMenu}
							anchorElUser={anchorElUser}
						/>
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
