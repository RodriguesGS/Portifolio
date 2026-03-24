import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


interface Project {
  name: string;
  description: string;
  tags: string[];
  year: string;
  status: 'concluído' | 'em andamento';
  github: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private iconReg = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  projects: Project[] = [
    {
      name: 'BPSentry',
      description: 'Sistema de monitoramento com pipeline ETL e arquitetura Medallion.',
      tags: ['Python', 'PostgreSQL', 'Pandas'],
      year: '2026',
      status: 'em andamento',
      github: 'https://github.com/RodriguesGS/BPSentry'
    },
    {
      name: 'F1Lake',
      description: 'Sistema para predição de campeão da F1',
      tags: ['Python', 'AWS', 'Streamlit'],
      year: '2026',
      status: 'em andamento',
      github: 'https://github.com/RodriguesGS/F1Lake'
    },
    {
      name: 'AIPredict',
      description: 'Programa que irá prever e classificar status dos backups de empresas.',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      year: '2026',
      status: 'concluído',
      github: 'https://github.com/RodriguesGS/AIPredict'
    },
    {
      name: 'WeatherETL',
      description: 'ETL com Dados Meteorológicos de Maringá.',
      tags: ['Python', 'Airflow', 'Docker', 'PostgreSQL'],
      year: '2026',
      status: 'concluído',
      github: 'https://github.com/RodriguesGS/WeatherETL'
    },
  ];

  private _ = this.iconReg.addSvgIcon(
    'github',
    this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg')
  );
}
