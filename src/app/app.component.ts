import {Component} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Player, PlayersService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayersService],
})
export class AppComponent {
  public players: Player[] = [];
  public points: Player[][] = [[], [], [], [], []];

  constructor(playersService: PlayersService) {
    this.players = playersService.getPlayers();
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move items between lists
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  evenPredicate(drag: CdkDrag<Player>, drop: CdkDropList<Player>): boolean {
    return drop.getSortedItems().length < 1;
  }
}
