import { Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', redirectTo: 'ver', pathMatch: 'full'},
    {path: 'ver', component: CardsComponent},
    //ruta de error cuando no encuentra la pagina
    {path: '**', component: ErrorComponent}
];
