import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { ForFilterPipe } from './for-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';



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
    TerminosComponent,
    PaginacionComponent,
    ForFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
