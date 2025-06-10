import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './component/State/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* StrictMode React development tools වලට warnings, unsafe lifecycle methods, etc. පෙන්වන්න යොදා ගනී. Production වලට බලපෑමක් නෑ. */}
    <BrowserRouter> {/* BrowserRouter navigation වල (routes) හැසිරවීමට React Router Dom එකට අවශ්‍යයි */}
      <Provider store={store}> {/* Redux Provider එක Redux store එක React App එකට provide කරනවා (Store එක pass කරන්න ඕන) */}
        <App /> {/* App component එක - ඔබේ මුලික application UI එක */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
