'use client';
import { Box, Chip, Typography } from '@mui/material';
import CommentCard from './CommentCard';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';

const Comments = ({ doctorComments }) => {
	return (
		<Box>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				paddingBottom={2}
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Comments {doctorComments && doctorComments.length > 0 && `(${doctorComments.length})`}
			</Typography>
			{doctorComments && doctorComments.length > 0 ? (
				doctorComments.map((comment, idx) => {
					return <CommentCard key={idx} comment={comment} />;
				})
			) : (
				<Chip
					label='This medic has no comment yet'
					className='inter'
					sx={{
						color: colors.text,
						fontSize: { xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body, paddingY: 4 },
					}}
				/>
			)}
		</Box>
	);
};

export default Comments;
