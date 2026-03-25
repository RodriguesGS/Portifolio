import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

interface NavItem {
  route: string;
  icon: string;
  label: string;
  exact?: boolean;
}
@Component({
  selector: 'app-topnav',
  imports: [
    MatIconModule,
    RouterLinkActive,
    RouterLinkWithHref
],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})
export class Topnav {
  private iconReg = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  navItems: NavItem[] = [
    { route: '',         icon: 'home',     label: 'Início', exact: true },
    { route: '/projects',icon: 'projects', label: 'Projetos' },
    { route: '/skills',  icon: 'skills',   label: 'Habilidades' },
    { route: '/about',   icon: 'about',    label: 'Sobre' },
    { route: '/contact', icon: 'contact',  label: 'Contato' },
  ];

  private _ = this.navItems.forEach(item =>
    this.iconReg.addSvgIcon(
      item.icon,
      this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${item.icon}.svg`)
    )
  )
}
