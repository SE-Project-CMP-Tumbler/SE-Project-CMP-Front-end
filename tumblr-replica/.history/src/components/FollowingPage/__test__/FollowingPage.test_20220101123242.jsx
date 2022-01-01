// import React from 'react';
// import { render, screen, fireEvent } from '../../../states/test-utils/test-followingpage';
// import '@testing-library/jest-dom/extend-expect';
// import FollowingPage from '../FollowingPage';

// const MockedCloseClicked = jest.fn();

// describe('testing Follow button ', () => {
//   it('test if search to follow functionality',
//     async () => {
//       render(<FollowingPage CloseClicked={MockedCloseClicked} />);
//       // const Human = screen.getByTestId('HumanIcon');
//       const searchInput = screen.getByPlaceholderText
// (/Enter a username,URL,email address to follow/i);
//       searchInput.simulate('change', { target: { value: 'Hallaa' } });
//       const followbutton = screen.getByText(/Follow/i);
//       fireEvent.click(followbutton);
//       const msg = screen.getById('afterFollowMessage');
//       expect(msg).toBeVisible();
//     });
// });
import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen, fireEvent } from '../../../states/test-utils/test-followingpage';
import FollowingPage from '../FollowingPage';

// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint
const handlers = [
  rest.get('tag/data/:TagDescription', (_req, res, ctx) => res(ctx.json({
    response: {
      tag_description: 'books',
      tag_image: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg',
      followed: true,
      followers_number: 1026,
    },
    meta: { status: '200', msg: 'OK' },
  }), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('TagCard', () => {
  test('fetches & receives a card data after loading the tagged/:tag_description page', async () => {
    render(<TagCard />);
    // should show no user initially, and not be fetching a card info
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it('fetches & receives a card data after loading the tagged/:tag_description page', async () => {
    render(<TagCard />);

    // after some time, the card info should be received
    expect(await screen.findByText(/books/i)).toBeInTheDocument();
    expect(await screen.findByText(/1026/i)).toBeInTheDocument();
    const tagimg = screen.getByRole('img');
    expect(tagimg).toHaveAttribute('src', 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg');
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });
});

