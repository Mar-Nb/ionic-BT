import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRecettePage } from './detail-recette.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRecettePageRoutingModule {}
