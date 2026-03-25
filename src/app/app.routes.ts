import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/home/home').then((m) => m.Home),
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
        path: 'skills',
        loadComponent: () =>
            import('./features/skills/skills').then(
                (m) => m.Skills
            ),
        title: 'RodriguesGS • Habilidades'
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
    