'use client'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, display, margin } from '@mui/system';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select, InputLabel, FormHelperText } from '@mui/material';
const PatienteCalendar = (props) => {
  
  const {dayChoosed, 
    setDayChoosed , 
    timeChoosed, 
    setTimeChoosed, 
    doctorSchedule,
    } = props
  console.log(doctorSchedule);
  const {vacationDays} = props
  const shouldDisabledDays = (evalueatedDate) => {
    return vacationDays.some((vacationDay) => evalueatedDate.getTime() === new Date(vacationDay.title).getTime())
  }
  const today = new Date();
  const minDay = addDays(today, 2);
  const maxDay = addDays(today, 20);
  const handleChooseDate = (newValue) => {
    setDayChoosed(newValue.toString())
    console.log(dayChoosed);
  }
  const handleChooseTime = (newValue) => {
    setTimeChoosed(newValue.target.value)
  }
  return (
  

      <Box sx={{marginTop: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker value={dayChoosed ? new Date(dayChoosed): minDay} shouldDisableDate={shouldDisabledDays}  sx={{marginBottom: 6, minWidth: 200, maxWidth: 300 }} className='custom-time-picker' minDate={minDay} maxDate={maxDay}  onChange={handleChooseDate}/>
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
                    MenuProps={
                      {disableScrollLock: true}
                    }
                  >
                    {doctorSchedule?.map((date, index) => {
                      if(date.day.slice(0,3) === dayChoosed.slice(0,3) ){
                        return (

                          <MenuItem key={index} value={`${date.initialHour}-${date.finalHour}`}>{date.initialHour}-{date.finalHour}</MenuItem>
                        )
                      }
                    }
                      
                    )}
              </Select>
              <FormHelperText>It depends on the date that you choosed, if u dont see slots u gotta choose another day</FormHelperText>
          </FormControl>
          
      </Box>
  )
}

export default PatienteCalendar
