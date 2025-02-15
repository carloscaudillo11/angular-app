import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "carlos caudillo";
  isLogguedIn = false;
  favoriteGame = "";

  getFavGame(favGame: string){
    this.favoriteGame = favGame;
  }

  greet() {
    alert(`Hola ${this.username}`);
  }
}
