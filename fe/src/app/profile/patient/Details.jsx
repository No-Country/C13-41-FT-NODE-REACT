import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import EditIcon from '@mui/icons-material/Edit';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

const DetailsContainer = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const InsideContainer = styled('div')({
	display: 'flex',
	marginTop: '30px',
	flexDirection: 'column',
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
});

const AvatarPicture = styled('img')({
	width: '300px',
	height: '300px',
});

function changeFullName() {
	let askValue = prompt('Change Full Name');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The name cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('fullname').innerText = askValue);
		alert("The new value for Full Name is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

function changeEmail() {
	let askValue = prompt('Change Email Adress');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The Adress cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('email').innerText = askValue);
		alert("The new value for Email is '" + newValue + "'.\nDon't forget to save your changes.");
		return newValue;
	}
}

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

function changeCountry() {
	let askValue = prompt('Change Your Country.');

	if (askValue === '' || askValue === null || askValue === undefined) {
		alert('The Country field cannot be empty. Refreshing...');
		window.location.reload();
	} else {
		let newValue = (document.getElementById('country').innerText = askValue);
		alert("The new value for country is '" + newValue + "'.\nDon't forget to save your changes.");
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

function Details(props) {
	return (
		<DetailsContainer>
			<InsideContainer>
				<DetailSpan>Account Type: Patient</DetailSpan>

				<InputContainer>
					<DetailSpan>Full Name:</DetailSpan>
					<DetailSpan id='fullname'>
						{props.fullname}
						<EditIcon onClick={changeFullName} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>E-Mail:</DetailSpan>
					<DetailSpan id='email'>
						{props.email}
						<EditIcon onClick={changeEmail} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>Birthdate:</DetailSpan>
					<DetailSpan id='birthdate'>
						{props.birthdate}
						<EditIcon onClick={changeBirthdate} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>NID:</DetailSpan>
					<DetailSpan id='nid'>
						{props.nid}
						<EditIcon onClick={changeNID} />
					</DetailSpan>
				</InputContainer>
			</InsideContainer>

			<InsideContainer>
				<InputContainer>
					<DetailSpan>Country:</DetailSpan>
					<DetailSpan id='country'>
						{props.country}
						<EditIcon onClick={changeCountry} />
					</DetailSpan>
				</InputContainer>

				<InputContainer>
					<DetailSpan>Phone:</DetailSpan>
					<DetailSpan id='phone'>
						{props.phone}
						<EditIcon onClick={changePhone} />
					</DetailSpan>
				</InputContainer>
			</InsideContainer>

			<InsideContainer>
				<InputContainer style={{ display: 'flex', flexDirection: 'column' }}>
					<DetailSpan>
						Profile Picture:{' '}
						<DetailSpan>
							{props.avatar}
							<EditIcon onClick={changeAvatar} />
						</DetailSpan>
					</DetailSpan>
					<AvatarPicture id='avatar' />
				</InputContainer>
			</InsideContainer>
		</DetailsContainer>
	);
}

export default Details;
