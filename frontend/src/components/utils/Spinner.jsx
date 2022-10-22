import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Spinner = ({ size, text }) => {
  
  const fontSize = size / 0.25;

  return (
    <>   
        <Box sx={{ display: 'flex', justifyContent: "center", mt: 2 }}>
            <div className='flex flex-col'>
                <CircularProgress size={`${size}rem`}/>
                <Typography sx={{mt: 2, textAlign: "initial"}} fontSize={fontSize} >{text}</Typography>
            </div>
        </Box>
    </>

  );    
}

export default Spinner;
