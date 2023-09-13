'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within an AuthProvider');
	return context;
};

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [userData, setUserData] = useState(null);

	const updateUserData = async data => {
		setUserData(data);
		localStorage.setItem('userData', JSON.stringify(data));
	};
	// Recupero el token y los datos del usuario del local storage
	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		const storedUserData = localStorage.getItem('userData');

		if (storedToken && storedUserData) {
			setToken(storedToken);
			setUserData(JSON.parse(storedUserData));
		}
	}, []);

	// Inicio sesión y almacenaoel token y los datos del usuario
	const login = async ({ token, data }) => {
		setUserData(data);
		setToken(token);
		localStorage.setItem('userData', JSON.stringify(data));
		localStorage.setItem('token', token);
	};

	// Cierro sesión y borror el token y los datos del usuario
	const logout = () => {
		setToken(null);
		setUserData(null);
		localStorage.removeItem('token');
		localStorage.removeItem('userData');
	};

	// Verifico si el usuario está autenticado
	const isAuthenticated = () => {
		return !!token;
	};

	return (
		<AuthContext.Provider
			value={{ token, userData, setUserData, login, logout, isAuthenticated, updateUserData }}
		>
			{children}
		</AuthContext.Provider>
	);
};
