'use client';
import React, { useRef } from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Avatar, Badge, Input, Stack, Typography } from '@mui/material';
import { useAuth } from '@/contexts/Auth.context';
import { Edit } from '@mui/icons-material';
import { Box } from '@mui/system';
const AvatarProfile = ({ avatar, setAvatar }) => {
	const { userData, getUserData, token } = useAuth();
	const inputRef = useRef(null);

	const handleIconClick = () => {
		inputRef.current.click();
	};

	const uploadAvatar = async file => {
		const formData = new FormData();

		formData.append('file', file);
		formData.append('email', userData.email);

		try {
			const response = await fetch(
				`https://mecharcovz-be.onrender.com/api/v1/files?type=avatarmedic&email=${userData.email}`,
				{
					method: 'POST',
					headers: {
						Authorization: `bearer ${localStorage.getItem('token')}`,
					},
					body: formData,
				},
			);

			if (!response.ok) {
				throw new Error('Error en la solicitud.');
			}

			const data = await response.json();

			await getUserData(token, userData, 'medic');
		} catch (error) {
			console.error('Error al subir el archivo:', error);
		}
	};

	const handleFileChange = event => {
		const selectedFile = event.target.files[0];

		if (!selectedFile) return;

		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

		if (!allowedTypes.includes(selectedFile.type)) {
			console.error('Tipo de archivo no válido. Selecciona una imagen JPEG, JPG o PNG.');
			return;
		}

		console.log('Archivo válido seleccionado:', selectedFile);
		uploadAvatar(selectedFile);
		console.log('avatar actualizado');
	};

	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			alignItems='center'
			justifyContent={'center'}
			spacing={4}
		>
			<Badge
				overlap='circular'
				sx={{ cursor: 'pointer' }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				badgeContent={
					<Box
						bgcolor={colors.background}
						border={1}
						borderColor={colors.background}
						p={1}
						borderRadius={'50%'}
						sx={{ cursor: 'pointer', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)', position: 'relative' }}
					>
						<Edit sx={{ color: colors.text }} onClick={handleIconClick} />
						<input
							type='file'
							accept='.jpg, .jpeg, .png'
							multiple={false}
							ref={inputRef}
							onChange={handleFileChange}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								opacity: 0,
								width: '100%',
								height: '100%',
								cursor: 'pointer',
							}}
						/>
					</Box>
				}
			>
				<Avatar
					sx={{
						height: { xs: '7.5rem', sm: '5rem' },
						width: { xs: '7.5rem', sm: '5rem' },
						fontSize: { xs: '3rem', sm: '3rem' },
						fontWeight: 500,
					}}
					alt={userData && userData.fullname}
					src={avatar}
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
			</Badge>
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
		</Stack>
	);
};

export default AvatarProfile;
