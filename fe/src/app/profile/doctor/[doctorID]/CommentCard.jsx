import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Avatar, Card, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
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
						// alt={comment.patient.fullname}
						// src={comment.avatar}
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
					{format(new Date(comment.createdAt), "dd 'de' MMMM, yyyy", { locale: es })}
				</Typography>
			</Stack>
		</Card>
	);
};

export default CommentCard;
