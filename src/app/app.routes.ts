import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    {
        component: DemoComponent,

        path: 'demo/:entityId',
        data: {
            title: 'Demo',
            description: 'Some component'
        },
    },
    {
        path: ':userId',
        loadComponent: () => import('./user-profile/user-profile.component')
            .then(c => c.UserProfileComponent)
    }
];
