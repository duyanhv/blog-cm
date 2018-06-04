import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import { history, store } from './redux/store';
import bootstrap from './bootstrap';
import { Routes } from './routes';
import { I18nextProvider } from 'react-i18next';

bootstrap().then(i18n => {
  ReactDOM.render(
    <div className="app">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18n as any}>
            <Routes />
          </I18nextProvider>
        </ConnectedRouter>
      </Provider>
    </div>,
    document.getElementById('root') as HTMLElement,
  );
});

registerServiceWorker();
