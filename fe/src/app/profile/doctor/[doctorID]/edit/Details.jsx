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
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { colors } from '@/app/colors';
import styled from '@emotion/styled';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: '1px',
	overflow: 'hidden',
	position: 'absolute',
	bottom: '0',
	left: '0',
	whiteSpace: 'nowrap',
	width: '1px',
});

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
	selectedFile,
	setSelectedFile,
	isFilePicked,
	setIsFilePicked,
}) {
	const [specialties, setSpecialties] = useState([]);
	const { userData } = useAuth();
	const fetchSpecialties = async () => {
		const data = await getSpecialty();
		setSpecialties(data.data.specialties);
	};

	useEffect(() => {
		fetchSpecialties();
	}, []);

	const handleAddSpecialty = async e => {
		setSpeciality(e.target.value);
		const findSpecialtyById = specialties.find(specialty => specialty.name === e.target.value);
		console.log('especialidad buscada', findSpecialtyById);
		console.log('valor del input', e.target.value);

		const specialtyData = {
			medicId: userData.id,
			specialtyId: findSpecialtyById.id,
		};

		console.log(JSON.stringify(specialtyData));
		try {
			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/medic/addspecialty`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
					body: JSON.stringify(specialtyData),
				},
			});

			if (response.error) {
				throw new Error(response.error);
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	const handleUploadPDF = async e => {
		const file = e.target.files[0];
		console.log(file);

		const formData = new FormData();

		formData.append('file', file);

		try {
			const response = await fetch(
				'https://mecharcovz-be.onrender.com/api/v1/files?type=pdf&email=test@test.com',

				// cambiar ruta arriba
				{
					headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
					method: 'POST',
					body: formData,
				},
			);

			if (response.error) {
				throw new Error(response.error);
			}

			const data = await response.json();

			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container sx={{ paddingY: 4 }}>
			{userData && (
				<Grid container spacing={2}>
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
								onChange={handleAddSpecialty}
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
								<a href={socialNetwork} target='_blank' rel='noopener noreferrer' style={{textDecoration: "underline", color: "blue"}}>
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
