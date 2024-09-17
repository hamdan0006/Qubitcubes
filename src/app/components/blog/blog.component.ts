import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterLink,RouterLinkActive],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  cards = [
    { title: 'web development' ,image: '../../../assets/blog/modern-web-design-concept-with-flat-design_23-2147857536-1.jpg' },

    { title: 'web development, AI', image: '../../../assets/blog/OIP-1.jpeg'},
    { title: 'app development, digital marketing', image:'../../../assets/blog/floating-3d-mobile-application-development-concept_887552-15052.jpg' },
    { title: 'web development, E- Commerce',image : '../../../assets/blog/R-1-768x543.jpeg' },
    { title: 'AI, app development',image : '../../../assets/blog/OIP.jpeg' },
    { title: 'app development',image: '../../../assets/blog/img6.jpg' },

    { title: 'E- Commerce, web development',image: '../../../assets/blog/R-1-768x543.jpeg' },
    { title: 'digital marketing',image: '../../../assets/blog/OIP-5.jpeg' },



  ];
  
  // Pagination properties
    // Pagination properties
    currentPage = 1;
    itemsPerPage = 6;  // Show 3 items per page
  
    // Calculate the total number of pages
    get totalPages(): number {
      return Math.ceil(this.cards.length / this.itemsPerPage);
    }
  
    // Get an array of page numbers
    getPages(): number[] {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
}

