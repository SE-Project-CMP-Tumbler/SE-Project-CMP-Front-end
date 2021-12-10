import React from 'react';
import './css/dist/ArtifactsPage.css';

const ArtifactsPage = () => (
  <>
    <div className="invite">
      <abbr title="click on one of the phones to get redirected."><h1>Download our app now!</h1></abbr>
    </div>
    <div className="artifacts-box">
      <div className="image">
        <a href="http://download.tumbler.social/cross">
          <img src="./flutter.png" className="flutter" title="Choose your phone!" alt="" />
        </a>
        <a href="http://download.tumbler.social/android">
          <img src="./android.png" className="android" title="Choose your phone!" alt="" />
        </a>
      </div>
    </div>
  </>
);

export default ArtifactsPage;
