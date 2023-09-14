'use client';
import React, { useEffect, useState } from 'react';
import {  Button, Grid, Box, Typography, ToggleButton, Snackbar } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { colors } from '@/app/colors';
import DoctorCalendar from '../../../../../Components/Calendar/DoctorCalendar';
import Loader from '../../../../../Components/Loader/Loader.jsx';
import { useRouter } from 'next/navigation';
import getDoctorSchedule from '@/lib/getDoctorSchedule';
const ScheduleDoctor = () => {
  const [vacationDays, setVacationDays] = useState([]);
  const [schedule, setSchedule] = useState([
      {
        day: 'Monday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Tuesday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Wednesday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Thursday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Friday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Saturday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      {
        day: 'Sunday',
        slots: [
          { time: '07:00 - 08:00', selected: false },
          { time: '08:00 - 09:00', selected: false },
          { time: '09:00 - 10:00', selected: false },
          { time: '10:00 - 11:00', selected: false },
          { time: '11:00 - 12:00', selected: false },
          { time: '13:00 - 14:00', selected: false },
          { time: '14:00 - 15:00', selected: false },
          { time: '15:00 - 16:00', selected: false },
          { time: '16:00 - 17:00', selected: false },
        ],
      },
      // Repite esta estructura para los demás días de la semana
    
    
    ])
  const { push } = useRouter();
  const [loading , setLoading] = useState(true)
  const [isscheduleSaved, setIsScheduleSaved] = useState(false)
  // const userData = useAuth()
  const localStorageData = localStorage.getItem('userData');
  const userData = JSON.parse(localStorageData)
  const medicId = userData.id;
  useEffect(() => {
    
    const fetchActualSchedule = async () => {
     const schedules = await getDoctorSchedule(medicId)
     schedules.map((fs) => {
      const updatedSchedule = [...schedule];
      const found = updatedSchedule.findIndex((s) => s.day === fs.day)
      const foundTime = updatedSchedule[found].slots.findIndex(slot => slot.time === `${fs.initialHour} - ${fs.finalHour}`)
      if(foundTime !== -1){
        updatedSchedule[found].slots[foundTime].selected = true
      }
      setSchedule(updatedSchedule)
      setLoading(false)
    })
  }
  fetchActualSchedule()
  // console.log(fetchedSchedule);
  console.log(schedule);
    
  }, [])
  const handleCheckboxChange = (day, time) => {
    const updatedSchedule = [...schedule];
    
    // Encontrar el día correspondiente en el estado
    const dayIndex = updatedSchedule.findIndex((item) => item.day === day);

    // Encontrar la franja horaria correspondiente en el día
    const timeIndex = updatedSchedule[dayIndex].slots.findIndex((slot) => slot.time === time);

    // Cambiar el estado seleccionado de la franja horaria
    updatedSchedule[dayIndex].slots[timeIndex].selected = !updatedSchedule[dayIndex].slots[timeIndex].selected;

    // Actualizar el estado
    setSchedule(updatedSchedule);

    console.log(schedule);
    // setSchedule(newSchedule);
  };
  const handleClick = async () => {
    let scheduleChoosed = []; 
    schedule.map(s => {
      s.slots.map(slot => {
        if(slot.selected){
          const [initialHour, finalHour] = slot.time.split('-')
          scheduleChoosed.push({
            day: s.day,
            initialHour: initialHour.trim(),
            finalHour: finalHour.trim(),
            status: slot.selected,
            medicId: medicId,
            duration: 60
          }
          )
        }
      })
    })
    
    // console.log(medicId);
    console.log(scheduleChoosed);
    console.log(vacationDays)
    scheduleChoosed.map(async obj => {
      try {
        const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/schedule?medicId=${medicId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(
            {
              day: obj.day, 
              initialHour: obj.initialHour, 
              finalHour: obj.finalHour, 
              status: obj.status, 
              medicId:obj.medicId, 
              duration: obj.duration
            }
          )
        
        });
  
        const data = await response.json();
        console.log(data);
        setIsScheduleSaved(true)
        push('/')
      } catch (error) {
        console.log(error);
      }
      
    })

  }

  return (
    <>
    {loading ? (
        <Loader/>
      
    ) :  (

    <Box width={'100%'}>

      <Typography fontSize={20} sx={{ padding: 4}}>Choose your own schedule</Typography>
      <Grid container  padding={5} justifyContent='center' alignItems='center' spacing={{md: 6, xs:1.5}} rowSpacing={5} >
        {schedule.map((dayElement, index) => (
          <Grid key={index} item md={1.7}>
            <Typography sx={{justifyItems:'center', marginLeft: 4, marginBottom: 1}}>{dayElement.day.slice(0,3)}</Typography>
            {dayElement.slots.map(slot => (
              <>
                <ToggleButton

                  key={slot.time}
                  selected={slot.selected}
                  onClick={() => handleCheckboxChange(dayElement.day, slot.time)}
                  value={slot.time}
                  sx={{ marginY: 1, '&.Mui-selected' : { backgroundColor: colors.categoryIcons.labs}}}
                >
                  {slot.time}
                </ToggleButton>
              </>
            ))}

          </Grid>
        ))}
      </Grid>

      <DoctorCalendar vacationDays={vacationDays} setVacationDays={setVacationDays}/>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', paddingBottom: 5, marginRight:'3%'}}>
        <Button type='submit'  onClick={handleClick} endIcon={<BookmarkAddIcon/>} color='success' variant='contained' size='large' >
            Save
        </Button>    

      </Box>
      <Snackbar
        open={isscheduleSaved}
        autoHideDuration={3000}
        message='Schedule saved succesfully'
      />
    </Box>
    )} 
    </>
  );
};

export default ScheduleDoctor;
