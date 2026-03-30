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
        path: 'projetos',
        loadComponent: () =>
            import('./features/projects/projects').then(
                (m) => m.Projects
            ),
        title: 'RodriguesGS • Projetos'
    },
    {
        path: 'habilidades',
        loadComponent: () =>
            import('./features/skills/skills').then(
                (m) => m.Skills
            ),
        title: 'RodriguesGS • Habilidades'
    },
    {
        path: 'sobre',
        loadComponent: () =>
            import('./features/about/about').then(
                (m) => m.About
            ),
        title: 'RodriguesGS • Sobre Mim'
    },
    {
        path: 'contato',
        loadComponent: () =>
            import('./features/contact/contact').then(
                (m) => m.Contact
            ),
        title: 'RodriguesGS • Contato'
    }
];
    