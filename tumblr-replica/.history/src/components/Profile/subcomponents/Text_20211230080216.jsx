import { React, useEffect } from 'react';
// import CardHeader from '@mui/material/CardHeader';
import { Divider, Box } from '@material-ui/core';
import '../css/Text.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../../states/User/UserSlice';
function handelChange(event) {
  setAskText(event.target.value);
  }
function Text() {
  // const dispatch = useDispatch();
  // const User = useSelector(selectUser);
  useEffect(() => {
  }, []);
  return (
    <Box>
      <Box style={{ display: 'flex', width: '100%' }}>
        <input className="text-input" placeholder="Title" autoComplete="off" maxLength="150" type="text" style={{ width: '90%' }} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label style={{ width: '10%', margin: '5px', color: '' }}>Optional</label>
      </Box>
      <Divider />
      <Box style={{ display: 'flex', width: '100%' }}>
        <input className="text-input" placeholder="URL" autoComplete="off" maxLength="150" type="text" style={{ width: '80%' }} />
      </Box>
      <Divider />
      <Box style={{ display: 'flex', width: '100%' }}>
        <input className="text-input" placeholder="URL" autoComplete="off" maxLength="150" type="text" style={{ width: '80%' }} />
      </Box>
      <Divider />
      <div className="ask-textarea">
        <textarea onChange={handelChange} name="ask" maxLength="500" className="ask-text" />
      </div>
      <div className="ask-footer">
        <div className="ask-check">
          <input type="checkbox" onClick={() => setUnknown(!unknown)} className="ask-an" id="ask-anon" />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="ask-anon">Ask anonymously</label>
        </div>
        <div className="ask-submit">
          <button className="ask-btn" type="button"> Ask </button>
        </div>
      </div>

    </Box>
  );
}

export default Text;
