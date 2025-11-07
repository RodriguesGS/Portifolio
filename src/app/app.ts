import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topnav } from "./core/layout/topnav/topnav";
import { Footer } from "./core/layout/footer/footer";
import { Scroll } from "./core/ui/scroll/scroll";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topnav, Footer, Scroll],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portifolio');
}
