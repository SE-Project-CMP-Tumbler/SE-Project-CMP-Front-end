import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../DrawerNavBar';

const MockedCloseClicked = jest.fn();

describe('testing navbar component', () => {
  describe('testing input text and search icon', () => {
    it('test the search inbut text appears when search button clicked', async () => {
      render(<NavBar CloseClicked={MockedCloseClicked} />);
      const SearchBtn = screen.getByTestId('SearchBtn');
      fireEvent.click(SearchBtn);
      const InputElement = screen.getByTestId('SearchText');
      expect(InputElement).toBeInTheDocument();
    });
    it('test the search inbut text disapear when the search button clicked twice',
      async () => {
        render(<NavBar CloseClicked={MockedCloseClicked} />);
        const SearchBtn = screen.getByTestId('SearchBtn');
        fireEvent.click(SearchBtn);
        const InputElement = screen.getByTestId('SearchText');
        fireEvent.click(SearchBtn);
        expect(InputElement).not.toBeVisible();
      });
    it('test the search inbut text appears then type on it', async () => {
      render(<NavBar CloseClicked={MockedCloseClicked} />);
      const SearchBtn = screen.getByTestId('SearchBtn');
      fireEvent.click(SearchBtn);
      const InputElement = screen.getByTestId('SearchText');
      fireEvent.change(InputElement, { target: { value: 'Ghraboly' } });
      expect(InputElement).toHaveValue('Ghraboly');
    });
  });
  describe('testing Follow button', () => {
    it('if the follow button clicked it will be unfollow', async () => {
      render(<NavBar CloseClicked={MockedCloseClicked} />);
      const FollowBtn = screen.getByTestId('FollowBtn');
      fireEvent.click(FollowBtn);
      expect(FollowBtn).toHaveTextContent('Unfollow');
    });
    it('if the follow button clicked it will be unfollow', async () => {
      render(<NavBar CloseClicked={MockedCloseClicked} />);
      const FollowBtn = screen.getByTestId('FollowBtn');
      fireEvent.click(FollowBtn);
      fireEvent.click(FollowBtn);
      expect(FollowBtn).toHaveTextContent('Follow');
    });
  });
});
