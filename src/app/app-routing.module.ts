import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { ProductBoxComponent } from './product-box/product-box.component';


const routes: Routes = [ 
	  {
    	path: 'users',
    	component: UsersComponent
  	},

  	{
    	path: 'products',
    	component: ProductsDetailComponent
  	},

    {
      path: 'acerca-de-nosotros',
      component: NosotrosComponent
    },
    
    {
      path: 'terminos-y-condiciones',
      component: TerminosComponent

    },

    {
      path: 'categoria',
      component: PaginacionComponent

    },

    {
      path: 'product-boxes',
      component: ProductBoxComponent
    },

    {
      path: '**',
      component: HomepageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
