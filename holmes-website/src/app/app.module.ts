import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { SoftwareComponent } from './software/software.component';
import { ContactComponent } from './contact/contact.component';
import { AlbumEntryComponent } from './music/album-entry/album-entry/album-entry.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrackEntryComponent } from './music/track-entry/tack-entry/track-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    SoftwareComponent,
    ContactComponent,
    AlbumEntryComponent,
    FooterComponent,
    ImprintComponent,
    PageNotFoundComponent,
    TrackEntryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
