import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from 'react-redux-firebase';
import firebase from './config/fbConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const rrfConfig = {
  userProfile: 'users',
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ data: Data }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div>
        <h2 style={{ color: 'white' }}>Loading...</h2>
      </div>
    );
  return <Data />;
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded data={App} />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
