import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import RecentAndTop from '../RecentAndTop';

const MockRecentAndTop = ({ value, setValue }) => (
  <BrowserRouter>
    <RecentAndTop value={value} setValue={setValue} />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

describe('NavTabs', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('Navtabs', () => {
    it('should Select Recent', async () => {
      const setValue = (val) => (val);
      render(
        <MockRecentAndTop value={0} setValue={setValue} />,
      );
      const firsttab = screen.getByRole('tab', { name: 'Recent' });
      expect(firsttab).toHaveAttribute('aria-selected', 'true');
    });
    it('should Select Recent', async () => {
      const setValue = (val) => (val);
      render(
        <MockRecentAndTop value={1} setValue={setValue} />,
      );
      const firsttab = screen.getByRole('tab', { name: 'Top' });
      expect(firsttab).toHaveAttribute('aria-selected', 'true');
    });
  });
});

MockRecentAndTop.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
