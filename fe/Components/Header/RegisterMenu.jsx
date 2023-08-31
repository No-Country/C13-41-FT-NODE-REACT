import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { ColorsKlinik } from '@/app/colors';

export default function RegisterMenu () {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean (anchorEl);

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {

    setAnchorEl(null);
    
  };

  return (
    <div>
      <Button
        id="register-button"
        aria-controls={open ? 'register-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "500"}}
      >
        Register
      </Button>
      <Menu
        id="register-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'register-button',
        }}
        disableScrollLock={true}
      >
        <MenuItem onClick={handleClose}><Link draggable="false" href="../../sign-up/doctor" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "500"}}>As a Doctor</Link></MenuItem>

        <MenuItem onClick={handleClose}><Link draggable="false" href="../../sign-up/patient" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "500"}}>As a Patient</Link></MenuItem>

      </Menu>
    </div>
  );
}