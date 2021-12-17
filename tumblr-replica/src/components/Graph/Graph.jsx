import * as React from 'react';
import * as V from 'victory';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { scaleTime } from 'd3-scale';

export default function Graph() {
  const data = [
    { x: new Date(2021, 5, 1), y: 8 },
    { x: new Date(2021, 5, 2), y: 10 },
    { x: new Date(2021, 5, 3), y: 7 },
    { x: new Date(2021, 5, 4), y: 4 },
    { x: new Date(2021, 5, 7), y: 6 },
    { x: new Date(2021, 5, 8), y: 3 },
    { x: new Date(2021, 5, 9), y: 7 },
    { x: new Date(2021, 5, 10), y: 9 },
    { x: new Date(2021, 5, 11), y: 6 },
  ];

  // scaleDiscontinuous and discontinuitySkipWeekends are both
  // plugins imported from @d3fc/d3fc-discontinuous-scale
  // const discontinuousScale = V.scaleDiscontinuous(
  //   scaleTime(),
  // ).discontinuityProvider(discontinuitySkipWeekends());
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age2, setAge2] = React.useState('');

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  return (
    <>
      <FormControl variant="standard" sx={{ ml: 3, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{ color: 'white' }}>Last Day</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Last Day</MenuItem>
          <MenuItem value={10}>Last Three Days</MenuItem>
          <MenuItem value={20}>Last Week</MenuItem>
          <MenuItem value={30}>Last month</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ ml: 1, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{ color: 'white' }}>Daily</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age2}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Hourly</MenuItem>
        </Select>
      </FormControl>
      <V.VictoryChart
        width={700}
        height={400}
        theme={V.VictoryTheme.material}
      >
        <V.VictoryArea
          data={data}
          style={{
            data: {
              fill: 'lightblue', fillOpacity: 0.7, stroke: '#c43a31', strokeWidth: 3,
            },
          }}
        />
      </V.VictoryChart>
    </>
  );
}
