import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TerminosComponent } from './terminos/terminos.component';


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
      path: 'acerca',
      component: NosotrosComponent
    },
    
    {
      path: 'terminos',
      component: TerminosComponent

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
