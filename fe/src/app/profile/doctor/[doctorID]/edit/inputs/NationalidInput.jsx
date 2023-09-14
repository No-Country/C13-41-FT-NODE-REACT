import { Edit, Save } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const NationalidInput = ({ nationalId, setNationalId, editNationalId, setEditNationalId }) => {
	return (
		<Grid item xs={12} sm={6}>
			<Stack direction='column' spacing={2}>
				<label>National ID</label>
				<OutlinedInput
					disabled={!editNationalId}
					defaultValue={nationalId}
					onChange={e => setNationalId(e.target.value)}
					endAdornment={
						<InputAdornment position='start'>
							<IconButton
								aria-label='toggle to edit'
								onClick={() => setEditNationalId(!editNationalId)}
								edge='end'
							>
								{editNationalId ? <Save /> : <Edit />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Stack>
		</Grid>
	);
};

export default NationalidInput;
