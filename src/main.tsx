import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { App } from './App';
import './assets/styles/index.scss'; // Подключаем глобальные стили и шрифт

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Добавь basename, соответствующий твоему репозиторию/папке */}
      <BrowserRouter basename="/PixemaProject"> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);