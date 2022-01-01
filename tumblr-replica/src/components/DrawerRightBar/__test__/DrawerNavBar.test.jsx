// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import NavBar from '../DrawerNavBar';

// const MockedCloseClicked = jest.fn();

// describe('testing navbar component', () => {
//   describe('testing input text and search icon', () => {
//     it('test the search inbut text disapear when the search button clicked twice',
//       async () => {
//         render(<NavBar CloseClicked={MockedCloseClicked} />);
//         const MessegesBtn = screen.getByTestId('MessagesBtn');
//         expect(MessegesBtn).toBeVisible();
//       });
//   });
//   describe('testing Follow button', () => {
//     it(' close btnmust appear', async () => {
//       render(<NavBar CloseClicked={MockedCloseClicked} />);
//       const CloseBtn = screen.getByTestId('CloseBtn');
//       expect(CloseBtn).toBeVisible();
//     });
//     it('if the follow button clicked it will be unfollow', async () => {
//       render(<NavBar CloseClicked={MockedCloseClicked} />);
//       const FollowBtn = screen.getByTestId('FollowBtn');
//       expect(FollowBtn).toBeVisible();
//     });
//   });
// });
