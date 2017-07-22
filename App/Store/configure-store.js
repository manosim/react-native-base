import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../Reducers';

export default function configureStore(initialState) {
  const middlewares = [

  ];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger'); // eslint-disable-line
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
