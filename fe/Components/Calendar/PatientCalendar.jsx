'use client'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, display, margin } from '@mui/system';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select, InputLabel, FormHelperText } from '@mui/material';
const PatienteCalendar = () => {
  const [doctorSchedule, setDoctorShchedule] = useState([
    {dia: 'Tuesday', franja: '08:00 - 09:00'},
    {dia: 'Wednesday', franja: '08:00 - 09:00'},
    {dia: 'Friday', franja: '11:00 - 12:00'},
    {dia: 'Saturday', franja: '10:00 - 11:00'},
    {dia: 'Saturday', franja: '16:00 - 17:00'},

  ]);
  const [vacationDays, setVacationDays] = useState([
    {id: 1, title: 'Tue Sep 12 2023 '}, 
    {id: 2, title: 'Wed Sep 13 2023 '},
    {id: 2, title: 'Thu Sep 14 2023 '},
    {id: 3, title: 'Fri Sep 22 2023 '},
    {id: 3, title: 'Sat Sep 23 2023 '},
  ])
  const shouldDisabledDays = (evalueatedDate) => {
    return vacationDays.some((vacationDay) => evalueatedDate.getTime() === new Date(vacationDay.title).getTime())
  }
  const [dayChoosed, setDayChoosed] = useState('')
  const [timeChoosed, setTimeChoosed] = useState('')
  // useEffect(() => {
  //   const fetchTheSchedule = async () => {
  //     try {
  //       const responseSchedule = await fetch('https://mecharcovz-be.onrender.com/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });
  //     const responseVactionDays = await fetch('https://mecharcovz-be.onrender.com/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });
  //     const dataSchedule = await responseSchedule.json();
  //     const dataVactionDays = await responseVactionDays.json();
  //     console.log(dataVactionDays);
  //     console.log(dataSchedule);
  //     setDoctorShchedule(dataSchedule)
  //     setVacationDays(dataVactionDays)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
    
  // }, [])
  const today = new Date();
  const minDay = addDays(today, 2);
  const maxDay = addDays(today, 20);
  const handleChooseDate = (newValue) => {
    setDayChoosed(newValue.toString().slice(0,3))
    console.log(dayChoosed);
  }
  const handleChooseTime = (newValue) => {
    setTimeChoosed(newValue.target.value)
    console.log(timeChoosed);
   
  }
  return (
      <Box sx={{marginTop: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker shouldDisableDate={shouldDisabledDays} sx={{marginBottom: 6, minWidth: 200, maxWidth: 300 }} className='custom-time-picker' minDate={minDay} maxDate={maxDay}  onChange={(newValue) => handleChooseDate(newValue)}/>
        </LocalizationProvider>  

          <FormControl sx={{minWidth: 200, maxWidth: 300}}>
              <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
                  <Select
                  disabled={dayChoosed === ''}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeChoosed}
                    label="Date"
                    onChange={(newValue) => {handleChooseTime(newValue)}}
                  >
                    {doctorSchedule.map((date, index) => {
                      if(date.dia.slice(0,3) === dayChoosed ){
                        return (

                          <MenuItem key={index} value={date.franja}>{date.franja}</MenuItem>
                        )
                      }
                    }
                      
                    )}
              </Select>
              <FormHelperText>It depends on the date that you choosed</FormHelperText>
          </FormControl>
          
      </Box>
  )
}

export default PatienteCalendar
