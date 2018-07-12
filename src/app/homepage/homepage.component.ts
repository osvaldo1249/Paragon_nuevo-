import { Component, OnInit } from '@angular/core';
import  swiper from 'swiper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
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
