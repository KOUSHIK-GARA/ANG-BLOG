import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CategoryNavbarComponent } from './components/layouts/category-navbar/category-navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    ContactUsComponent,
    TermsAndConditionsComponent,
    AboutComponent,
    PageNotFoundComponent,
    SubscriptionComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
