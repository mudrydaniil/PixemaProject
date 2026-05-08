import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Главная страница */}
        <Route index element={<h2 style={{color: 'white'}}>Home Page (Movies)</h2>} />
        
        {/* Другие страницы (пока заглушки) */}
        <Route path="trends" element={<h2 style={{color: 'white'}}>Trends</h2>} />
        <Route path="favorites" element={<h2 style={{color: 'white'}}>Favorites</h2>} />
        <Route path="settings" element={<h2 style={{color: 'white'}}>Settings</h2>} />
        
        {/* Маршрут для 404 (если страница не найдена) */}
        <Route path="*" element={<h2 style={{color: 'white'}}>Not Found</h2>} />
      </Route>
    </Routes>
  );
}