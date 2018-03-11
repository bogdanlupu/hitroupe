import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DialogOverviewExampleDialogComponent, NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GroupFormComponent} from './components/group-form/group-form.component';
import {DataService} from './services/data/data.service';
import {HttpClientModule} from '@angular/common/http';
import {NguiMapModule} from '@ngui/map';
import {GroupListComponent} from './components/group-list/group-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchComponent,
    GroupFormComponent,
    GroupListComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBnMMHShEh8Vs2LgKovbiisUREiEisfpVo'})
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialogComponent]
})
export class AppModule {
}
