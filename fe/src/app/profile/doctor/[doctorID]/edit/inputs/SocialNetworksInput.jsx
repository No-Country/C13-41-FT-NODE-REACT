import { colors } from '@/app/colors';
import { Edit, Save } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import React from 'react';

const SocialNetworksInput = ({
	socialNetwork,
	setSocialNetwork,
	editSocialNetwork,
	setEditSocialNetwork,
}) => {
	return (
		<Grid item xs={12} sm={6}>
			<Stack direction='column' spacing={2}>
				<label>
					<a
						href={socialNetwork ? socialNetwork : '#'}
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: colors.categoryIcons.doctors, textDecoration: 'underline' }}
					>
						Professional Link
					</a>
				</label>

				<OutlinedInput
					disabled={!editSocialNetwork}
					defaultValue={socialNetwork}
					onChange={e => setSocialNetwork(e.target.value)}
					endAdornment={
						<InputAdornment position='start'>
							<IconButton
								aria-label='toggle to edit'
								onClick={() => setEditSocialNetwork(!editSocialNetwork)}
								edge='end'
							>
								{editSocialNetwork ? <Save /> : <Edit />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</Stack>
		</Grid>
	);
};

export default SocialNetworksInput;
