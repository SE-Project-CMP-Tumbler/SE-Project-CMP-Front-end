import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import Graph from '../Graph';

const MockGraph = ({
  Notes, periodval, rateval, optionval,
}) => (
  <BrowserRouter>
    <Graph
      Notes={Notes}
      periodval={periodval}
      rateval={rateval}
      optionval={optionval}
    />
  </BrowserRouter>
);

describe('TrendCard', () => {
  it('check the total follower count is shown', async () => {
    const Notes = {
      meta: {
        status: 200,
        msg: 'ok',
      },
      response: {
        notes_count: 16,
        new_followers_count: 6,
        total_followers_count: 326,
        data: [
          {
            x: '2021-11-03 01:13:39',
            y: 5,
          },
          {
            x: '2021-17-03 01:13:39',
            y: 51,
          },
          {
            x: '2021-19-03 01:13:39',
            y: 9,
          },
        ],
      },
    };
    render(
      <MockGraph Notes={Notes} periodval="day" rateval="hourly" optionval="new" />,
    );
    const seElement = screen.getByText(/326/i);
    expect(seElement).toBeInTheDocument();
  });
  it('check the new follower count is shown', async () => {
    const Notes = {
      meta: {
        status: 200,
        msg: 'ok',
      },
      response: {
        notes_count: 16,
        new_followers_count: 8,
        total_followers_count: 326,
        data: [
          {
            x: '2021-11-03 01:13:39',
            y: 5,
          },
          {
            x: '2021-17-03 01:13:39',
            y: 51,
          },
          {
            x: '2021-19-03 01:13:39',
            y: 9,
          },
        ],
      },
    };
    render(
      <MockGraph Notes={Notes} periodval="day" rateval="hourly" optionval="new" />,
    );
    const seElement = screen.getByText(/8/i);
    expect(seElement).toBeInTheDocument();
  });
  it('check that the notes count', () => {
    const Notes = {
      meta: {
        status: 200,
        msg: 'ok',
      },
      response: {
        notes_count: 16,
        new_followers_count: 6,
        total_followers_count: 326,
        data: [
          {
            x: '2021-11-03 01:13:39',
            y: 5,
          },
          {
            x: '2021-17-03 01:13:39',
            y: 51,
          },
          {
            x: '2021-19-03 01:13:39',
            y: 9,
          },
        ],
      },
    };
    render(
      <MockGraph Notes={Notes} periodval="day" rateval="hourly" optionval="new" />,
    );
    const seElement = screen.getByText(/16/i);
    expect(seElement).toBeInTheDocument();
  });
  it('check that the notes count', () => {
    const Notes = {
      meta: {
        status: 200,
        msg: 'ok',
      },
      response: {
        notes_count: 16,
        new_followers_count: 6,
        total_followers_count: 326,
        data: [
          {
            x: '2021-11-03 01:13:39',
            y: 5,
          },
          {
            x: '2021-17-03 01:13:39',
            y: 51,
          },
          {
            x: '2021-19-03 01:13:39',
            y: 9,
          },
        ],
      },
    };
    render(
      <MockGraph Notes={Notes} periodval="day" rateval="hourly" optionval="new" />,
    );
    const seElement = screen.getByText(/Last day/i);
    expect(seElement).toBeInTheDocument();
    const seElement2 = screen.getByText(/Hourly/i);
    expect(seElement2).toBeInTheDocument();
  });
});

MockGraph.propTypes = {
  Notes: PropTypes.shape({
    meta: PropTypes.shape({
      status: PropTypes.number.isRequired, msg: PropTypes.string.isRequired,
    }).isRequired,
    response: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.string.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
      notes_count: PropTypes.number.isRequired,
      new_followers_count: PropTypes.number.isRequired,
      total_followers_count: PropTypes.number.isRequired,
    }),
  }).isRequired,
  periodval: PropTypes.string.isRequired,
  rateval: PropTypes.string.isRequired,
  optionval: PropTypes.string.isRequired,
};
