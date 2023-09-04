import styled from '@emotion/styled';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { colors } from '@/app/colors';

const UserSaveContainer = styled('div')({
	display: 'flex',
	backgroundColor: 'whitesmoke',
	borderRadius: '10px',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: '70px',
});

const PersonContainer = styled('div')({
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
	gap: '10px',
});

const PersonSpan = styled('span')({
	fontSize: '30px',
	fontWeight: 'bold',
	color: colors.text,
	userSelect: "none",
});

function SaveBar (props) {
	return (
		<UserSaveContainer>
			<PersonContainer>
				<PersonIcon sx={{ color: colors.text, fontSize: '30px' }} />
				<PersonSpan>Username: {props.username}</PersonSpan>
			</PersonContainer>

			<Button
				color='warning'
				sx={{
					backgroundColor: colors.background,
					color: colors.text,
					fontWeight: 'bold',
					fontSize: '30px',
				}}
				variant='contained'
			>
				Save Changes
			</Button>
		</UserSaveContainer>
	);
}

export default SaveBar;
