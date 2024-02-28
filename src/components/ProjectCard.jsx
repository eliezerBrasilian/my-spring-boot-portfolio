import ProjectCardStyles from '../modules/ProjectCard.module.css';
import { ButtonGoToProject } from './ButtonGoToProject';

function ProjectCard({
  title = '',
  tags = ['#React', '#Deploy'],
  cover,
  tag,
  main_route,
}) {
  return (
    <div className={ProjectCardStyles.container}>
      <div>
        <img src={cover} className={ProjectCardStyles.cover} />
      </div>

      <p className={ProjectCardStyles.title}>{title}</p>
      <ListOfTags tags={tags} />
      <ButtonGoToProject tag={tag} main_route={main_route} />
    </div>
  );
}

function ListOfTags({ tags = [] }) {
  return (
    <div className={ProjectCardStyles.tags_container}>
      {tags.map((value, index) => (
        <p className={ProjectCardStyles.tag} key={index}>
          {value}
        </p>
      ))}
    </div>
  );
}

export { ProjectCard };
