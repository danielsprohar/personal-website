import { Routes } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
