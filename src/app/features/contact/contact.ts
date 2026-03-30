import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


interface Items {
  label: string;
  desc: string;
  href: string;
  color: string;
  svgIcon: string;
}
@Component({
  selector: 'app-contact',
  imports: [MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private iconReg = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  items: Items[] = [
    {
      label: 'E-mail',
      desc: 'Melhor canal para oportunidades e parcerias. Respondo rápido!',
      href: 'mailto:contato@rodriguesgs.com',
      color: '#ff7e5f',
      svgIcon: 'email'
    },
    {
      label: 'LinkedIn',
      desc: 'Conecte-se e acompanhe minha trajetória profissional.',
      href: 'https://www.linkedin.com/in/gabriel-soares1402/',
      color: '#0a66c2',
      svgIcon: 'linkedin'
    },
    {
      label: 'GitHub',
      desc: 'Onde os dados viram código > projetos, pipelines e experimentos abertos.',
      href: 'https://github.com/RodriguesGS',
      color: '#e6edf3',
      svgIcon: 'github'
    },
  ];

  private _ = [
    { name: 'email',   path: '/assets/icons/email.svg'   },
    { name: 'linkedin', path: '/assets/icons/linkedin.svg' },
    { name: 'github',   path: '/assets/icons/github.svg'   },
  ].forEach(i =>
    this.iconReg.addSvgIcon(
      i.name,
      this.sanitizer.bypassSecurityTrustResourceUrl(i.path)
    )
  );
}
