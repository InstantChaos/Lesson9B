import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';

// includes sub components
import { ListComponent } from './list/list.component';

export const GamesRoutes: Routes = [{
    path: 'api',
    component: GamesComponent,
    children: [
        { path: 'games', component: ListComponent }
    ]
}]