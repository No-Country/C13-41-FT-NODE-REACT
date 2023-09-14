'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { useAuth } from '@/contexts/Auth.context';
import { Close } from '@mui/icons-material';
import {
	Button,
	Chip,
	FormControl,
	FormHelperText,
	Grid,
	MenuItem,
	Select,
	Stack,
} from '@mui/material';
import React, { useEffect } from 'react';

const SpecialtyInput = ({ specialties, setSpeciality, speciality, handleAddSpecialty }) => {
	const { userData, getUserData, token } = useAuth();
	const deleteSpecialty = async specialty => {
		try {
			const response = await fetch(
				`https://mecharcovz-be.onrender.com/api/v1/medic/delspecialty?specialtyId=${specialty.id}&medicId=${userData.id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${localStorage.getItem('token')}`,
					},
				},
			);

			if (response.error) {
				throw new Error(response.error);
			}

			await getUserData(token, userData, 'medic');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid item xs={12} sm={6}>
			<Stack direction='column' spacing={2}>
				<label>Speciality</label>
				<FormControl>
					<Select
						value={''}
						MenuProps={{ disableScrollLock: true }}
						onChange={e => handleAddSpecialty(e)}
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
				<Stack direction='row' gap={2} alignItems={'center'} flexWrap={'wrap'}>
					{speciality.length > 0 &&
						speciality.map((item, idx) => {
							return (
								<Button
									endIcon={
										<Close sx={{ colors: colors.buttonIcon }} onClick={() => deleteSpecialty(item)} />
									}
									variant='outlined'
									key={idx}
									sx={{
										textTransform: 'none',
										color: colors.buttonIcon,
										borderColor: colors.buttonIcon,
										fontSize: { xs: titleFontSizeMobile.normal, sm: titleFontSizeDesktop.normal },
										':hover': {
											borderColor: colors.buttonIcon,
										},
									}}
								>
									{item.name}
								</Button>
							);
						})}
				</Stack>
			</Stack>
		</Grid>
	);
};

export default SpecialtyInput;
