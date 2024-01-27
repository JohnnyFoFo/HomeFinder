// import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
// import TurnedInIcon from '@mui/icons-material/TurnedIn';
// import './NavBar.css'

// function NavBar(props) {
//   return (
//     <div className='NavBar'>

//         <div className='Home' onClick={()=> props.changePage('Home')}>
//             <HomeIcon className='HomeIcon'/>
//         </div>

//         <div className='Saved' onClick={ ()=> props.changePage('Saved')}>
//             <TurnedInIcon className='SavedIcon'/>
//         </div>

//     </div>
//   )
// }

// export default NavBar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography className='HomeText'variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=> props.changePage('Home')}>
            HomeFinder
          </Typography>

          <Button color="inherit" onClick={()=> props.changePage('Saved')}>Saved</Button>
          <Button color="inherit" onClick={()=> props.changePage('Home')}>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}