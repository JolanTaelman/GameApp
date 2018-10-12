import { Component, OnInit, Input } from '@angular/core';
import { Dungeon } from '../dungeon.model';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  @Input() public _dungeon: Dungeon;

  constructor(dungeon: Dungeon) {
   }

  ngOnInit() {
  }

}
