import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import NotFound from '../NoteFound';

const MockNotFound = () => (
  <BrowserRouter>
    <NotFound />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

describe('NotFound', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('NotFound', () => {
    it('should render notthing here text', async () => {
      render(
        <MockNotFound />,
      );
      const seElement = await screen.getByText(/nothing here/i);
      expect(seElement).toBeInTheDocument();
    });
  });
});
