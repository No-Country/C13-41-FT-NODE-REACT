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

function Details({
	editResume,
	setEditResume,
	resume,
	setResume,
	editProfessionalid,
	setEditProfessionalid,
	professionalid,
	setProfessionalid,
	editNationalId,
	setEditNationalId,
	nationalId,
	setNationalId,
	speciality,
	setSpeciality,
}) {
	const { userData } = useAuth();

	return (
		<Container sx={{ paddingY: 4 }}>
			{userData && (
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Stack direction='column' spacing={2}>
							<label>Fullname</label>
							<OutlinedInput defaultValue={userData.fullname} readOnly />
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
							<label>Resume</label>
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
							<label>Speciality</label>
							<FormControl>
								<Select
									value={speciality}
									MenuProps={{ disableScrollLock: true }}
									onChange={e => setSpeciality(e.target.value)}
								>
									<MenuItem value='clinic'>Clinic</MenuItem>
									<MenuItem value='cardiology'>Cardiology</MenuItem>
									<MenuItem value='dermatology'>Dermatology</MenuItem>
									<MenuItem value='neurology'>Neurology</MenuItem>
								</Select>
								<FormHelperText>If you don't have a speciality select clinic</FormHelperText>
							</FormControl>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Container>
	);
}

export default Details;
