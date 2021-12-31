import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FollowingPage from '../FollowingPage';

const MockedCloseClicked = jest.fn();

describe('testing icons', () => {
  it('test the dashboard icon is exist ', async () => {
    render(<FollowingPage CloseClicked={MockedCloseClicked} />);
    const HomeIcon = screen.getByTestId('HomeIcon');
    expect(HomeIcon).toBeInTheDocument();
  });
  it('test if follow btn appears',
    async () => {
      render(<FollowingPage CloseClicked={MockedCloseClicked} />);
      const Human = screen.getByTestId('HumanIcon');
      fireEvent.click(Human);
      const InputElement = screen.getByTestId('FollowBtn');
      expect(InputElement).toBeVisible();
    });
  it('test if the block button disappear if the human icon clicked twice',
    async () => {
      render(<FollowingPage CloseClicked={MockedCloseClicked} />);
      const Human = screen.getByTestId('HumanIcon');
      fireEvent.click(Human);
      const InputElement = screen.getByTestId('BlockBtn');
      fireEvent.click(Human);
      expect(InputElement).not.toBeVisible();
    });
});
