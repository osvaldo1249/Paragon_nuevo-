import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';

import swiper from 'swiper';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
	producto: Productos[] =[
	    {
	      id: 1,
	      name: 'Consola Nintendo Switch Neon Red Blue – Standard Edition – Nacional',
	      precio: 7200,
	      sitio: 6  
	    },
	    {
	      id: 2,
	      name: 'Consola Nintendo Switch Neon',
	      precio: 8000,
	      sitio: 3  
	    },
	    {
	      id: 4,
	      name: 'Consola Nintendo Switch Neon Red Blue',
	      precio: 1200,
	      sitio: 6  
	    },
	    {
	      id: 5,
	      name: 'Consola Nintendo Switch',
	      precio: 800,
	      sitio: 3  
	    },
	    {
	      id: 6,
	      name: 'Consola Nintendo Switch Neon Red Blue – Standard Edition – Nacional',
	      precio: 7200,
	      sitio: 6  
	    },
	    {
	      id: 7,
	      name: 'Consola Nintendo Switch Neon',
	      precio: 8000,
	      sitio: 3  
	    },
	    {
	      id: 8,
	      name: 'Consola Nintendo Switch Neon Red Blue',
	      precio: 1200,
	      sitio: 6  
	    },
	    {
	      id: 9,
	      name: 'Consola Nintendo Switch',
	      precio: 800,
	      sitio: 3  
	    }
  	];
  constructor() { }

  	ngOnInit() {
	  	
  	}

}
