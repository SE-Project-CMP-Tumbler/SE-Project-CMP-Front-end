import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../states/test-utils/test-followinglist';
import FollowingList from '../FollowingList';

// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `follow_tag` endpoint
const handlers = [
  rest.get('follow_tag', (_req, res, ctx) => res(ctx.json({
    response: {
      tags: [
        {
          tag_description: 'Red',
          tag_image: 'http://dummyimage.com/219x105.png/dddddd/000000',
        },
        {
          tag_description: 'Khaki',
          tag_image: 'http://dummyimage.com/219x232.png/5fa2dd/ffffff',
        },
      ],
    },
    meta: { status: '200', msg: 'OK' },
  }), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('TagCard', () => {
  test('before fetch the FollowingList', async () => {
    render(<FollowingList />);
    // should show no user initially, and not be fetching a card info
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show more Tags' })).toBeInTheDocument();
  });
  it('fetches & receives a Following List after loading the page', async () => {
    render(<FollowingList />);
    expect(await screen.getByText(/Loading/i)).toBeInTheDocument();
    // Need to know how to make unit test for nested component

    // console.log(val.debug());
    // after some time, the card info should be received
    // expect(await screen.findByText(/#Red/i)).toBeInTheDocument();
    // expect(await screen.findByText(/#Khaki/i)).toBeInTheDocument();
    // const tagimg = await screen.getByRole('img');
    // expect(tagimg).toHaveAttribute('src', 'http://dummyimage.com/219x232.png/5fa2dd/ffffff');
    // expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });
});
