import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';

const DetailsContainer = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const InsideContainer = styled('div')({
	display: 'grid',
	gridTemplateColumns: "repeat (2, 1fr)",
	marginTop: '30px',
	gap: '20px',
	justifyContent: 'space-between',
});

const InputContainer = styled('div')({
	marginTop: '10px',
	display: 'flex',
	flexDirection: 'row',
	gap: '10px',
});

const DetailSpan = styled('span')({
	fontSize: '30px',
	fontWeight: 'bold',
	color: colors.text,
	userSelect: "none",
});

const AvatarPicture = styled('img')({
	width: '300px',
	height: '300px',
});

function changeBirthdate() {
	let askValue = prompt('Change Your Birth Date using a MM/DD/YYYY format.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The Birth date cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('birthdate').innerText = askValue);
		alert("The new value for Birthdate is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

function changeNID() {
	let askValue = prompt('Change Your NID.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The NID cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('nid').innerText = askValue);
		alert("The new value for NID is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

function changePhone() {
	let askValue = prompt('Change Your Phone Number.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The Phone Number field cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('phone').innerText = askValue);
		alert("The new value for phone is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

function changeLicense() {
	let askValue = prompt('Change Your License Number.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The License Number field cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('license').innerText = askValue);
		alert("The new value for license is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

function changeAvatar() {
	let askValue = prompt('Please enter the url for the desired avatar picture image.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The url field cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('avatar').src = askValue);
		alert('You have successfully changed your avatar picture');
		return newValue;
	}
}

function changeResume () {

	let resumeTextArea = document.getElementById ('resumeTextArea')
	resumeTextArea.removeAttribute ("hidden");
	resumeTextArea.style.resize = "none";
	resumeTextArea.style.outline = "none";
	resumeTextArea.style.fontSize = "20px";
	resumeTextArea.style.fontWeight = "bold";

}

function Details(props) {

	const [resume, setResume] = useState("");

	return (

		<DetailsContainer>
			<InsideContainer>
				<DetailSpan>Account Type: Medic</DetailSpan>

				<InputContainer>
					<DetailSpan>Birthdate:</DetailSpan>
					<DetailSpan id='birthdate'>
						{new Date(props.birthdate).toDateString()}
						<EditIcon onClick={changeBirthdate} style={{cursor: "pointer"}}/>
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>NID:</DetailSpan>
					<DetailSpan id='nid'>
						{props.nid}
						<EditIcon onClick={changeNID} style={{cursor: "pointer"}} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>Gender:</DetailSpan>
					<DetailSpan id='gender'>{props.gender}
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>Country:</DetailSpan>
					<DetailSpan id='country'>
						{props.country}
					</DetailSpan>
				</InputContainer>
			</InsideContainer>

			<InsideContainer>
				<InputContainer>
					<DetailSpan>Phone:</DetailSpan>
					<DetailSpan id='phone'>
						{props.phone}
						<EditIcon onClick={changePhone} style={{cursor: "pointer"}} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>License ID:</DetailSpan>
					<DetailSpan id='license'>
						{props.profesionalid}
						<EditIcon onClick={changeLicense} style={{cursor: "pointer"}} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>Email:</DetailSpan>
					<DetailSpan id='email'>
						{props.email}
					</DetailSpan>
				</InputContainer>

				<InputContainer id='resumeContainer' style={{display: "flex", flexDirection: "column",}}>
					<DetailSpan>Resume:<EditIcon onClick={changeResume} style={{cursor: "pointer"}} /></DetailSpan>
					<textarea id="resumeTextArea" cols="30" rows="10" hidden placeholder='Please enter a brief summary of your work experience' value={resume} onChange={e => setResume (e.target.value)}/>
				</InputContainer>
			</InsideContainer>


			<InsideContainer>
				<InputContainer style={{ display: 'flex', flexDirection: 'column' }}>
					<DetailSpan>
						Profile Picture:{' '}
						<DetailSpan>
							{props.avatar}
							<EditIcon onClick={changeAvatar} style={{cursor: "pointer"}} />
						</DetailSpan>
					</DetailSpan>
					<AvatarPicture id='avatar' />
				</InputContainer>
			</InsideContainer>
		</DetailsContainer>

	);
}

export default Details;