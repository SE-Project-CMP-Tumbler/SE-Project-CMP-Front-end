import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import FollowingTag from '../FollowingTag';

const MockFollowingTag = ({ imagUrl, tag }) => (
  <BrowserRouter>
    <FollowingTag imagUrl={imagUrl} tag={tag} />
  </BrowserRouter>
);

describe('FollowingTag', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('FollowingTag', () => {
    it('should render same tag name passed into FollowingTag', async () => {
      render(
        <MockFollowingTag imagUrl="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg" tag="book" />,
      );
      const seElement = await screen.getByText(/#book/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should render same img passed into FollowingTag', async () => {
      render(
        <MockFollowingTag imagUrl="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg" tag="book" />,
      );
      const tagimg = screen.getByRole('img');
      expect(tagimg).toHaveAttribute('src', 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg');
      expect(tagimg).toHaveAttribute('alt', 'followingblog');
    });
  });
});

MockFollowingTag.propTypes = {
  imagUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
