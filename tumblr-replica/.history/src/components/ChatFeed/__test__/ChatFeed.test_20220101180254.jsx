import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../states/test-utils/test-followingpage';
import MyChatFeed from '../subcomponents/MyChatFeed';

// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint
const handlers = [
  rest.get('/followings', (_req, res, ctx) => res(ctx.json(), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('MyChatFeed', () => {
  test('fetches & receives the data of the message sent ', async () => {
    render(<MyChatFeed
      text ="Hello"
      img="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      from="nadeen"
      photo=""
      gif="" />);
      expect(await screen.findByText(/nadeen/i)).toBeInTheDocument();
  });
  it('test that the img is visible ', async () => {
    render(<MyChatFeed id={5}
      blogavatarshape ="circle"
      blogavatar="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      blogusername="nadeen"
      followingfrom=""
      lastupdate="" />);

      const followingimg = screen.getByRole('img');
      expect(followingimg).toHaveAttribute('src', "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e");
  });
});