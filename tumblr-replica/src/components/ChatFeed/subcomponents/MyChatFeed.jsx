// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import User from '../../../LogedInUser/DemoUser';

function MyChatFeed({ value }) {
  // const classes = useStyles();
  return (
    <Box style={{ display: 'flex' }}>
      <Box>
        <img
          alt="Not found"
          src={User.img}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '0 15px 10px 0',
          }}
        />
      </Box>
      <Box>
        <Typography style={{ fontSize: '13px', fontWeight: '200' }}>
          {value.text}
        </Typography>
        {value.photo ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {User.name}
              {' '}
              sent a post
            </Typography>
            <img
              alt="Not found"
              style={{
                height: '100px',
                width: '75%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={value.photo}
            />
          </>
        ) : null}
        {value.gif ? (
          <>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {User.name}
              {' '}
              sent a post
            </Typography>
            <img
              alt="Not found"
              style={{
                height: '100px',
                width: '75%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={value.gif}
            />
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default MyChatFeed;

MyChatFeed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
};
