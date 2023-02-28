import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StateProvider } from './store/StateProvider';
import App from './App';
import reducer, { initialState } from './store/reducer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ToastProvider } from './components/runback/Toast/useToast';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

