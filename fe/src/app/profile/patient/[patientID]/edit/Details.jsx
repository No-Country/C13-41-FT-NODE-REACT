import { Stack } from '@mui/system';
import {
	Container,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';
import { useAuth } from '@/contexts/Auth.context';
import { useEffect, useState } from 'react';

function Details({
	phone,
	editPhone,
	setPhone,
	setEditPhone,
	editNationalId,
	setEditNationalId,
	nationalId,
	setNationalId,
}) {
	const { userData } = useAuth();

	return (
		<Container sx={{ paddingY: 4 }}>
			{userData && (
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
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
					<Grid item xs={12} sm={4}>
						<Stack direction='column' spacing={2}>
							<label>Email</label>
							<OutlinedInput defaultValue={userData.email} readOnly />
						</Stack>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Stack direction='column' spacing={2}>
							<label>Country</label>
							<OutlinedInput defaultValue={userData.country} readOnly />
						</Stack>
					</Grid>

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

					<Grid item xs={12} sm={6}>
						<Stack direction='column' spacing={2}>
							<label>Telephone Number</label>
							<OutlinedInput
								disabled={!editPhone}
								defaultValue={phone}
								onChange={e => setPhone(e.target.value)}
								endAdornment={
									<InputAdornment position='start'>
										<IconButton
											aria-label='toggle to edit'
											onClick={() => setEditPhone(!editPhone)}
											edge='end'
										>
											{editPhone ? <Save /> : <Edit />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Container>
	);
}

export default Details;
