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
      const searchInput =  screen.get
      fireEvent.click(Human);
      const InputElement = screen.getByTestId('FollowBtn');
      expect(InputElement).toBeVisible();
    });
  it('test if the block button disappear if the human icon clicked twice',
    async () => {
      render(<NavBar CloseClicked={MockedCloseClicked} />);
      const Human = screen.getByTestId('HumanIcon');
      fireEvent.click(Human);
      const InputElement = screen.getByTestId('BlockBtn');
      fireEvent.click(Human);
      expect(InputElement).not.toBeVisible();
    });
});