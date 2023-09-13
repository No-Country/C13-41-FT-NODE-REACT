import { Edit, Save } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const ResumeInput = ({ resume, setResume, editResume, setEditResume }) => {
	return (
		<Grid item xs={12} sm={12}>
			<Stack direction='column' spacing={2}>
				<label>A brief summary of your academic and professional experience.</label>
				<OutlinedInput
					disabled={!editResume}
					defaultValue={resume}
					multiline
					minRows={4}
					maxRows={8}
					onChange={e => setResume(e.target.value)}
					sx={{ display: 'flex', alignItems: 'start' }}
					endAdornment={
						<InputAdornment position='start' sx={{ pt: 1.5 }}>
							<IconButton
								aria-label='toggle to edit'
								onClick={() => setEditResume(!editResume)}
								edge='end'
							>
								{editResume ? <Save /> : <Edit />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Stack>
		</Grid>
	);
};

export default ResumeInput;
