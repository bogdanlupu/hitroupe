import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule} from '@angular/material';
=======
import { MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
>>>>>>> a5c4d11f428779aeb0b36324480973db8904ed81


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GroupFormComponent } from './components/group-form/group-form.component';
import {DataService} from './services/data/data.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchComponent,
    GroupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
<<<<<<< HEAD
    MatCheckboxModule
=======
    MatButtonModule,
    FormsModule,
    HttpClientModule
>>>>>>> a5c4d11f428779aeb0b36324480973db8904ed81
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
