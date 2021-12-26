import * as React from 'react';
import * as V from 'victory';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReactLoading from 'react-loading';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function Graph({
  Notes, periodval, rateval, optionval,
}) {
  console.log(Notes, 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
  let option1 = 'Last Month';
  switch (periodval) {
    case 'day':
      option1 = 'Last day';
      break;
    case 'threedays':
      option1 = 'Last three days';
      break;
    case 'week':
      option1 = 'Last week';
      break;
    default:
      option1 = 'Last Month';
  }
  let option2 = 'Daily';
  switch (rateval) {
    case 'hourly':
      option2 = 'Hourly';
      break;
    default:
      option2 = 'Daily';
  }

  const [op1, setOp1] = React.useState('');
  const handleChange = (event) => {
    setOp1(event.target.value);
  };
  const [op2, setOp2] = React.useState('');

  const handleChange2 = (event) => {
    setOp2(event.target.value);
  };
  const buttonstyle = {
    height: 80,
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
    height: 80,
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
  const chooce = {
    display: 'block',
    padding: 5,
  };
  const linkst = { textDecoration: 'none' };
  return (
    <div xs={{ marginButton: 20 }}>
      <FormControl variant="standard" sx={{ ml: 3, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{ color: 'white', display: 'block' }}>{option1}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={op1}
          onChange={handleChange}
        >
          <Link to={`/blog/raghadkhaled/activity/${optionval}/day/${rateval}`} style={linkst}>
            <MenuItem style={chooce} value="day">Last Day</MenuItem>
          </Link>
          <Link to={`/blog/raghadkhaled/activity/${optionval}/threedays/${rateval}`} style={linkst}>
            <MenuItem style={chooce} value="threedays">Last Three Days</MenuItem>
          </Link>
          <Link to={`/blog/raghadkhaled/activity/${optionval}/week/${rateval}`} style={linkst}>
            <MenuItem style={chooce} value="week">Last Week</MenuItem>
          </Link>
          <Link to={`/blog/raghadkhaled/activity/${optionval}/month/${rateval}`} style={linkst}>
            <MenuItem style={chooce} value="month">Last month</MenuItem>
          </Link>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ ml: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{ color: 'white' }}>{option2}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={op2}
          onChange={handleChange2}
          label="Age"
        >
          <Link to={`/blog/raghadkhaled/activity/${optionval}/${periodval}/daily`} style={linkst}>
            <MenuItem style={chooce} value="daily">Daily</MenuItem>
          </Link>
          <Link to={`/blog/raghadkhaled/activity/${optionval}/${periodval}/hourly`} style={linkst}>
            <MenuItem style={chooce} value="hourly">Hourly</MenuItem>
          </Link>
        </Select>
      </FormControl>
      {Notes.meta.status === '200' && !Notes.error ? (
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
            <Grid item xs={6} sm={4}>
              <Link to={`/blog/raghadkhaled/activity/${periodval}/${rateval}`} style={linkst}>
                <Box
                  sx={optionval === 'notes' ? buttonstyle2 : buttonstyle}
                >
                  <ListItemText
                    primary={Notes.response.notes_count}
                    secondary="Notes"
                    primaryTypographyProps={primarystyle}
                    secondaryTypographyProps={secondrystyle}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Link to={`/blog/raghadkhaled/activity/new/${periodval}/${rateval}`} style={linkst}>
                <Box
                  sx={optionval === 'new' ? buttonstyle2 : buttonstyle}
                >
                  <ListItemText
                    primary={Notes.response.new_followers_count}
                    secondary="New followers"
                    primaryTypographyProps={primarystyle}
                    secondaryTypographyProps={secondrystyle}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to={`/blog/raghadkhaled/activity/total/${periodval}/${rateval}`} style={linkst}>
                <Box
                  sx={optionval === 'total' ? buttonstyle2 : buttonstyle}
                >
                  <ListItemText
                    primary={Notes.response.total_followers_count}
                    secondary="Total Followers"
                    primaryTypographyProps={primarystyle}
                    secondaryTypographyProps={secondrystyle}
                  />
                </Box>
              </Link>
            </Grid>
          </Grid>
        </>
      ) : ((Notes.error && <Alert style={{ marginTop: '15%' }} severity="error">This is an error in loading that component</Alert>)
      || (Notes.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)
      )}

    </div>
  );
}

Graph.propTypes = {
  Notes: PropTypes.shape({
    meta: PropTypes.shape({
      status: PropTypes.string.isRequired, msg: PropTypes.string.isRequired,
    }).isRequired,
    response: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.string.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
      notes_count: PropTypes.number.isRequired,
      new_followers_count: PropTypes.number.isRequired,
      total_followers_count: PropTypes.number.isRequired,
    }),
  }).isRequired,
  periodval: PropTypes.string.isRequired,
  rateval: PropTypes.string.isRequired,
  optionval: PropTypes.string.isRequired,
};
