import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    RouterLink
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
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
    this.iconReg.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/linkedin.svg')
    );
    this.iconReg.addSvgIcon(
      'x',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/x.svg')
    );
    this.iconReg.addSvgIcon(
      'spotify',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/spotify.svg')
    );
    this.iconReg.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagram.svg')
    );
  }
}
