'use client';
import styled from '@emotion/styled';
import { Alert, Button, Container, Snackbar } from '@mui/material';
import SaveBar from './SaveBar';
import Details from './Details';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/Auth.context';
import Loader from '../../../../../../Components/Loader/Loader';
import { getSpecialty } from '@/lib/getSpecialty';
import SaveButton from './SaveButton';
import { getSingleDoctor } from '@/lib/getSingleDoctor';

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
	const [socialNetwork, setSocialNetwork] = useState('');
	const [speciality, setSpeciality] = useState([]);
	const [successUpdate, setSuccessUpdate] = useState(false);
	const { userData, updateUserData, getUserData, token } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (userData) {
			setResume(userData.resume);
			setProfessionalid(userData.profesionalid);
			setNationalId(userData.nid);
			setPhone(userData.phone);
			if (!userData.socialnetworks) {
				setSocialNetwork('');
			} else if (userData.socialnetworks.length > 0) {
				setSocialNetwork(userData.socialnetworks[0].link);
			}
			if (userData.avatar) {
				setAvatar(`https://mecharcovz-be.onrender.com/public/uploads/avatarmedic/${userData.avatar}`);
			} else {
				setAvatar(userData.avatar);
			}
			if (userData.specialties) {
				setSpeciality(userData.specialties);
			}
		}

		setLoading(false);
	}, [userData]);

	const handleUpdate = async () => {
		if (!professionalid || !nationalId || !resume || !phone) return;
		const newUserData = {
			email: userData.email,
			resume: resume,
			profesionalid: professionalid,
			nid: nationalId,
			phone: phone,
		};

		try {
			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/medic`, {
				method: 'PUT',
				headers: {
					Authorization: `bearer ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUserData),
			});

			if (response.error) {
				throw new Error(response.error);
			}

			const data = await response.json();

			if (!data) return;
			setSuccessUpdate(true);
			updateUserData(data.data.MedicFound);
			setTimeout(() => {
				setSuccessUpdate(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}

		if (userData.socialnetworks.length > 0) {
			updateSocialNetwork();
		} else if (!userData.socialnetworks && socialNetwork !== '') {
			createSocialNetwork();
		}
	};
	const updateSocialNetwork = async () => {
		try {
			const updateSocialNetwork = {
				id: userData.socialnetworks[0].id,
				link: socialNetwork,
			};

			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/socialnetwork`, {
				method: 'PUT',
				headers: {
					Authorization: `bearer ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updateSocialNetwork),
			});

			if (response.error) {
				throw new Error(response.error);
			}

			await getUserData(token, userData, 'medic');
		} catch (error) {
			console.log(error);
		}
	};
	const createSocialNetwork = async () => {
		try {
			const socialMediaData = {
				medicId: userData.id,
				link: socialNetwork,
			};

			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/socialnetwork`, {
				method: 'POST',
				headers: {
					Authorization: `bearer ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(socialMediaData),
			});

			if (response.error) {
				throw new Error(response.error);
			}

			await getUserData(token, userData, 'medic');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{loading ? (
				<Loader />
			) : (
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
						<SaveButton handleUpdate={handleUpdate} />
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
			)}
		</>
	);
}

export default DoctorProfile;
