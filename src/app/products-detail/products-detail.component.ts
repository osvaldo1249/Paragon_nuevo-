import { Component, OnInit } from '@angular/core';
import  swiper from 'swiper';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  descripcion = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
  constructor() {}
  ngOnInit() {
	  	var Swiper_similares = new swiper('#similares', {
		    nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			pagination: '.swiper-pagination',
		    paginationType: 'fraction',
		    slidesPerGroup: 4,
		    slidesPerView: 4,
		    spaceBetween: 10,
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
