import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { colors } from '@/app/colors';

export default function RegisterMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id='register-button'
				aria-controls={open ? 'register-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				className='inter'
				variant='contained'
				style={{
					color: colors.buttonIcon,
					textTransform: 'none',
					fontWeight: '600',
					display: 'block',
					backgroundColor: 'transparent',
					border: '1px solid',
					borderColor: colors.buttonIcon,
					':hover': {
						backgroundColor: 'transparent',
					},
				}}
			>
				Register
			</Button>
			<Menu
				id='register-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'register-button',
				}}
				disableScrollLock={true}
				sx={{ mt: 2 }}
			>
				<MenuItem onClick={handleClose}>
					<Link
						draggable='false'
						href='/sign-up/doctor'
						style={{
							color: colors.text,
							textTransform: 'none',
							fontWeight: '600',
						}}
						className='inter'
					>
						As a Doctor
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link
						draggable='false'
						href='/sign-up/patient'
						style={{ color: colors.text, textTransform: 'none', fontWeight: '600' }}
						className='inter'
					>
						As a Patient
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}
