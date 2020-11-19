import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrouvablePage } from './introuvable.page';

const routes: Routes = [
  {
    path: '',
    component: IntrouvablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrouvablePageRoutingModule {}
