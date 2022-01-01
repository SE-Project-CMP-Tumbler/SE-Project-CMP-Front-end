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
import { render, screen } from '../../../states/test-utils/test-followingpage';
import FollowingPage from '../FollowingPage';

// // We use msw to intercept the network request during the test,
// // and return the response after 150ms
// // when receiving a get request to the `tag/data/:TagDescription` endpoint
// const handlers = [
//   rest.get('/followings', (_req, res, ctx) => res(ctx.json({
//     response: {
//       tag_description: 'books',
//       tag_image: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg',
//       followed: true,
//       followers_number: 1026,
//     },
//     meta: { status: '200', msg: 'OK' },
//     followings: [
//       {
//         blog_id: 3,
//         blog_avatar: 'https://1.bp.blogspot.com/-ri-t_jE_GM4/Xxgw4ilrPrI/AAAAAAAAm88/iHmDzhRn24grXa15u_FWu8ksEc5L6byVgCLcBGAsYHQ/s1600/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25A8%25D8%25B1%25D9%2588%25D9%2581%25D8%25A7%25D9%258A%25D9%2584-2.jpg',
//         blog_avatar_shape: 'circle',
//         blog_username: 'ahmed-ahmed213',
//       },
//       {
//         blog_id: 4,
//         blog_avatar: 'https://img.wattpad.com/cover/259072761-288-k591831.jpg',
//         blog_avatar_shape: 'circle',
//         blog_username: 'allaa-ahmed213',
//       },
//       {
//         blog_id: 5,
//         blog_avatar: 'https://blogger.googleusercontent.com/img/a/AVvXsEiwC2ML1gwFe0B73u8_cT-yj-DAfgLYzw0Lps0glNxASUl5bqYKRcYL5_UMVn3KRroJw9ZcUJQEbXA1I1zdBHE5oXpuiQ45S8YwfgSEuIU9pCCf1pb4B8Gy4A0XpVtFmZwk3LSTEryQalFBYC1v43IFotAwwc8eUOCAjTQEOFmOL8wGMwJ0cEicPW6j=s16000',
//         blog_avatar_shape: 'circle',
//         blog_username: 'maryem-ahmed213',
//       }],
//   }), ctx.delay(150))),
// ];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

// describe('TagCard', () => {
//   test('fetches & receives a followings from the end point /followings ', async () => {
//     render(<FollowingPage />);
//     // should show no user initially, and not be fetching a card info
//     // expect(screen.getByText(/Loading/i)).toBeInTheDocument();
//   });
//   it('fetches & receives a followings data after loading the page', async () => {
//     render(<FollowingPage />);

//     // after some time, the followings data come
//     expect(await screen.findByText(/Unfollow/i)).toBeInTheDocument();
//   });
// });
