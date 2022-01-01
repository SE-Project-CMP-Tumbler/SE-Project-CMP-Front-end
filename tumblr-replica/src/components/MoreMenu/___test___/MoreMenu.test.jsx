/* eslint-disable eol-last */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen, fireEvent } from '../../../states/test-utils/test-moremenu';
import MoreMenu from '../MoreMenu';

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

describe('FollowingBlog', () => {
  test('fetches & receives a following data of the following ', async () => {
    render(<MoreMenu
        postId={1}
         blogId={1}
         postTime={'2022-02-02'}
         pinned={false}
        />);
      expect(screen.getAllByRole('button').length).toEqual(2);
  });
  it('test that the 4 buttons exist ', async () => {
    render(<MoreMenu
        postId={1}
         blogId={1}
         postTime={'2022-02-02'}
         pinned={false}
        />);
      const moremenu = screen.getByTestId(5);
      fireEvent.click(moremenu);
      const buttons = await screen.findByText('Unfollow');
      expect(buttons).toBeInTheDocument();
  });
});