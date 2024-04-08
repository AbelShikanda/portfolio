import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'portfolio-site', loadChildren: () => import('./portfolio-site/portfolio-site.module').then(m => m.PortfolioSiteModule)}
];
