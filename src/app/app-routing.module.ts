import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
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
