import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammerComponent } from './pages/programmer/programmer.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PortofolioComponent } from './pages/portofolio/portofolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProgrammerComponent,
    AboutComponent,
    ArtistComponent,
    ProjectsComponent,
    PortofolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
