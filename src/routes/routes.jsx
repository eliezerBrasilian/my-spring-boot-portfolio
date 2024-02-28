import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Home as HomeConsulta } from '../projects/ConsultaDeDiabetes/pages/Home';
import { Result } from '../projects/ConsultaDeDiabetes/pages/Result';
import { Home as HomeTask } from '../projects/Tarefas/Home/Home';
import { Login } from '../projects/Tarefas/Login/Login';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task/auth/login' element={<Login />} />
        <Route path='/task' element={<HomeTask />} />
        <Route path='/consulta' element={<HomeConsulta />} />
        <Route element={<Result />} path='/result/:id/:type' />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
