import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../components/search/search.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: SearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
