import { React, useEffect, useState } from 'react';
// import CardHeader from '@mui/material/CardHeader';
import { Divider, Box } from '@material-ui/core';
import '../css/Text.css';
import '../css/ProfileHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitAsynch } from '../../../states/submit/submitAPI';
// import { selectUser } from '../../../states/User/UserSlice';
import { getBlog } from '../../../states/blogslice/blogslice';

function Text({ blogid }) {
  const [submitText, setSubmitText] = useState('');
  const dispatch = useDispatch();
  function handelChange(event) {
    setSubmitText(event.target.value);
  }
  function submit() {
    const body = '<div><p>' + submitText + '</p></div>';
    const today = new Date();
    const datee = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const date = datee + ' ' + time;
    const statue = 'submission';
    const type = 'general';
    dispatch(SubmitAsynch({
      body, date, blogId: blogid, statue, type,
    }));
  }
  const Blog = useSelector(getBlog).response;
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
