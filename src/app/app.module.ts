import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TerminosComponent } from './terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    ProductBoxComponent,
    HomepageComponent,
    ProductsDetailComponent,
    NosotrosComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
