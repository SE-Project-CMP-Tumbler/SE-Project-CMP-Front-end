import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HereIsWhatIsTrendingButton from '../subcomponents/HereIsWhatIsTrendingButton/HereIsWhatIsTrendingButton';

const MockHereIsWhatIsTrendingButton = () => (
  <BrowserRouter>
    <HereIsWhatIsTrendingButton />
  </BrowserRouter>
);

describe('HereIsWhatIsTrendingButton', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('HereIsWhatIsTrendingButton', () => {
    it('should have text /Here\'s what\'s trending containing again', async () => {
      render(
        <MockHereIsWhatIsTrendingButton />,
      );
      const seElement = await screen.getByText(/Here's what's trending/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should have text Sign Up only not containing again', async () => {
      render(
        <MockHereIsWhatIsTrendingButton />,
      );
      const seElement = await screen.queryByText(/Sign up again/i);
      expect(seElement).not.toBeInTheDocument();
    });
  });
});
