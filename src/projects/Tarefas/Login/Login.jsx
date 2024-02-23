import { useEffect, useState } from 'react';

import LoginStyles from '../modules/Login.module.css';
import { NavBar } from '../components/NavBar';
import TaskIcon from '../../../assets/images/tasks.png';
import TaskLoginIconStyles from '../modules/TaskLoginIcon.module.css';
import { TokenService } from '../services/TokenService';
import { taskApi } from '../services/BaseUrl';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('teste1@gmail.com');
  const [password, setPassword] = useState('123456');
  const nav = useNavigate();
  const tokenService = new TokenService();

  useEffect(() => {
    if (tokenService.getToken() != null) {
      goToHome();
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await doLogin();
  }

  async function doLogin() {
    try {
      var response = await taskApi.post('/auth/login', {
        email: login,
        password: password,
      });
      var token = response.data?.token;
      console.log(token);

      new TokenService().setToken(token);
      defineHeaderToNextRequests(token);
      goToHome();
    } catch (error) {
      throw new Error(error.response.data);
    }
  }

  function defineHeaderToNextRequests(token) {
    taskApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
  function goToHome() {
    nav('/task');
  }
  return (
    <div className={LoginStyles.container}>
      <NavBar title='Tarefas' />
      <img src={TaskIcon} className={TaskLoginIconStyles.icon_task} />

      <form onSubmit={handleSubmit} className={LoginStyles.form}>
        <input
          placeholder='Login'
          type='text'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          placeholder='Senha'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type='submit'
          value='Fazer login'
          className={LoginStyles.btn_send}
        />
      </form>
    </div>
  );
}
export { Login };
