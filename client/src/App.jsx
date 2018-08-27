import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Layout from './views/shared/Layout';
import Main from './views/shared/Main';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Layout />
      <Main />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
