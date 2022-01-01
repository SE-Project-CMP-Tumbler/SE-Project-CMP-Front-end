import React from 'react';
import { rest } from 'msw';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../states/test-utils/test-chat';
import ChatInput from '../subcomponents/ChatInput';

// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint
const handlers = [
  rest.get('/followings', (_req, res, ctx) => res(ctx.json(), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('ChatInput', () => {
  test('fetches & receives the data of the message sent ', async () => {
    render(<ChatInput
      text ="Hello"
      img="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      from="nadeen"
      photo="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      gif="" />);
      expect(await screen.findByText(/nadeen/i)).toBeInTheDocument();
  });
  it('test that the img is visible ', async () => {
    render(<ChatInput
        text ="Hello"
        img="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        from="nadeen"
        photo="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        gif="" />);

      const photo = screen.getByTestId('photo-id');
      expect(photo).toHaveAttribute('src', "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e");
  });
  it('test that the img is visible ', async () => {
    render(<ChatInput
        text ="Hello"
        img="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        from="nadeen"
        photo="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        gif="" />);

const input = screen.getByTestId('search-input');
const sendbutton = screen.getByTestId('send-button');
fireEvent.change(input, {target: {value: 'nadeen'}});
fireEvent.keyDown(sendbutton, {key: 'Enter', code: 'Enter', charCode: 13});
// expect(hasInputValue(input, "nadeen")).toBe(true)
expect(input.value).toBe('');
  });
});