import { NavBar } from '../../components/NavBar';
import { Projects } from '../../components/Projects';
import { Top } from '../../components/Top';
import HomeStyles from '../../modules/Home.module.css';

function Home() {
  return (
    <div className={HomeStyles.home_container}>
      <NavBar />
      <Top />
      <Projects />
    </div>
  );
}

export { Home };
