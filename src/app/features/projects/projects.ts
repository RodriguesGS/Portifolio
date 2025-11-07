import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  iconReg = inject(MatIconRegistry)
  sanitizer = inject(DomSanitizer)

  constructor() {
    this.registerIcon();
  }

  protected registerIcon() {
    this.iconReg.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg')
    );
  }
}
