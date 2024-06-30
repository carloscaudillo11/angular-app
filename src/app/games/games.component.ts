import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 0,
      name: 'Catan'
    },
    {
      id: 1,
      name: 'Carcassone'
    }
  ]
}
