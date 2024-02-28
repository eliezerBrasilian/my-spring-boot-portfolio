import ProjectStyles from '../modules/Project.module.css';
import { ProjectCard } from './ProjectCard';

function Projects() {
  var projectList = [
    {
      id: 'task',
      title: 'Tarefas',
      cover: '/public/task_.png',
      tags: ['#React', '#JWT', '#SpringBoot', '#MySql'],
      main_route: '/task/auth/login',
    },
    {
      id: 'simpthom',
      title: 'Consulta de diabetes',
      cover: '/public/consulta.png',
      tags: ['#React', '#SpringBot', '#MySql'],
      main_route: '/consulta',
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
        {'Projetos >'}
      </p>

      <div className={ProjectStyles.projects}>
        {projectList.map((v, index) => (
          <ProjectCard
            title={v.title}
            tags={v.tags}
            key={index}
            tag={v.id}
            main_route={v.main_route}
            cover={v.cover}
          />
        ))}
      </div>
    </div>
  );
}

export { Projects };
