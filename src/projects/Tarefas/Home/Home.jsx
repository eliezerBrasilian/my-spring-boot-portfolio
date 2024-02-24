import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import HomeStyles from '../modules/Home.module.css';
import { taskApi } from '../services/BaseUrl';
import { TokenService } from '../services/TokenService';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [indexOfMouseIsHover, setMouseHoverIndex] = useState(-1);
  const [indexOfInputForEditTask, setIndexOfInputForEditTask] = useState(-1);
  const [indexOfInputForSaveEditedTask, setIndexOfInputForSaveEditedTask] =
    useState(-1);
  const [newTitle, setNewTitle] = useState('');
  const [reloadTaks, setReloadTasks] = useState(false);
  const nav = useNavigate();
  const tokenService = new TokenService();

  useEffect(() => {
    const token = tokenService.getToken();
    if (token != null) {
      defineHeaderToNextRequests(token);
      loadTasks();
    }
  }, [reloadTaks]);

  function defineHeaderToNextRequests(token) {
    taskApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async function loadTasks() {
    try {
      var response = await taskApi.get('');
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.log(error.response);
      tokenService.clearToken();
      nav('/task/auth/login');
    }
  }

  function onMouseHover(index) {
    setMouseHoverIndex(index);
  }

  function handleEditEvent(index) {
    setIndexOfInputForEditTask(index);
  }

  function handleEditInput(event, index) {
    var newTitle = event.target.value;
    setNewTitle(event.target.value);

    if (String(newTitle).length > 0 && newTitle != tasks[index].title) {
      setIndexOfInputForSaveEditedTask(index);
    } else if (String(newTitle).length > 0 && newTitle == tasks[index].title) {
      setIndexOfInputForSaveEditedTask(-1);
    }

    setTasks((old) => {
      var aux = [];
      for (let i = 0; i < old.length; i++) {
        aux.push(old[i]);
      }

      aux[index].title = newTitle;

      return aux;
    });
  }

  async function saveEditedTask(index, id) {
    try {
      var response = await taskApi.put('', {
        id: id,
        newTitle: newTitle,
      });
      setMouseHoverIndex(-1);
      setIndexOfInputForSaveEditedTask(-1);
      console.log(response.data);
      setReloadTasks(!reloadTaks);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className={HomeStyles.home_container}>
      <NavBar title='Tarefas' />
      <div className={HomeStyles.tasks}>
        {tasks.map((value, index) => (
          <div
            className={HomeStyles.task}
            key={index}
            onMouseEnter={() => onMouseHover(index)}
          >
            {indexOfInputForEditTask == index ? (
              <input
                type='text'
                value={value.title}
                onChange={(event) => handleEditInput(event, index)}
                autoFocus={true}
              />
            ) : (
              <p>{value?.title}</p>
            )}

            {indexOfMouseIsHover == index && (
              <div className={HomeStyles.footer}>
                {indexOfInputForSaveEditedTask == index ? (
                  <div
                    className={HomeStyles.footer_item}
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => saveEditedTask(index, value.id)}
                  >
                    <p>Salvar</p>
                  </div>
                ) : (
                  <div
                    className={HomeStyles.footer_item}
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => handleEditEvent(index)}
                  >
                    <p>Editar</p>
                  </div>
                )}

                <div
                  className={HomeStyles.footer_item}
                  style={{ backgroundColor: 'red' }}
                >
                  <p>Apagar</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Home };
