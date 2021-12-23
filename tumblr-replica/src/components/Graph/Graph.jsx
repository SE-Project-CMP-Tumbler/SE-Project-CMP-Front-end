import * as React from 'react';
import * as V from 'victory';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReactLoading from 'react-loading';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, fetchAsyncgraphnotes } from '../../states/features/graph/graphSlice';

export default function Graph() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncgraphnotes());
  }, []);
  const Notes = useSelector(getNotes);

  // console.log(Notes.response.data[0]);

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age2, setAge2] = React.useState('');

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const buttonstyle = {
    height: 100,
    backgroundColor: '#21374f',
    borderRadius: 3,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const primarystyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
  };
  const secondrystyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,.5)',
    fontSize: 20,
    opacity: '.7',
  };
  const buttonstyle2 = {
    height: 100,
    border: 3,
    borderRadius: 3,
    borderColor: 'primary.main',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  };
  return (
    <div xs={{ marginButton: 20 }}>
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
      {Notes.meta.status === '200' ? (
        <>
          <V.VictoryChart
            width={700}
            height={400}
            theme={V.VictoryTheme.material}
          >
            <V.VictoryArea
              data={Notes.response.data}
              style={{
                data: {
                  fill: 'lightblue', fillOpacity: 0.7, stroke: '#c43a31', strokeWidth: 3,
                },
              }}
            />
          </V.VictoryChart>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box
                sx={buttonstyle}
              >
                <ListItemText
                  primary={Notes.response.notes_count}
                  secondary="Notes"
                  primaryTypographyProps={primarystyle}
                  secondaryTypographyProps={secondrystyle}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={buttonstyle}
              >
                <ListItemText
                  primary={Notes.response.new_followers_count}
                  secondary="New followers"
                  primaryTypographyProps={primarystyle}
                  secondaryTypographyProps={secondrystyle}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={buttonstyle2}
              >
                <ListItemText
                  primary={Notes.response.total_followers_count}
                  secondary="Total Followers"
                  primaryTypographyProps={primarystyle}
                  secondaryTypographyProps={secondrystyle}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (Notes.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)}

    </div>
  );
}
