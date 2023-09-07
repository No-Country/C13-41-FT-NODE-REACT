import React from 'react';
import Button from '@mui/material/Button';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Container, Stack } from '@mui/material';
import AvatarProfile from './AvatarProfile';

function SaveBar({ handleUpdate, avatar, setAvatar }) {
	const handleAvatarUpdate = async () => {};
	return (
		<Container sx={{ paddingY: 4 }}>
			<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
				<AvatarProfile avatar={avatar} setAvatar={setAvatar} />
			</Stack>
		</Container>
	);
}

export default SaveBar;
