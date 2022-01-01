import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { setupServer } from 'msw/node';
import FollowCard from '../FollowCard';
import { render, screen } from '../../../states/test-utils/test-followcard';

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

const MockFollowCard = ({
  image1, image2, tag, follow, randomcolor,
}) => (
  <BrowserRouter>
    <FollowCard
      image1={image1}
      image2={image2}
      tag={tag}
      follow={follow}
      randomcolor={randomcolor}
    />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

describe('FollowCard', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('FollowCard', () => {
    it('check follow button', async () => {
      render(
        <MockFollowCard image1="https://picsum.photos/id/1/200/300" image2="https://picsum.photos/id/1/200/300" tag="Red" follow={false} randomcolor="#444950" />,
      );
      const seElement = screen.getByText(/Follow/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should have the tag description', async () => {
      render(
        <MockFollowCard image1="https://picsum.photos/id/1/200/300" image2="https://picsum.photos/id/1/200/300" tag="Red" follow={false} randomcolor="#444950" />,
      );
      const seElement = screen.getByText(/Red/i);
      expect(seElement).toBeInTheDocument();
    });
    it('check that the image is show', () => {
      render(
        <MockFollowCard image1="https://picsum.photos/id/1/200/300" image2="https://picsum.photos/id/1/200/300" tag="Red" follow={false} randomcolor="#444950" />,
      );
      // console.log(webner.debug());
      const tagimg = screen.getAllByRole('img')[0];
      expect(tagimg).toHaveAttribute('src', 'https://picsum.photos/id/1/200/300');
    });
  });
});

MockFollowCard.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
  randomcolor: PropTypes.string.isRequired,
};
