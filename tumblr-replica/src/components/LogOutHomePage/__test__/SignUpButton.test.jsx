import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import SignUpButton from '../subcomponents/SignUpButton/SignUpButton';

const MockSignUpButton = ({ worksAsLink, again }) => (
  <BrowserRouter>
    <SignUpButton worksAsLink={worksAsLink} again={again} />
  </BrowserRouter>
);

describe('SignUpButton', () => {
  beforeEach(() => {
    jest.mock('../../../apis/axios');
  });

  describe('SignUpButton', () => {
    it('should have text Sign Up containing again', async () => {
      render(
        <MockSignUpButton worksAsLink again />,
      );
      const seElement = await screen.getByText('Sign up again');
      expect(seElement).toBeInTheDocument();
    });
    it('should have text Sign Up only not containing again', async () => {
      render(
        <MockSignUpButton worksAsLink again={false} bgColor="#123456" />,
      );
      const seElement = await screen.queryByText(/Sign up again/i);
      expect(seElement).not.toBeInTheDocument();
    });
    it('should have type submit', async () => {
      render(
        <MockSignUpButton worksAsLink={false} again={false} bgColor="#123456" />,
      );
      const buttonItem = screen.getByRole('button');
      expect(buttonItem).toBeInTheDocument();
      expect(buttonItem).toHaveAttribute('type', 'submit');
    });
  });
});

MockSignUpButton.propTypes = {
  worksAsLink: PropTypes.bool.isRequired,
  again: PropTypes.bool.isRequired,
};
