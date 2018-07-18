import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']

})
export class PaginacionComponent implements OnInit {
  // page=1;
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
      id: 3,
      name: 'Consola Nintendo Switch Neon Red Blue',
      precio: 1200,
      sitio: 6  
    },
    {
      id: 4,
      name: 'Consola Nintendo Switch',
      precio: 800,
      sitio: 3  
    },
    {
      id: 5,
      name: 'Consola Nintendo Switch Neon Red Blue – Standard Edition – Nacional',
      precio: 7200,
      sitio: 6  
    },
    {
      id: 6,
      name: 'Consola Nintendo Switch Neon',
      precio: 8000,
      sitio: 3  
    },
    {
      id: 7,
      name: 'Consola Nintendo Switch Neon Red Blue',
      precio: 1200,
      sitio: 6  
    },
    {
      id: 8,
      name: 'Consola Nintendo Switch',
      precio: 800,
      sitio: 3  
    }
  ];

 	constructor() {}
 	ngOnInit() {
 	}
}
