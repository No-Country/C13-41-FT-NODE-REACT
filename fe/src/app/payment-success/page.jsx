'use client'
import { useAppoinmentContext } from "@/contexts/Appoinment.context"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const paymentSuccess = () => {
  const {
		dayChoosed,
    timeChoosed,
    doctorId,
    serviceId,
    scheduleIdChoosed,
    userId
	} = useAppoinmentContext()
  
  useEffect(() => {
    const dividedTime = timeChoosed.split('-')
    const createConsult = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/v1/consult`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(
            {
              diagnostic: '',
              recipe: '',
              consultTimestamp: dayChoosed.getTime(),
              status: 'programmed',
              resume: '',
              urlFile: '',
              initialHour: dividedTime[0],
              finalHour: dividedTime[1],
              medicId: doctorId,
              patientId: userId,
              scheduleId: scheduleIdChoosed,
              serviceId: serviceId
            }
          )
        
        });
  
        const data = await response.json();
      } catch (error) {

      }
    }
    createConsult()
  }, [])
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'80vh'} width={'100%'}>
      <Box>

       <CheckCircleOutlineIcon fontSize="large" sx={{display:'block'}} color="success"/>
      </Box>
      <Typography margin={2} variant='h4'>Consult succesfully created</Typography>
      <Typography margin={2}>You can see the link of the appointment the same day</Typography>
      <Button sx={{margin: 2}} href="/home" variant="contained">Back to the home</Button>
    </Box>
  )
}

export default paymentSuccess