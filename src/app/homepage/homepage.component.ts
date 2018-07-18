import { Component, OnInit } from '@angular/core';
import  swiper from 'swiper';
import { Productos } from '../productos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit { 
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
	    }
  	];
	constructor() {}
  	ngOnInit() {
  		var Swiper = new swiper('#swiper-header', {
  			loop: true,
  			autoplay: 5000,
  			paginationClickable: true,
		 	nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			pagination: '.swiper-pagination',
			paginationType: 'bullets'
	    });

	    var Swiper = new swiper('#swiper-categorias', {
  			loop: true,
  			autoplay: 5000,
  			spaceBetween: 5,
  			slidesPerView: 13,
		 	nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
	    });

	    var Swiper_productos = new swiper('#p_vistos', {
		    nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			pagination: '.swiper-pagination',
		    paginationType: 'fraction',
		    slidesPerGroup: 3,
		    slidesPerView: 3,
		    spaceBetween: 40,
		    clickable: true,
			breakpoints: {
		        768: {
		            slidesPerView: 2,
		            spaceBetween: 10,
		        },
		        640: {
		            slidesPerView: 1,
		            slidesPerColumn: 3,
		        },
		        320: {
		            slidesPerView: 1,
		            spaceBetween: 10
		        }
		    }
	    });
  	}
}
