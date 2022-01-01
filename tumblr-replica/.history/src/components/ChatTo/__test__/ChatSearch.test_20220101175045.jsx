import React from 'react';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen, fireEvent } from '../../../states/test-utils/test-followingpage';
import ChatSearch from '../subcomponents/ChatSearch';


// We use msw to intercept the network request during the test,
// and return the response after 150ms
// when receiving a get request to the `tag/data/:TagDescription` endpoint


describe('ChatSearch', () => {
  it('test that the input have the value we entered ', async () => {
    render(<ChatSearch />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, {target: {value: 'nadeen'}})
    // expect(hasInputValue(input, "nadeen")).toBe(true)
    expect(input.value).toBe('nadeen')
  });
});