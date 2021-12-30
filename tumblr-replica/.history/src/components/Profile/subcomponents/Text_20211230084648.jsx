import { React, useEffect, useState } from 'react';
// import CardHeader from '@mui/material/CardHeader';
import { Divider, Box } from '@material-ui/core';
import '../css/Text.css';
import '../css/ProfileHeader.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../../states/User/UserSlice';

function Text() {
  const [submitText, setSubmitText] = useState('');
  function handelChange(event) {
    setSubmitText(event.target.value);
  }
  function submit() {
    const str = '<div><p>' + submitText + '</p></div>';
    dispatch(AskAsynch(blogid, str, unknown));
    if (AskStatue.statues === '200') {
      console.log('sucsses'); // will be changed after the api completed
      setAskText('');
      setUnknown(false);
    } else {
      console.log('fail');
    }
  }
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
        <textarea value={submitText} onChange={handelChange} name="ask" maxLength="500" className="ask-text" />
      </div>
      <div className="ask-footer">
        <div className="ask-check">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="ask-anon">Tags : </label>
          <input type="checkbox" className="ask-an" id="ask-anon" />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="ask-anon"> submission</label>
        </div>
      </div>
      <div className="ask-footer">
        <div className="ask-check" style={{ marginRight: '100px' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <input type="checkbox" className="ask-an" id="ask-anon" />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="ask-anon"> I accept the terms of submission</label>
        </div>
        <div className="ask-submit">
          <button className="ask-btn" onClick={submit} type="button"> Submit </button>
        </div>
      </div>
    </Box>
  );
}

export default Text;
