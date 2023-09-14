'use client'
import { useAppoinmentContext } from "@/contexts/Appoinment.context"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
const paymentSuccess = () => {
  const {
		dayChoosed,
    timeChoosed,
    doctorId,
    serviceId,
    scheduleIdChoosed
	} = useAppoinmentContext()
  const localStorageData = localStorage.getItem('userData');
  const userData = JSON.parse(localStorageData)
  const userId = userData.id;
  useEffect(() => {
    const date = new Date().getTime()
    console.log(date);
    const time = '10:00-11:00'
    const arr = time.split('-')
    const dividedTime = timeChoosed.split('-')
    console.log(arr);
    const createConsult = async () => {
      try {
        const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/consult`, {
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    createConsult()
  }, [])
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100%'}>
      <Typography>Consult succesfully created</Typography>
    </Box>
  )
}

export default paymentSuccess