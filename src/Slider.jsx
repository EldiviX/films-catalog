import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function CustomSlider() {
    const [value, setValue] = React.useState([1990, 2010]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: 300 }}>
            <Slider
                marks
                size='small'
                step={5}
                min={1965}
                
                max={2023}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
            />
      </Box>
    );
  }