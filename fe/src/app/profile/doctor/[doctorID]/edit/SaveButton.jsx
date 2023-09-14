import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Button, Container } from '@mui/material';
import React from 'react';

const SaveButton = ({ handleUpdate }) => {
	return (
		<Container>
			<Button
				variant='contained'
				sx={{
					backgroundColor: colors.buttonIcon,
					color: 'white',
					fontWeight: 600,
					textTransform: 'none',
					fontSize: { xs: titleFontSizeMobile.normal, sm: titleFontSizeDesktop.normal },
					':hover': {
						backgroundColor: colors.buttonIcon,
					},
				}}
				className='inter'
				onClick={handleUpdate}
			>
				Save Changes
			</Button>
		</Container>
	);
};

export default SaveButton;
