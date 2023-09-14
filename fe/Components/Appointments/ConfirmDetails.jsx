'use client';
import { Grid, Typography, Box, FormControlLabel, Switch } from "@mui/material"
import { colors } from "@/app/colors";
import { useState } from "react";
const ConfirmDetails = (params) => {
  
  const {doctorSpeciality, timeChoosed, dayChoosed} = params
  const [checked, setChecked] = useState(false)
  
  
  const handdleChange = async (event) => {
    setChecked(!checked)
  }
    return (
    <>
      <Grid  justifyContent={'center'} alignItems={'center'} container spacing={2} gap={2} rowSpacing={2} marginTop={2}>
        <Grid item sm={12}>
          
          <Typography variant="h5"  marginBottom={2}>

            Appointment Info
          </Typography>
        </Grid>
        <Grid item  md={6} sm={10} sx={{backgroundColor: '#f2f2f2', borderRadius: '3%', color: '#131313', padding: 2}}>
          <Typography sx={{borderBottom: 'solid 1px gray'}} marginBottom={2}>

            VideoConference
          </Typography>
          <Typography sx={{borderBottom: 'solid 1px gray'}} marginBottom={2}>

            Speciality: {doctorSpeciality}
          </Typography>
          <Typography sx={{borderBottom: 'solid 1px gray'}} marginBottom={2}>
            Date: {dayChoosed.slice(0, 14)}
          </Typography>
          <Typography sx={{borderBottom: 'solid 1px gray'}} marginBottom={2}>
            Time: {timeChoosed}
          </Typography>
          <Typography sx={{borderBottom: 'solid 1px gray'}} marginBottom={2}>

            Platform: Jitsy
          </Typography>
          {/* Patient: {userData} */} 
        </Grid>
        <Grid item sm={12}>
          
          <Typography variant="h5"  marginBottom={2}>

            Resume
          </Typography>
        </Grid>
        <Grid item md={6} sm={10} sx={{backgroundColor: '#f2f2f2', borderRadius: '13px', paddingLeft: '0px'}}>
          <Box sx={{display: 'flex', justifyContent:'space-between', padding: 2, borderBottom: 'solid gray 1px'}}>
            <Typography>
              VideoConference 
            </Typography>
            <Typography>
              $20           
            </Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent:'space-between', padding: 2}}>
            <Typography>
              Total
            </Typography>
            <Typography>
              $20          
            </Typography>
          </Box>
        </Grid>
        <Grid justifySelf={'flex-end'} item sm={6}>
          <FormControlLabel onChange={handdleChange} checked={checked}  required control={<Switch />} label="Required, you accept our data processing policies "/>
        </Grid>
      </Grid>
    </>
  )
}

export default ConfirmDetails