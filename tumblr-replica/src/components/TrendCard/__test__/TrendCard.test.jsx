import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import TrendCard from '../TrendCard';

const MockTrendCard = ({
  image1, tag, number, color,
}) => (
  <BrowserRouter>
    <TrendCard
      image1={image1}
      tag={tag}
      color={color}
      number={number}
    />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

describe('NavTabs', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('TrendCard', () => {
    it('check the Card number', async () => {
      render(
        <MockTrendCard image1="https://picsum.photos/id/1/200/300" tag="Red" number={1} color="#444950" />,
      );
      const seElement = screen.getByText(/1/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should have the tag description', async () => {
      render(
        <MockTrendCard image1="https://picsum.photos/id/1/200/300" tag="Red" number={1} color="#444950" />,
      );
      const seElement = screen.getByText(/Red/i);
      expect(seElement).toBeInTheDocument();
    });
    it('check that the image is show', () => {
      render(
        <MockTrendCard image1="https://picsum.photos/id/1/200/300" tag="Red" number={1} color="#444950" />,
      );
      // console.log(webner.debug());
      const tagimg = screen.getAllByRole('img')[0];
      expect(tagimg).toHaveAttribute('src', 'https://picsum.photos/id/1/200/300');
    });
  });
});

MockTrendCard.propTypes = {
  image1: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
