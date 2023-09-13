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
	const login = async ({ token, data, type }) => {
		const user = await getUserData(token, data, type);
		setUserData(user);
		setToken(token);
		localStorage.setItem('userData', JSON.stringify(user));
		localStorage.setItem('token', token);
	};

	const getUserData = async (token, data, type) => {
		try {
			const response = await fetch(
				`https://mecharcovz-be.onrender.com/api/v1/${type}?email=${data.email}`,
				{
					headers: {
						Authorization: `bearer ${token}`,
					},
				},
			);

			if (response.error) {
				throw new Error(response.error);
			}

			const userData = await response.json();
			await updateUserData(userData.data[type]);
			return userData.data[type];
		} catch (error) {
			Cookie.log(error);
		}
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
			value={{
				token,
				userData,
				setUserData,
				login,
				logout,
				isAuthenticated,
				updateUserData,
				getUserData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
