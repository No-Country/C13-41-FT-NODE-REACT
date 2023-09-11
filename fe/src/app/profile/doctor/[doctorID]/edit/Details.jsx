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
import { getSpecialty } from '@/lib/getSpecialty';

function Details({
	editResume,
	setEditResume,
	resume,
	setResume,
	editProfessionalid,
	phone,
	editPhone,
	setPhone,
	setEditPhone,
	setEditProfessionalid,
	professionalid,
	setProfessionalid,
	editNationalId,
	setEditNationalId,
	nationalId,
	setNationalId,
	editSocialNetwork,
	setEditSocialNetwork,
	socialNetwork,
	setSocialNetwork,
	speciality,
	setSpeciality,

}) {
	const [specialties, SetSpecialties] = useState([]);
	const { userData } = useAuth();
	const fetchSpecialties = async () => {
		const data = await getSpecialty();
		SetSpecialties(data.data.specialties);
	};

	useEffect(() => {
		fetchSpecialties();
	}, []);

	console.log ({socialNetwork})

	return (
		<Container sx={{ paddingY: 4 }}>
			{userData && (
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Stack direction='column' spacing={2}>
							<label>Fullname</label>
							<OutlinedInput defaultValue={userData.fullname} readOnly sx={{userSelect: "none",}} draggable="false"/>
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

					<Grid item xs={12} sm={6}>
						<Stack direction='column' spacing={2}>
							<label>Speciality</label>
							<FormControl>
								<Select
									value={speciality}
									MenuProps={{ disableScrollLock: true }}
									onChange={e => setSpeciality(e.target.value)}
								>
									{specialties.map(props => {
										return (
											<MenuItem key={props.id} value={props.name}>
												{props.name}
											</MenuItem>
										);
									})}
								</Select>
								<FormHelperText>If you don't have a speciality Internal Medicine</FormHelperText>
							</FormControl>
						</Stack>
					</Grid>

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
							<label>
								<a href={{ socialNetwork }} target='_blank' rel='noopener noreferrer'>
									Professional Social Network Link
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

				</Grid>
			)}
		</Container>
	);
}

export default Details;