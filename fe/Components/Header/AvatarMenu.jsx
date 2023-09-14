import { colors } from '@/app/colors';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';

const AvatarMenu = ({
	userData,
	handleLogout,
	handleOpenUserMenu,
	handleCloseUserMenu,
	anchorElUser,
}) => {
	const { push } = useRouter();

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					{
						<Avatar
							alt={userData && userData.fullname}
							src={`https://mecharcovz-be.onrender.com/public/uploads/${
								userData && userData.profesionalid ? 'avatarmedic' : 'avatarpatient'
							}/${userData && userData.avatar}`}
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
				sx={{ mt: '3rem' }}
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
							push(`/profile/patient/${userData.email}/edit`);
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
	);
};

export default AvatarMenu;
