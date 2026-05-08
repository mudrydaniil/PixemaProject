import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'; // Импортируй созданный ранее компонент

export function App() {
  return (
    <Routes>
      {/* Если проект развернут в подпапке /PixemaProject/, добавь basename в BrowserRouter (в main.tsx) 
          или укажи путь здесь. Но лучше всего проверить main.tsx */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        <Route path="trends" element={<h2 style={{color: 'white'}}>Trends</h2>} />
        <Route path="favorites" element={<h2 style={{color: 'white'}}>Favorites</h2>} />
        <Route path="settings" element={<h2 style={{color: 'white'}}>Settings</h2>} />
        
        <Route path="*" element={<h2 style={{color: 'white'}}>Not Found</h2>} />
      </Route>
    </Routes>
  );
}