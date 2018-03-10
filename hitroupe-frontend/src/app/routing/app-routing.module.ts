import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../components/search/search.component';
import {NgModule} from '@angular/core';
import {GroupFormComponent} from '../components/group-form/group-form.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: SearchComponent }
=======
  {path: '', component: SearchComponent},
  {path: 'group', component: GroupFormComponent}
>>>>>>> a5c4d11f428779aeb0b36324480973db8904ed81
];


@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes, { useHash: true })],
=======
  imports: [RouterModule.forRoot(routes, {useHash: false})],
>>>>>>> a5c4d11f428779aeb0b36324480973db8904ed81
  exports: [RouterModule]
})
export class AppRoutingModule {
}
