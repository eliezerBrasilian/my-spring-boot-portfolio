import { Link } from 'react-router-dom';
import iconImage from '../assets/images//right-arrow.png';
import ButtonGoToProjectStyles from '../modules/ButtonGoToProject.module.css';

function ButtonGoToProject({ tag, main_route }) {
  return (
    <Link
      style={{ backgroundColor: '#3bda5e', borderRadius: 13, borderWidth: 0 }}
      to={main_route}
    >
      <div className={ButtonGoToProjectStyles.button}>
        <p>Ir para projeto</p>
        <img src={iconImage} alt='Right Arrow Icon' className='' />
      </div>
    </Link>
  );
}

export { ButtonGoToProject };
