import React from 'react';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../states/test-utils/test-followingpage';
import ChatSearch from '../subcomponents/ChatSearch';


// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint


describe('Follower', () => {
  it('test that the img is visible ', async () => {
    render(<MockFollower  id={6}
      blogavatarshape ="circle"
      blogavatar="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      blogusername="maryem"
      followingfrom="" />);

      const followerimg = screen.getByRole('img');
      expect(followerimg).toHaveAttribute('src', "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e");
  });
});