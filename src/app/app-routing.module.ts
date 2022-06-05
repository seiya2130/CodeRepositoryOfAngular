import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestComponent } from './dest/dest.component';
import { SrcComponent } from './src/src.component';

const routes: Routes = [
    { path: 'src-component', component: SrcComponent },
    { path: 'dest-component', component: DestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
