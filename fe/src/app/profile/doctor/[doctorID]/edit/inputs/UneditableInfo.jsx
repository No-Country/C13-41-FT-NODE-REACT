import { Grid, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const UneditableInfo = ({ userData }) => {
	return (
		<>
			<Grid item xs={12} sm={6}>
				<Stack direction='column' spacing={2}>
					<label>Fullname</label>
					<OutlinedInput
						defaultValue={userData.fullname}
						readOnly
						sx={{ userSelect: 'none' }}
						draggable='false'
					/>
				</Stack>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Stack direction='column' spacing={2}>
					<label>Email</label>
					<OutlinedInput defaultValue={userData.email} readOnly />
				</Stack>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Stack direction='column' spacing={2}>
					<label>Country</label>
					<OutlinedInput defaultValue={userData.country} readOnly />
				</Stack>
			</Grid>
		</>
	);
};

export default UneditableInfo;
