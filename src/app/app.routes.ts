import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full',
        title: 'RodriguesGS • Inicio'
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./features/projects/projects').then(
                (m) => m.Projects
            ),
        title: 'RodriguesGS • Projetos'
    },
    {
        path: 'articles',
        loadComponent: () =>
            import('./features/writing/writing').then(
                (m) => m.Writing
            ),
        title: 'RodriguesGS • Artigos'
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./features/about/about').then(
                (m) => m.About
            ),
        title: 'RodriguesGS • Sobre Mim'
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./features/contact/contact').then(
                (m) => m.Contact
            ),
        title: 'RodriguesGS • Contato'
    }
];
    