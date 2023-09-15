import { Typography,  Box, Button } from "@mui/material"
import { useRouter } from 'next/navigation';
const ProceedWithThePayment = (params) => {
  const {push} =  useRouter()
  const serviceId = params.serviceId
  const localStorageData = localStorage.getItem('userData');
  const userData = JSON.parse(localStorageData)
  const {doctorId} = params
  const requirePaymentLink = async ()  => {
    // const body = {
    //   patientId: userData.id,
    //         medicId: doctorId,  
    //         serviceId: serviceId, 
    //         platform: 'Stripe' 
    // }
    // console.log(body);
    try {
      const response = await fetch(`http://localhost:3005/api/v1/payment/stripe/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(
          {
            patientId: userData.id,
            medicId: doctorId,
            serviceId: serviceId, 
            platform: 'Stripe'         
          }
        )
      
      });

      const data = await response.json();
      const paymentLink = data.data
      push(paymentLink)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Typography>
        Now we are gonna redirect u to stripe webesite to proceed with the payment
      </Typography>
      <Button sx={{marginTop:3}} variant="contained" onClick={requirePaymentLink}>Proceed with the payment</Button>
    </Box>
  )
}

export default ProceedWithThePayment