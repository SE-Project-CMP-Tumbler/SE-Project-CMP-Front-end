import jest from '@testing-library/jest-dom';

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'raghad',
          last: 'khaled',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/59.jpg',
        },
        login: {
          username: 'ThePhonyGOAT',
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
