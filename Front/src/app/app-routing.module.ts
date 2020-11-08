import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { StoreComponent } from './store/store.component';
import { AuthenticationComponent } from './authentication/authentication.component'

const routes: Routes = [
  { path: 'client-account', loadChildren: () => import('./formulaire/formulaire.module').then(m => m.FormulaireModule)},
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'products', loadChildren: () => import('./search-engine/search-engine.module').then(m => m.SearchEngineModule)},
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule)},
  { path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
