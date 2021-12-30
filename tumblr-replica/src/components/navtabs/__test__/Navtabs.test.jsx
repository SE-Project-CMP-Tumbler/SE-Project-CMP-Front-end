import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { setupServer } from 'msw/node';
import LnavTabs from '../LnavTabs/LnavTabs';
import { render, screen } from '../../../states/test-utils/test-test-navtabs';

const handlers = [
  rest.get('tag/data/:TagDescription', (_req, res, ctx) => res(ctx.json({
  }), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const MockNavtabs = ({ selsected }) => (
  <BrowserRouter>
    <LnavTabs tapnum={0} selsected={selsected} />
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
