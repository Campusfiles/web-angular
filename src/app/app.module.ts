import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FollowersComponent } from './components/followers/followers.component';
import { HomeComponent } from './pages/home/home.component';
import { CampusesComponent } from './components/campuses/campuses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FollowersComponent,
    HomeComponent,
    CampusesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
