import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'t&c',
    component:TermsAndConditionsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'post',
    component:SinglePostComponent
  },
  {
    path:'category',
    component:SingleCategoryComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
