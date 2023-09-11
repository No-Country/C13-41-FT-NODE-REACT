'use client';
import { useAuth } from '@/contexts/Auth.context';
import { Box, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { getDoctorComments } from '@/lib/getDoctorComments';

const Comments = ({ doctorData }) => {
	const [fakeComments, setFakeComments] = useState([]);

	const fetchData = async () => {
		const data = await getDoctorComments('medic', doctorData?.id);
		console.log(data.data.comments);
		setFakeComments(data.data.comments);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Box>
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
						fontSize: { xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body },
					}}
				/>
			)}
		</Box>
	);
};

export default Comments;
