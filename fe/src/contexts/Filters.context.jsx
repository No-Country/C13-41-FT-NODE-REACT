'use client';
import React, { useState, useEffect } from 'react';
import { fakeDoctorData } from '@/app/doctors/fakeDoctosData';
const { createContext, useContext } = require('react');
export const FilterContext = createContext(null);

export const useFilterContext = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error('useFilterContext must be used within a FilterProvider');
	}
	return context;
};

export const FilterProvider = ({ children }) => {
	const [allDoctors, setAllDoctors] = useState(fakeDoctorData);
	const [filteredDoctor, setFilteredDoctor] = useState([]);
	const [filterByName, setFilterByName] = useState('');
	const [filterBySpecialty, setFilterBySpecialty] = useState('');
	const [filterByCountry, setFilterByCountry] = useState('');

	useEffect(() => {
		setFilteredDoctor(allDoctors);
	}, [allDoctors]);

	useEffect(() => {
		handleFilters();
	}, [filterByName, filterBySpecialty, filterByCountry]);
	const handleFilters = () => {
		const filtered = allDoctors.filter(doctor => {
			return (
				doctor.fullname.toLowerCase().includes(filterByName.toLowerCase()) &&
				doctor.specialty.toLowerCase().includes(filterBySpecialty.toLowerCase()) &&
				doctor.country.toLowerCase().includes(filterByCountry.toLowerCase())
			);
		});
		setFilteredDoctor(filtered);
	};

	return (
		<FilterContext.Provider
			value={{ filteredDoctor, allDoctors, setFilterByCountry, setFilterByName, setFilterBySpecialty }}
		>
			{children}
		</FilterContext.Provider>
	);
};
