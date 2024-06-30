import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();

  selectGame(game: string) {
    this.addFavoriteEvent.emit(game);
  }

  games = [
    {
      id: 0,
      name: 'Juego 1'
    },
    {
      id: 1,
      name: 'Juego 2'
    },
    {
      id: 2,
      name: 'Juego 3'
    },
    {
      id: 3,
      name: 'Juego 4'
    }
  ]
}
