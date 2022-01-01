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
import { render, screen, fireEvent } from '../../../states/test-utils/test-followingpage';
import '@testing-library/jest-dom/extend-expect';
import FollowingPage from '../FollowingPage';

const MockedCloseClicked = jest.fn();

describe('testing Follow button ', () => {
  it('test if search to follow functionality',
    async () => {
      render(<FollowingPage CloseClicked={MockedCloseClicked} />);
      // const Human = screen.getByTestId('HumanIcon');
      const searchInput = screen.getByPlaceholderText(/Enter a username,URL,email address to follow/i);
      searchInput.simulate('change', { target: { value: 'Hallaa' } });
      const followbutton = screen.getByText(/Follow/i);
      fireEvent.click(followbutton);
      const msg = screen.getById('afterFollowMessage');
      expect(msg).toBeVisible();
    });
});
