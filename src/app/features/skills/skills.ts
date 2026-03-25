import { Component } from '@angular/core';

interface Skill {
  name: String;
  icon: String;
  color: String;
  docs: String;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Python',      icon: 'devicon-python-plain',                     color: '#FFD43B', docs: 'https://docs.python.org'},
    { name: 'PostgreSQL',  icon: 'devicon-postgresql-plain',                 color: '#336791', docs: 'https://www.postgresql.org/docs'},
    { name: 'AirFlow',     icon: 'devicon-apacheairflow-plain',              color: '#04d659', docs: 'https://airflow.apache.org/docs/'},
    { name: 'AWS',         icon: 'devicon-amazonwebservices-plain-wordmark', color: '#f90',    docs: 'https://docs.aws.amazon.com'},
    { name: 'Angular',     icon: 'devicon-angular-plain',                    color: '#e40035', docs: 'https://angular.dev'},
    { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original',             color: '#38bdf8', docs: 'https://tailwindcss.com/'},
    { name: 'Java',        icon: 'devicon-java-plain',                       color: '#EA2D2E', docs: 'https://docs.oracle.com/en/java/'},
    { name: 'TypeSript',   icon: 'devicon-typescript-plain',                 color: '#007acc', docs: 'https://www.typescriptlang.org/docs'},
    { name: 'SQLServer',   icon: 'devicon-microsoftsqlserver-plain',         color: '#a91d22', docs: 'https://learn.microsoft.com/pt-br/ssms/'},
    { name: 'MongoDB',     icon: 'devicon-mongodb-plain',                    color: '#45A538', docs: 'https://www.mongodb.com/docs'},
    { name: 'Docker',      icon: 'devicon-docker-plain',                     color: '#00AADA', docs: 'https://docs.docker.com'},
    { name: 'Git',         icon: 'devicon-git-plain',                        color: '#F34F29', docs: 'https://git-scm.com/doc'},
  ]
}
          