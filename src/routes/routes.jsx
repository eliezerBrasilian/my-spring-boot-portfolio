import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Home as HomeTask } from '../projects/Tarefas/Home/Home';
import { Login } from '../projects/Tarefas/Login/Login';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task/auth/login' element={<Login />} />
        <Route path='/task' element={<HomeTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
