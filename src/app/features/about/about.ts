import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Items {
  icon: string;
  label: string;
  text: string;
}
@Component({
  selector: 'app-about',
  imports: [ ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  items: Items[] = [
    {
      icon: '🎯',
      label: 'Foco Atual',
      text: 'Aprofundando em <strong style="color:#E6E6E6;font-weight:500">Engenharia de Dados</strong> — pipelines, modelagem e automação com Python e PostgreSQL.'
    },
    {
      icon: '🔨',
      label: 'Construindo',
      text: '<strong style="color:#E6E6E6;font-weight:500">BPSentry</strong> — sistema de monitoramento de backups com arquitetura Medallion e ETL automatizado.'
    },
    {
      icon: '📚',
      label: 'Aprendendo',
      text: '<strong style="color:#E6E6E6;font-weight:500">Machine Learning</strong> aplicado a dados reais, análise estatística e visualização com Power BI.'
    },
    {
      icon: '🌍',
      label: 'Objetivo',
      text: 'Me tornar um <strong style="color:#E6E6E6;font-weight:500">Engenheiro de Dados</strong> criando soluções que transformem dados em decisões reais.'
    },
  ];
}
