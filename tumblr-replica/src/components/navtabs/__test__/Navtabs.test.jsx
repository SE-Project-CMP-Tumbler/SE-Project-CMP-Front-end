import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavTabs from '../Navtabs';

const MockNavtabs = () => (
  <BrowserRouter>
    <NavTabs tapnum={1} selsected="More" />
  </BrowserRouter>
);

describe('NavTabs', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('Navtabs', () => {
    it('should render same text passed into tabselected', async () => {
      render(
        <MockNavtabs />,
      );
      const seElement = await screen.getByText(/More/i);
      expect(seElement).toBeInTheDocument();
    });
  });
});
