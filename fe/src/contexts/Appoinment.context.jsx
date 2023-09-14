'use client';
import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '@/lib/getAllDoctors';

const { createContext, useContext } = require('react');
export const AppointmentContext = createContext(null);

export const useAppoinmentContext = () => {
	const context = useContext(AppointmentContext);
	if (!context) {
		throw new Error('useAppoinmentContext must be used within a AppoinmentProvider');
	}
	return context;
};

export const AppoinmentProvider = ({children}) => {
  const [dayChoosed, setDayChoosed] = useState('')
	const [timeChoosed, setTimeChoosed] = useState('')
  const [doctorId , setDoctorId] = useState('')
  const [serviceId, setServiceId] = useState('')
	const [scheduleIdChoosed, setScheduleIdChoosed] = useState('')
  return (
    <AppointmentContext.Provider
      value={{
        dayChoosed,
        setDayChoosed,
        timeChoosed,
        setTimeChoosed,
        doctorId,
        setDoctorId,
        serviceId,
        setServiceId,
        scheduleIdChoosed,
        setScheduleIdChoosed
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}
