import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../states/test-utils/test-followingpage';
import Follower from '../subcomponents/Follower';

// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint
const handlers = [
  rest.get('/followers', (_req, res, ctx) => res(ctx.json(), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('FollowingBlog', () => {
  test('fetches & receives a follower data  ', async () => {
    render(<Follower id={5}
      blogavatarshape ="circle"
      blogavatar="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      blogusername="nadeen"
      followingfrom=""
      lastupdate="" />);
      expect(await screen.findByText(/nadeen/i)).toBeInTheDocument();
  });
  it('test that the img is visible ', async () => {
    render(<Follower id={6}
      blogavatarshape ="circle"
      blogavatar="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      blogusername="nadeen"
      followingfrom="" />);

      const followerimg = screen.getByRole('img');
      expect(followerimg).toHaveAttribute('src', "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e");
  });
});