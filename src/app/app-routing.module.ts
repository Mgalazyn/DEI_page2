import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiCompComponent } from './components/multi-comp/multi-comp.component';
import { DolaczComponent } from './components/dolacz/dolacz.component';


const routes: Routes = [
  { path: '', component: MultiCompComponent},
  { path: 'dolacz', component: DolaczComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
