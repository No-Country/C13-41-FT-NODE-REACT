import { Edit, Save } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const ProfesionalIdInput = ({
	professionalid,
	setProfessionalid,
	editProfessionalid,
	setEditProfessionalid,
}) => {
	return (
		<Grid item xs={12} sm={6}>
			<Stack direction='column' spacing={2}>
				<label>Professional ID</label>
				<OutlinedInput
					disabled={!editProfessionalid}
					defaultValue={professionalid}
					onChange={e => setProfessionalid(e.target.value)}
					endAdornment={
						<InputAdornment position='start'>
							<IconButton
								aria-label='toggle to edit'
								onClick={() => setEditProfessionalid(!editProfessionalid)}
								edge='end'
							>
								{editProfessionalid ? <Save /> : <Edit />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Stack>
		</Grid>
	);
};

export default ProfesionalIdInput;
