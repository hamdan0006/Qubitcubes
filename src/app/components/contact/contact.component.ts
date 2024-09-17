import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent,RouterLink,RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  template: `<app-map></app-map>`,
})
export class ContactComponent {

}
