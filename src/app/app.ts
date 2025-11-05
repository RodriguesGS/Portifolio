import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topnav } from "./core/layout/topnav/topnav";
import { Footer } from "./core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topnav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portifolio');
}
