import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: DashboardComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: 'items/:id/edit', component: ItemEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
