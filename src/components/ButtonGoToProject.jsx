import { Link } from 'react-router-dom';
import iconImage from '../assets/images//right-arrow.png';
import ButtonGoToProjectStyles from '../modules/ButtonGoToProject.module.css';

function ButtonGoToProject({ tag }) {
  return (
    <Link to='/task/auth/login'>
      <div className={ButtonGoToProjectStyles.button}>
        <p>Ir para projeto</p>
        <img src={iconImage} alt='Right Arrow Icon' className='' />
      </div>
    </Link>
  );
}

export { ButtonGoToProject };
