import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import NavTabs from '../NavTabs';

const MockNavtabs = ({ selsected }) => (
  <BrowserRouter>
    <NavTabs tapnum={0} selsected={selsected} />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

describe('NavTabs', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('Navtabs', () => {
    it('should render same text passed into tabselected', async () => {
      render(
        <MockNavtabs selsected="More" />,
      );
      const seElement = await screen.getByText(/More/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should render Photos into tabselected', async () => {
      render(
        <MockNavtabs selsected="Photos" />,
      );
      const seElement = await screen.getByText(/Photos/i);
      expect(seElement).toBeInTheDocument();
    });
    it('Initial tab is 0 start with For You ', () => {
      render(<MockNavtabs selsected="More" />);
      // console.log(webner.debug());
      const firsttab = screen.getByRole('tab', { name: 'For You 💖' });
      expect(firsttab).toHaveAttribute('aria-selected', 'true');
    });
  });
});

MockNavtabs.propTypes = {
  selsected: PropTypes.string.isRequired,
};
