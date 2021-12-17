import React from 'react';
import { render, screen } from '@testing-library/react';
import Newsfeed from '../Newsfeed';

test('renders learn react link', () => {
  render(<Newsfeed />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});
