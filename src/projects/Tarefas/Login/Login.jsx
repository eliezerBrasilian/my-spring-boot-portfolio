import { useState } from 'react';
import TaskIcon from '../../../assets/images/tasks.png';
import { NavBar } from '../components/NavBar';
import LoginStyles from '../modules/Login.module.css';
import TaskLoginIconStyles from '../modules/TaskLoginIcon.module.css';

function Login() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div className={LoginStyles.container}>
      <NavBar title='Tarefas' />
      <img src={TaskIcon} className={TaskLoginIconStyles.icon_task} />

      <form onSubmit={handleSubmit} className={LoginStyles.form}>
        <input
          placeholder='Login'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Senha'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
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
