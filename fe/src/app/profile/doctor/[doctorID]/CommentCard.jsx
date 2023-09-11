'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { useAuth } from '@/contexts/Auth.context';
import { Clear } from '@mui/icons-material';
import { Alert, Avatar, Card, Snackbar, Stack, Typography } from '@mui/material';
import esLocale from 'date-fns/locale/es';
import React, { useState } from 'react';

const CommentCard = ({ comment }) => {
	const { userData } = useAuth();
	const [successDeleted, setSuccessDeleted] = useState(false);
	const handleDeleteComment = async () => {
		try {
			const response = await fetch(
				`https://mecharcovz-be.onrender.com/api/v1/comment?id=${comment.id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${localStorage.getItem('token')}`,
					},
				},
			);
			if (response.error) {
				throw new Error(response.error);
			}

			const data = await response.json();

			if (!data) return;
			setSuccessDeleted(true);
			setTimeout(() => {
				setSuccessDeleted(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Card
				sx={{
					paddingY: 2,
					paddingX: 1,
					backgroundColor: colors.background,
					borderBottom: 1,
					boxShadow: 'none',
					borderRadius: 0,
					borderColor: colors.inputBackground,
				}}
			>
				<Stack direction={'column'} spacing={1}>
					<Stack direction={'row'} spacing={2} alignItems={'start'} justifyContent={'space-between'}>
						<Stack direction={'row'} spacing={2} alignItems={'center'}>
							<Avatar
								alt='avatar'
								src=''
								bgcolor={colors.inputBackground}
								sx={{ width: '2rem', height: '2rem' }}
							/>
							<Typography
								variant={'body2'}
								color={colors.text}
								className='inter'
								fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
							>
								{comment.description}
							</Typography>
						</Stack>
						{userData.id === comment.patientId && (
							<Clear
								sx={{ color: colors.buttonIcon, cursor: 'pointer' }}
								fontSize='small'
								onClick={() => handleDeleteComment()}
							/>
						)}
					</Stack>
					<Typography
						variant='body2'
						fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
						className='inter'
						color={colors.text}
						textAlign={'right'}
					>
						{new Date(comment.createdAt).toLocaleString('es-ES', {
							dateStyle: 'short',
							locale: esLocale,
						})}
					</Typography>
				</Stack>
			</Card>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				autoHideDuration={6000}
				sx={{ width: '100%' }}
				open={successDeleted}
				onClose={() => {}}
			>
				<Alert severity='success'>Message deleted</Alert>
			</Snackbar>
		</>
	);
};

export default CommentCard;
