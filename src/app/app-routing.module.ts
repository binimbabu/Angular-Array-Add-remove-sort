import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniquelistComponent } from './uniquelist/uniquelist.component';


const routes: Routes = [
  {path: 'uniqueList' , component: UniquelistComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
