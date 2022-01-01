// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';

/**
 * Component for render the chat feed part mof the chat component
 *
 * @component
 * @name
 * MyChatFeed
 * @param {} from 
 * @param img
 * @param text
 * @param photo
 * @param gif
 * @example
 * return (
 *   <MyChatFeed />
 * )
 */
function MyChatFeed({
  from, img, text, photo, gif,
}) {
  return (
    <Box style={{ display: 'flex', margin: '5px 0px' }}>
      <img
        alt=""
        src={img}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          margin: '0 15px 10px 0',
        }}
      />
      <Box className={photo ? 'message-part-p' : 'message-part-notp'}>
        <p style={{ fontSize: '0.8em', fontWeight: '550', margin: '0px' }}>
          {from}
        </p>
        {text && (
        <Typography style={{ fontSize: '13px', fontWeight: '200', wordWrap: 'break-word' }}>
          {text}
        </Typography>
        )}
        {photo && (
          <>
            <img
              alt="Not found"
              style={{
                height: '150px',
                width: '100%',
                borderRadius: '10px',
              }}
              src={photo}
            />
          </>
        ) }
        {gif && (
          <>
            <img
              alt="../../../../public/profile.png"
              style={{
                height: '100px',
                width: '75%',
                borderRadius: '10px',
                margin: '10px',
              }}
              src={gif}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

export default MyChatFeed;
