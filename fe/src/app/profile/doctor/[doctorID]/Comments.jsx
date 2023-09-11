'use client';
import { Box, Chip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { getDoctorComments } from '@/lib/getDoctorComments';

const Comments = ({ doctorData }) => {
	const [fakeComments, setFakeComments] = useState([]);

	const fetchData = async () => {
		if (!doctorData) return;

		const data = await getDoctorComments('medic', doctorData?.id);
		if (!data || !data.data || data.data.comments === null) {
			setFakeComments([]);
		} else {
			setFakeComments(data.data.comments);
		}
	};

	useEffect(() => {
		if (doctorData) {
			fetchData();
		}
	}, [doctorData]);

	return (
		<Box>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Comentarios {fakeComments && fakeComments.length > 0 && `(${fakeComments.length})`}
			</Typography>
			{fakeComments && fakeComments.length > 0 ? (
				fakeComments.map((comment, idx) => {
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
