'use client';
import { useContext, useState } from 'react';
import { createContext } from 'react';
/* Contexto para el usuario
Una vez el usuario se loguea exitosamente, antes de redirigirlo a su página de inicio, 
se inicializa el estado 'user' con los datos del usuario que devuelve el backend para utilizarlo 
en las llamadas de la API y demás, tanto para el médico como para el paciente
*/

export const UserContext = createContext();

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) throw new Error('useUserContext must be used within a UserProvider');
	return context;
};

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
