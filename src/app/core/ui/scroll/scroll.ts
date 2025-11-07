import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scroll',
  imports: [
    MatIconModule
  ],
  templateUrl: './scroll.html',
  styleUrl: './scroll.scss',
})
export class Scroll {
  show = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.show = window.scrollY > 300;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
