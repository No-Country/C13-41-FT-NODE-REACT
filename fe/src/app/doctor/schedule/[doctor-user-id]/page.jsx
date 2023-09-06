'use client';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Button, tableCellClasses, Box, Typography } from '@mui/material';
import { Circle, CircleOutlined } from '@mui/icons-material';
import { hexToRgb, styled } from '@mui/material/styles';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const diasSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const franjasHorarias = ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00']; // Agrega más franjas según necesites
import { colors } from '@/app/colors';
import DoctorCalendar from '../../../../../Components/Calendar/DoctorCalendar';
const ScheduleDoctor = () => {
  const [vacationDays, setVacationDays] = React.useState([]);
  const [schedule, setSchedule] = useState([
    { dia: 'Monday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Monday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Monday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Monday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Monday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Monday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Monday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Monday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Monday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Tuesday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Tuesday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Tuesday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Tuesday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Tuesday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Tuesday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Tuesday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Tuesday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Tuesday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Wednesday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Wednesday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Wednesday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Wednesday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Wednesday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Wednesday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Wednesday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Wednesday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Wednesday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Thursday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Thursday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Thursday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Thursday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Thursday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Thursday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Thursday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Thursday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Thursday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Friday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Friday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Friday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Friday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Friday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Friday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Friday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Friday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Friday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Saturday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Saturday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Saturday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Saturday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Saturday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Saturday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Saturday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Saturday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Saturday', franja: '16:00 - 17:00', selected: false },
    { dia: 'Sunday', franja: '07:00 - 08:00', selected: false },
    { dia: 'Sunday', franja: '08:00 - 09:00', selected: false },
    { dia: 'Sunday', franja: '09:00 - 10:00', selected: false },
    { dia: 'Sunday', franja: '10:00 - 11:00', selected: false },
    { dia: 'Sunday', franja: '11:00 - 12:00', selected: false },
    { dia: 'Sunday', franja: '13:00 - 14:00', selected: false },
    { dia: 'Sunday', franja: '14:00 - 15:00', selected: false },
    { dia: 'Sunday', franja: '15:00 - 16:00', selected: false },
    { dia: 'Sunday', franja: '16:00 - 17:00', selected: false },
    // Agrega más combinaciones día-franja según necesites
  ]);

  const handleCheckboxChange = (dia, franja, e) => {
    const newSchedule = schedule.map((horario) => {
      if (horario.dia === dia && horario.franja === franja) {
        return { ...horario, selected: e.srcElement.checked };
      }
      return horario;
    });
    setSchedule(newSchedule);
  };
  const handleClick = async () => {
    let scheduleChoosed = []; 
    schedule.map((s) => {
      if(s.selected){
        const [horaInicio, horaFinal] = s.franja.split('-')
        scheduleChoosed.push({day: s.dia, 
          initialHour: horaInicio.trim(), 
          finalHour: horaFinal.trim(), 
          status: s.selected, 
          duaration: 60,
          medicId: '53822488-cc1f-43ad-ac56-e57e3bb1fb90'
        })
      }
    } )

    // console.log(scheduleChoosed);
    // console.log(vacationDays)
    try {
      const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/schedule?medicId=53822488-cc1f-43ad-ac56-e57e3bb1fb90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(scheduleChoosed),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      // setErrorSignup(true);
      // setTimeout(() => {
      //   setErrorSignup(false);
      // }, 5000);
    }
  }
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: colors.background,
      color: colors.text,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <>
      <Typography fontSize={20} sx={{marginLeft: 7 , marginTop: 5}}>Choose your own schedule</Typography>
      <TableContainer style={{marginBottom: 12, marginTop: 6, width: '90%', margin: 'auto'}} component={Paper}>
        <Table size='small' style={{marginTop: 12}}>
          <TableHead>
            <TableRow>
              <StyledTableCell><h4>Hora</h4></StyledTableCell>
              {diasSemana.map((dia) => (
                <StyledTableCell key={dia}><h4>{dia}</h4></StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {franjasHorarias.map((franja) => (
              <TableRow key={franja} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{franja}</TableCell>
                {diasSemana.map((dia) => {
                  // const horario = schedule.find((h) => h.dia === dia && h.franja === franja);
                  return (
                    <TableCell key={dia} >
                      <Checkbox
                        icon={<CircleOutlined/>}
                        checkedIcon={<Circle/>}
                        // checked={horario.selected}
                        onChange={() => handleCheckboxChange(dia, franja, event )}
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DoctorCalendar vacationDays={vacationDays} setVacationDays={setVacationDays}/>
      <Box sx={{display: 'flex', paddingRight: 18 , justifyContent:'flex-end' }}>
        <Button type='submit'  onClick={handleClick} endIcon={<BookmarkAddIcon/>} color='success' variant='contained' size='large' >
            Save
        </Button>    

      </Box>
    </>
  );
};

export default ScheduleDoctor;
