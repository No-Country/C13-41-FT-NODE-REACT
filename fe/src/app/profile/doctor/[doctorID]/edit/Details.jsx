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
import styled from '@emotion/styled';
import { getSpecialty } from '@/lib/getSpecialty';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { colors } from '@/app/colors';

const VisuallyHiddenInput = styled('input')({

	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	overflow: "hidden",
	position: "absolute",
	bottom: "0",
	left: "0",
	whiteSpace: "nowrap",
	width: "1px",

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
	editSocialMedia,
	setEditSocialMedia,
	socialMedia,
	setSocialMedia,
	speciality,
	setSpeciality,
	selectedFile, 
	setSelectedFile,
	isFilePicked, 
	setIsFilePicked,

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

	const handleUploadPDF = async (e) => {

		const file = e.target.files[0];
		console.log (file);

		const formData = new FormData();

		formData.append("file", file);

		try {

			const response = await fetch(

				'https://mecharcovz-be.onrender.com/api/v1/files?type=pdf&email=test@test.com', 

				// cambiar ruta arriba
				{
					headers: {Authorization: `bearer ${localStorage.getItem("token")}`},
					method: 'POST',
					body: formData,
				}
	
			)

			if (response.error) {

				throw new Error(response.error);
	
			}
	
			const data = await response.json();
	
			console.log(data)

			
		} catch (error) {

			console.log (error);
		}

	};

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
							<label>
								<a href={{ socialMedia }} target='_blank' rel='noopener noreferrer'>
									Professional Social Media Link
								</a>
							</label>

							<OutlinedInput
								disabled={!editSocialMedia}
								defaultValue={socialMedia}
								onChange={e => setSocialMedia(e.target.value)}
								endAdornment={
									<InputAdornment position='start'>
										<IconButton
											aria-label='toggle to edit'
											onClick={() => setEditSocialMedia(!editNationalId)}
											edge='end'
										>
											{editSocialMedia ? <Save /> : <Edit />}
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
							<label>Upload your Resume</label>
							<FormControl sx={{display: "flex", alignContent: "center", height: "100%",}}>
								<Button
								component="label"
								variant="contained"
								startIcon={<CloudUploadIcon />}
								sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "55px", maxHeight: "100%", backgroundColor: colors.buttonIcon, color: "white", fontWeight: "600", ':hover': {backgroundColor: colors.buttonIcon},}}
								>
								Upload PDF
									<VisuallyHiddenInput accept='application/pdf' type='file' onChange={(e) => handleUploadPDF (e)}/>
								</Button>
							</FormControl>
						</Stack>
					</Grid>

				</Grid>
			)}
		</Container>
	);
}

export default Details;