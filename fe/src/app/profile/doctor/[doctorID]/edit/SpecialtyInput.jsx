import { useAuth } from '@/contexts/Auth.context';
import { Chip, FormControl, FormHelperText, Grid, MenuItem, Select, Stack } from '@mui/material';
import React from 'react';

const SpecialtyInput = ({ specialties, setSpeciality, speciality, handleAddSpecialty }) => {
	const { userData } = useAuth();
	const deleteSpecialty = async specialty => {
		try {
			const response = await fetch(
				`http://localhost:3005/api/v1/medic/delspecialty?specialtyId=${specialty.id}&medicId=${userData.id}`,
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
			const data = await response.json();
			console.log(data);
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
						value={speciality.length > 0 ? speciality[0].name : ''}
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
				<Stack direction='row' spacing={2} alignItems={'center'} flexWrap={'wrap'}>
					{speciality.length > 0 &&
						speciality.map(item => {
							return <Chip label={item.name} fullWidth onClick={() => deleteSpecialty(item)}></Chip>;
						})}
				</Stack>
			</Stack>
		</Grid>
	);
};

export default SpecialtyInput;
