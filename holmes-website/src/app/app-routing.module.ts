import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MusicComponent } from './music/music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'software',
    component: SoftwareComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
