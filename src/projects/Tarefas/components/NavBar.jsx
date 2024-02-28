import imageAdd from '../../../assets/images/add_button.png';
import NavBarStyles from '../modules/NavBar.module.css';

function NavBar({ title = 'Início', clickedOnCreateTask, isLogin }) {
  return (
    <div className={NavBarStyles.navBarContainer}>
      <p>{title}</p>

      {!isLogin && (
        <div
          className={NavBarStyles.create_task_container}
          onClick={clickedOnCreateTask}
        >
          <p>Criar tarefa</p>
          <img className={NavBarStyles.icon_add} src={imageAdd} />
        </div>
      )}
    </div>
  );
}

export { NavBar };
