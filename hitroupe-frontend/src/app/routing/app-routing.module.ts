import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../components/search/search.component';
import {NgModule} from '@angular/core';
import {GroupFormComponent} from '../components/group-form/group-form.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'group', component: GroupFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
