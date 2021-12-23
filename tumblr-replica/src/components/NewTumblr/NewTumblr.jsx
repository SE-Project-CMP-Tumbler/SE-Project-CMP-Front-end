import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/dist/NewTumblr.css';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  selectInputData, setTitle, setURL, initializeState,
} from '../../states/newtumblr/newtumblrSlice';

function onChange(value) {
  console.log('Captcha value:', value);
}

/**
 * This is the NewTumblr component (to create a new tumblr under the same user)
 * @component
 * @returns {ReactJSXElement} JSX Element.
 */
function NewTumblr() {
  const dispatch = useDispatch();
  const inputs = useSelector(selectInputData);
  useEffect(() => dispatch(initializeState()), []);

  return (
    <div className="new-tumblr">
      <div className="top-content">
        <h1>Create a new blog</h1>
        <p>
          <span>Note</span>
          : If you want to Like posts or Follow other users with this blog identity,
          you must create a separate account.
          <br />
          Learn more about&nbsp;
          <a href="https://tumblr.zendesk.com/hc/en-us/sections/205853348-Blog-management">Primary vs. Secondary blog features here.</a>
        </p>
      </div>
      <div className="form-content">
        <form>
          <div className="inputs-container">
            <div className="input-container">
              <div className="input-name">
                <p> Title </p>
              </div>
              <div className="input-field">
                <input type="text" id="title" value={inputs.title} onChange={(e) => dispatch(setTitle(e.target.value))} size="50" />
              </div>
              <div className="hint">
                <p>(e.g. Acme Corp, Sara & Jacob, My Awesome Blog)</p>
              </div>
            </div>
            <div className="input-container">
              <div className="input-name">
                <p> URL </p>
              </div>
              <div className="input-field">
                <input type="text" id="url" className="url" size="50" value={inputs.url} onChange={(e) => dispatch(setURL(e.target.value))} />
              </div>
              <div className="hint">
                <p>(you can change this at any time)</p>
              </div>
            </div>
            <ReCAPTCHA
              sitekey="6LfVPrAdAAAAABYQoK5hJ6Exrg61GA9FGk2n0z0h"
              onChange={onChange}
              className="recaptcha"
            />
            <div className="button-group">
              <button type="submit" className="submit">Create Blog</button>
              <button type="button" className="cancel"><Link to="/dashboard">Cancel</Link></button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default NewTumblr;