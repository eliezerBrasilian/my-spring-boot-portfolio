import NavBarStyles from '../modules/NavBar.module.css';

function NavBar({ title = 'Início' }) {
  return (
    <div className={NavBarStyles.navBarContainer}>
      <p>{title}</p>
    </div>
  );
}

export { NavBar };
