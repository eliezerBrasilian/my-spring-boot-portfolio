import TopStyles from '../modules/Top.module.css';
import { CircularImage } from './CircularImage';

function Top() {
  return (
    <div className={TopStyles.top_container}>
      <CircularImage />
      <h1>Sou desenvolvedor Java/Spring Boot</h1>
      <p className={TopStyles.description}>
        Prazer, meu nome é Eliezer, me apresento como EliezerBrasilian, e sou
        desenvolvedor Backend Java com Spring Boot
      </p>
    </div>
  );
}

export { Top };
