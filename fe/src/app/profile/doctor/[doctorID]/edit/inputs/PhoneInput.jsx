import { Edit, Save } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const PhoneInput = ({ phone, editPhone, setPhone, setEditPhone }) => {
	return (
		<Grid item xs={12} sm={6}>
			<Stack direction='column' spacing={2}>
				<label>Telephone Number</label>
				<OutlinedInput
					disabled={!editPhone}
					defaultValue={phone}
					onChange={e => setPhone(e.target.value)}
					endAdornment={
						<InputAdornment position='start'>
							<IconButton aria-label='toggle to edit' onClick={() => setEditPhone(!editPhone)} edge='end'>
								{editPhone ? <Save /> : <Edit />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Stack>
		</Grid>
	);
};

export default PhoneInput;
