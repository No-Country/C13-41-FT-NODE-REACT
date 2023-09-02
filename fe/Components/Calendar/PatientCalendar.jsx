import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/system';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { addDays } from 'date-fns';
const PatienteCalendar = () => {
  const today = new Date();
  const minDay = addDays(today, 2)
  const handleChooseDate = () => {
    console.log('hola');
  }
  return (
      <Box sx={{marginTop: 6}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker minDate={minDay}  onChange={(newValue) => handleChooseDate(newValue)}/>
        </LocalizationProvider>  
      </Box>
  )
}

export default PatienteCalendar
