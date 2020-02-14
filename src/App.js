import React from 'react';
import { Provider } from 'react-redux';
import store from './app/config/store';
import AppContainer from './main';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
