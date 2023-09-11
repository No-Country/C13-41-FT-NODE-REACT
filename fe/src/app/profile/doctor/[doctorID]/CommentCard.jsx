import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Delete } from '@mui/icons-material';
import { Avatar, Card, Stack, Typography } from '@mui/material';
import esLocale from 'date-fns/locale/es';
import React from 'react';

const CommentCard = ({ comment }) => {
	return (
		<Card
			sx={{
				padding: 1,
				backgroundColor: colors.background,
				borderBottom: 1,
				boxShadow: 'none',
				borderRadius: 0,
				borderColor: colors.inputBackground,
			}}
		>
			<Stack direction={'column'} spacing={1}>
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
	);
};

export default CommentCard;
