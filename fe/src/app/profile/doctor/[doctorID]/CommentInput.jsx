'use client';
import { SendRounded } from '@mui/icons-material';
import {
	Alert,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import { colors } from '@/app/colors';
import { useAuth } from '@/contexts/Auth.context';

const CommentInput = () => {
	const [comment, setComment] = useState('');
	const [successSendComment, setSuccessSendComment] = useState(false);
	const { userData } = useAuth();
	// Función para manejar comentarios
	const handleSend = async () => {
		if (!comment) return;
		const commentData = {
			description: comment,
			patient: {
				id: userData.id,
				fullname: userData.fullname,
			},
		};

		console.log(commentData);
		// Enviar a la API en un try catch
		setSuccessSendComment(true);
		setTimeout(() => {
			setSuccessSendComment(false);
			setComment('');
		}, [2000]);
	};

	return (
		<>
			<FormControl>
				<InputLabel htmlFor='comment'>Leave a comment</InputLabel>
				<OutlinedInput
					id='comment'
					value={comment}
					onChange={e => setComment(e.target.value)}
					endAdornment={
						<InputAdornment position='start'>
							<IconButton aria-label='toggle to send' onClick={handleSend} edge='end'>
								<SendRounded sx={{ color: colors.inputBackground }} />
							</IconButton>
						</InputAdornment>
					}
					label='Leave a comment'
				></OutlinedInput>
			</FormControl>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={successSendComment}
				autoHideDuration={3000}
				onClose={() => {}}
			>
				<Alert severity='success' sx={{ width: '100%' }}>
					Comment "{comment}" sent
				</Alert>
			</Snackbar>
		</>
	);
};

export default CommentInput;
