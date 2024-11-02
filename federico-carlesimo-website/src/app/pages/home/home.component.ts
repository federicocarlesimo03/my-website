import { Component } from '@angular/core';
import { CountUpDirective } from '../../../directives/count-up.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
