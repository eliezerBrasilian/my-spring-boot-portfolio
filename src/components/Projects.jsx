import ProjectStyles from '../modules/Project.module.css';
import { ProjectCard } from './ProjectCard';

function Projects() {
  var projectList = [
    {
      id: 'simpthom',
      title: 'Consulta de API',
      cover: null,
      tags: ['#React', '#Deploy abc'],
    },
    {
      id: 'task',
      title: 'Tarefas',
      cover: null,
      tags: ['#React', '#JWT', '#SpringBoot'],
    },
    {
      id: 'unknown',
      title: 'Consulta de API',
      cover: null,
      tags: ['#React', '#Deploy abc', '#React', '#Deploy abc'],
    },
  ];

  return (
    <div className={ProjectStyles.project_container}>
      <p
        style={{
          color: '#423D46',
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Projetos
      </p>

      <div className={ProjectStyles.projects}>
        {projectList.map((v, index) => (
          <ProjectCard title={v.title} tags={v.tags} key={index} tag={v.id} />
        ))}
      </div>
    </div>
  );
}

export { Projects };
