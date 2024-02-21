import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Login } from '../projects/Tarefas/Login/Login';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task/auth/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
