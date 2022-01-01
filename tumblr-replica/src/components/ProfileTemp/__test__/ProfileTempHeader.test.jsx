// import React from 'react';
// import { rest } from 'msw';
// import '@testing-library/jest-dom';
// import { setupServer } from 'msw/node';
// // We're using our own custom render function and not RTL's render.
// // Our custom utils also re-export everything from RTL
// // so we can import fireEvent and screen here as well
// import { render, screen } from '../../../states/test-utils/test-drawermenu';
// import ProfileHeader from '../ProfileTempHeader';

// // We use msw to intercept the network request during the test,
// // and return the response after 150ms
// // when receiving a get request to the `tag/data/:TagDescription` endpoint
// const handlers = [
//   rest.get('blog', (_req, res, ctx) => res(ctx.json({
//     meta: {
//       status: '200',
//       msg: 'ok',
//     },
//     response: {
//       share_likes: true,
//       share_followings: true,
//       id: 2026,
//       is_primary: false,
//       username: 'ahmad-ghareeb',
//       avatar: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/131377863_2819233718394652_8340224791482069975_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH77U1q39s0YwlxOoOOZpkOYAIITRUXLK1gAghNFRcsrc0lcejGuFpG42urYOWA-vxMg8xj0ct5h4d5y17wAS7Q&_nc_ohc=d4ULMS8cbbwAX-PRlwx&_nc_ht=scontent.fcai19-7.fna&oh=00_AT-DEH7Q4u72h5t8vL3pSN0UwY5pAVLIlWKKiG2Hfl6NpA&oe=61EB56A3',
//       avatar_shape: 'circle',
//       header_image: 'https://scontent.fcai19-8.fna.fbcdn.net/v/t1.6435-9/110317044_2680778068906885_6342427761542127472_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEswvLZKjPSatwn_ayQKxQETaZe8tBIdmtNpl7y0Eh2a5d5SnznW7t0v4QioaBBFLOVbH5EDay_dHM67irUU19-&_nc_ohc=-RlN2LB1pE8AX9Zw6mj&_nc_ht=scontent.fcai19-8.fna&oh=00_AT9nEsi7oN4zphqAE9uuWZa2g4hula92bUHk6CUQGQgONw&oe=61EE2321',
//       title: 'ghareeb',
//       allow_ask: true,
//       followed: false,
//       allow_submittions: true,
//       description: 'i love food',
//     },
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
//   test('fetches & receives a card data after
// loading the tagged /:tag_description page', async () => {
//     render(<ProfileHeader BlogId={1} />);
//     // should show no user initially, and not be fetching a card info
//     const tagimg = screen.getByRole('div', { hidden: true });
//     expect(tagimg).toBeInTheDocument();
//   });
// });
