import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";


interface SocialLink {
  icon: string;
  url: string;
}
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
  private iconReg = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  socialLinks: SocialLink[] = [
    { icon: 'github',    url: 'https://github.com/RodriguesGS' },
    { icon: 'linkedin',  url: 'https://www.linkedin.com/in/gabriel-soares1402/' },
    { icon: 'spotify',   url: 'https://open.spotify.com/user/e7ocuks30i4jx4qq9gyi27pp5?si=2c12cc1f97cb4cd4' },
    { icon: 'instagram', url: 'https://www.instagram.com/guesgabriel_/' },
  ];

  private _ = this.socialLinks.forEach(item =>
    this.iconReg.addSvgIcon(
      item.icon,
      this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${item.icon}.svg`)
    )
  );
}
