'use client';
import styled from '@emotion/styled';
import { Alert, Button, Container, Snackbar } from '@mui/material';
import SaveBar from './SaveBar';
import Details from './Details';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/Auth.context';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { getSpecialty } from '@/lib/getSpecialty';

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
	const [phone, setPhone] = useState('');
	const [editPhone, setEditPhone] = useState(false);
	const [editSocialNetwork, setEditSocialNetwork] = useState(false);
	const [socialNetwork, setSocialNetwork] = useState(
		'https://www.linkedin.com/in/gared-lyon-194b21222/',
	);
	const [speciality, setSpeciality] = useState('Pediatrics');
	const [successUpdate, setSuccessUpdate] = useState(false);
	const { userData, updateUserData } = useAuth();

	useEffect(() => {
		if (userData) {
			setResume(userData.resume);
			setProfessionalid(userData.profesionalid);
			setNationalId(userData.nid);
			setPhone(userData.phone);
			setSocialNetwork(userData.socialNetwork);
			if (userData.avatar) {
				setAvatar(`https://mecharcovz-be.onrender.com/public/uploads/avatarmedic/${userData.avatar}`);
			} else {
				setAvatar(userData.avatar);
			}
			if (userData.specialties) {
				setSpeciality(userData.specialties[specialties.length - 1]);
			}
			if (userData.link) {
				setSocialMedia(userData.socialMedia);
			}
		}
	}, [userData]);

	const handleSocialMedia = async () => {
		try {
			if (userData.link) {
				const socialMediaData = {
					id: userData.id,
					link: socialMedia,
				};
				console.log(socialMediaData);
				const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/socialnetwork`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${localStorage.getItem('token')}`,
					},
					body: JSON.stringify(socialMediaData),
				});

				if (response.error) {
					throw new Error(response.error);
				}

				const data = await response.json();
				console.log(data);
			} else {
				const socialMediaData = JSON.stringify({
					medicId: '013b362f-a9b9-4f9e-bfab-19b163c4b4c4',
					link: 'sdasdas',
				});
				console.log(socialMediaData);
				const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/socialnetwork`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${localStorage.getItem('token')}`,
					},
					body: socialMediaData,
				});

				if (response.error) {
					throw new Error(response.error);
				}

				const data = await response.json();
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleUpdate = async () => {
		if (!professionalid || !nationalId) return;
		const newUserData = {
			email: userData.email,
			resume: resume,
			profesionalid: professionalid,
			nid: nationalId,
			phone: phone,
			socialNetwork: socialNetwork,
		};

		// try {
		// 	const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/medic', {
		// 		method: 'PUT',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `bearer ${localStorage.getItem('token')}`,
		// 		},
		// 		body: JSON.stringify(newUserData),
		// 	});

		// 	if (response.error) {
		// 		throw new Error(response.error);
		// 	}

		// 	const data = await response.json();
		// 	console.log(data.data.MedicFound);

		// 	updateUserData(data.data.MedicFound);
		// 	setSuccessUpdate(true);
		// 	setTimeout(() => {
		// 		setSuccessUpdate(false);
		// 	}, 3000);
		// } catch (error) {
		// 	console.error(error);
		// }

		try {
			const socialMediaData = JSON.stringify({
				medicId: '013b362f-a9b9-4f9e-bfab-19b163c4b4c4',
				link: 'sdasdas',
			});
			console.log(socialMediaData);
			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/socialnetwork/`, {
				method: 'POST',
				headers: {
					Authorization: `bearer ${localStorage.getItem('token')}`,
				},
				body: socialMediaData,
			});

			if (response.error) {
				throw new Error(response.error);
			}

			const data = await response.json();

			updateUserData(data.data.MedicFound);
			setSuccessUpdate(true);
			setTimeout(() => {
				setSuccessUpdate(false);
			}, 3000);
		} catch (error) {
			console.log(error);
		}

		handleSocialMedia();
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
					phone={phone}
					setPhone={setPhone}
					editPhone={editPhone}
					setEditPhone={setEditPhone}
					editSocialNetwork={editSocialNetwork}
					setEditSocialNetwork={setEditSocialNetwork}
					socialNetwork={socialNetwork}
					setSocialNetwork={setSocialNetwork}
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
					<Button variant='contained' sx={{ marginLeft: '1rem' }} onClick={handleSocialMedia}>
						Upload Socialnetwork
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
