import './Loader.css'
import { Box } from '@mui/system'
const Loader = () => {
  return(
    <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center',margin: 'auto', height: '50vh', width: '100%'}}>

      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Box>

  )
}

export default Loader