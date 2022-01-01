// import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// // Import your own reducer
// // import PropTypes from 'prop-types';
// import BlogReducer from '../blogslice/blogslice';

// function render(
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: {
//         blog: BlogReducer,
//       },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {},
// ) {
//   // eslint-disable-next-line react/prop-types
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   /* Wrapper.propTypes = {
//     children: PropTypes.objectOf(PropTypes.symbol).isRequired,
//   }; */
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// // re-export everything
// export * from '@testing-library/react';
// // override render method
// export { render };
