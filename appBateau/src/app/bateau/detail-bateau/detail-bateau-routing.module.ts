import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBateauPage } from './detail-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBateauPageRoutingModule {}
