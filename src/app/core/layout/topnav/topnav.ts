import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-topnav',
  imports: [
    MatIconModule
  ],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})
export class Topnav {
  iconReg = inject(MatIconRegistry)
  sanitizer = inject(DomSanitizer)

  constructor() {
    this.registerIcon();
  }

  protected registerIcon() {
    this.iconReg.addSvgIcon(
      'home',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/home.svg')
    );
    this.iconReg.addSvgIcon(
      'projects',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/projects.svg')
    );
    this.iconReg.addSvgIcon(
      'articles',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/articles.svg')
    );
    this.iconReg.addSvgIcon(
      'about',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/about.svg')
    );
    this.iconReg.addSvgIcon(
      'contact',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/contact.svg')
    );
  }
}
