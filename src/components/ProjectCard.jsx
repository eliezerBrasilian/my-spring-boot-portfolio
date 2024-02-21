import ProjectCardStyles from '../modules/ProjectCard.module.css';
import { ButtonGoToProject } from './ButtonGoToProject';

function ProjectCard({
  title = '',
  tags = ['#React', '#Deploy'],
  cover = '',
  tag,
}) {
  return (
    <div className={ProjectCardStyles.container}>
      <div className={ProjectCardStyles.cover} />
      <p className={ProjectCardStyles.title}>{title}</p>
      <ListOfTags tags={tags} />
      <ButtonGoToProject tag={tag} />
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
