import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full',
        title: 'Gabriel • Inicio'
    },
    {
        path: 'projects',
       loadComponent: () =>
        import('./features/projects/projects').then(
            (m) => m.Projects
        )
    }
];
