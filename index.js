import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

const Redux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )


AppRegistry.registerComponent(appName, () => Redux);
