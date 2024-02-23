import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import HomeStyles from '../modules/Home.module.css';
import { taskApi } from '../services/BaseUrl';
import { TokenService } from '../services/TokenService';

function Home() {
  const [tasks, setTasks] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const token = new TokenService().getToken();
    if (token != null) {
      defineHeaderToNextRequests(token);
      loadTasks();
    } else {
      nav('/task/auth/login');
    }
    window.addEventListener('popstate', () => {
      nav('/');
    });
  }, []);

  function defineHeaderToNextRequests(token) {
    taskApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async function loadTasks() {
    try {
      var response = await taskApi.get('http://localhost:8080/api/tasks/v1');
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.log(error.response);
      nav('/task/auth/login');
    }
  }

  return (
    <div className={HomeStyles.home_container}>
      <NavBar title='Tarefas' />
      <div className={HomeStyles.tasks}>
        {tasks.map((value, index) => (
          <div className={HomeStyles.task} key={index}>
            <p>{value?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Home };
