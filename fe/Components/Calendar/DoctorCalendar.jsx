import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { colors } from '@/app/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Card } from '@mui/material';
import addDays from 'date-fns/addDays';
export default function DoctorCalendar(props) {
  const today = new Date();
  const {values, setValues} = props;
  const minDay = addDays(today, 5)
  const handleDeleteDate = (id) => {
    const newValues = values.filter((value) => {
      return value.id !== id;
    })
    setValues(newValues)
  }
  const handleChooseDate = (newValue) => {
    const valueToString = newValue.toString().slice(0,16)
    const found = values.find((value) => value.title === valueToString)
    if(found === undefined){
      
      const newCard = {id: values.length + 1, title: valueToString}
      setValues([...values, newCard ]);
    }
  }

  return (
    <Grid  mt={4} mb={10} container gap={4} spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={10} md={10}>
        <Typography color={colors.text} fontSize={18}>Aqui puedes añadir algún dia en especifico en el cual no estaras disponible(recuerda que tiene que ser 5 días antes)</Typography>
      </Grid>
      <Grid item md={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker minDate={minDay}  onChange={(newValue) => handleChooseDate(newValue)}/>
        </LocalizationProvider>

      </Grid>
      <Grid id='cardsContainer' item md={6}>
        {values.map((value) => (
                  <Card sx={{margin: 5}}>
                  <CardHeader
                    titleTypographyProps={{variant:'h7' , color: colors.text } }
                    title={value.title}
                    action={
                      <IconButton onClick={() => handleDeleteDate(value.id)}>
                        <CloseIcon   />
                      </IconButton>
                    }
                  />
                </Card>
        
        ))}
      </Grid>
    </Grid>
      
  );
}
