import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import LogInButton from '../subcomponents/LogInButton/LogInButton';

const MockLogInButton = ({ worksAsLink, bgColor }) => (
  <BrowserRouter>
    <LogInButton worksAsLink={worksAsLink} bgColor={bgColor} />
  </BrowserRouter>
);

describe('LogInButton', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('LogInButton', () => {
    it('should exist in the document', async () => {
      render(
        <MockLogInButton worksAsLink={false} bgColor="#123456" />,
      );
      const seElement = await screen.getByText(/Log in/i);
      expect(seElement).toBeInTheDocument();
    });
    it('should have type submit', async () => {
      render(
        <MockLogInButton worksAsLink={false} bgColor="#123456" />,
      );
      const buttonItem = screen.getByRole('button');
      expect(buttonItem).toBeInTheDocument();
      expect(buttonItem).toHaveAttribute('type', 'submit');
    });
  });
});

MockLogInButton.propTypes = {
  worksAsLink: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
};
