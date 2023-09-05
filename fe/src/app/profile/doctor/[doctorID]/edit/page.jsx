'use client';
import styled from '@emotion/styled';
import { Alert, Button, Container, Snackbar } from '@mui/material';
import SaveBar from './SaveBar';
import Details from './Details';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/Auth.context';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';

const ProfileContainer = styled('main')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	minHeight: '100vh',
	padding: '2rem 0 4rem',
});

function DoctorProfile() {
	const [editResume, setEditResume] = useState(false);
	const [resume, setResume] = useState('');
	const [editProfessionalid, setEditProfessionalid] = useState(false);
	const [professionalid, setProfessionalid] = useState('');
	const [editNationalId, setEditNationalId] = useState(false);
	const [nationalId, setNationalId] = useState('');
	const [avatar, setAvatar] = useState('');
	const [speciality, setSpeciality] = useState('clinic');
	// Snackbar
	const [successUpdate, setSuccessUpdate] = useState(false);

	const { userData } = useAuth();

	useEffect(() => {
		if (userData) {
			setResume(userData.resume);
			setProfessionalid(userData.profesionalid);
			setNationalId(userData.nid);
		}
	}, [userData]);

	const handleUpdate = async () => {
		if (!professionalid || !nationalId) return;

		const data = {
			...userData,
			resume: resume,
			profesionalid: professionalid,
			nid: nationalId,
			speciality,
			avatar,
		};
		console.log(data);
		setSuccessUpdate(true);
		setTimeout(() => {
			setSuccessUpdate(false);
		}, 3000);
	};

	return (
		<ProfileContainer>
			<Container maxWidth='xl'>
				<SaveBar handleUpdate={handleUpdate} avatar={avatar} setAvatar={setAvatar} />
				<Details
					editNationalId={editNationalId}
					setEditNationalId={setEditNationalId}
					nationalId={nationalId}
					setNationalId={setNationalId}
					editResume={editResume}
					setEditResume={setEditResume}
					resume={resume}
					setResume={setResume}
					professionalid={professionalid}
					setProfessionalid={setProfessionalid}
					editProfessionalid={editProfessionalid}
					setEditProfessionalid={setEditProfessionalid}
					speciality={speciality}
					setSpeciality={setSpeciality}
				/>
				<Container>
					<Button
						variant='contained'
						sx={{
							backgroundColor: colors.buttonIcon,
							color: 'white',
							fontWeight: 600,
							textTransform: 'none',
							fontSize: { xs: titleFontSizeMobile.normal, sm: titleFontSizeDesktop.normal },
							':hover': {
								backgroundColor: colors.buttonIcon,
							},
						}}
						className='inter'
						onClick={handleUpdate}
					>
						Save Changes
					</Button>
				</Container>
			</Container>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={successUpdate}
				autoHideDuration={3000}
				onClose={() => {}}
			>
				<Alert severity='success' sx={{ width: '100%' }}>
					Information updated
				</Alert>
			</Snackbar>
		</ProfileContainer>
	);
}

export default DoctorProfile;
