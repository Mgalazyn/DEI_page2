import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolaczComponent } from './components/dolacz/dolacz.component';

const routes: Routes = [
  // { path: '', component: MultiCompComponent},
  { path: '', component: DolaczComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
