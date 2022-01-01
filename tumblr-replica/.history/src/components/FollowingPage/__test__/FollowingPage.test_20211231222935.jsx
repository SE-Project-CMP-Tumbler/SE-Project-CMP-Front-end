import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FollowingPage from '../FollowingPage';

const MockedCloseClicked = jest.fn();

describe('testing icons', () => {
  it('test the dashboard icon is exist ', async () => {
  });
  it('test if follow btn appears',
    async () => {
      render(<FollowingPage />);
      // const Human = screen.getByTestId('HumanIcon');
      const searchInput = screen.getByPlaceholderText(/Enter a username,URL,email address to follow/i);
      searchInput.simulate('change', { target: { value: 'Hallaa' } });
      const followbutton = screen.getByText(/Follow/i);
      fireEvent.click(followbutton);
      const msg = screen.getById('afterFollowMessage');
      expect(msg).toBeVisible();
    });
});