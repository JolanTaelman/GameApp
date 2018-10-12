import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DungeonListComponent } from './dungeon-list/dungeon-list.component';
import { DungeonComponent } from './dungeon/dungeon.component';

@NgModule({
  imports: [      
    HttpClientModule,
    CommonModule,
  ],
  declarations: [DungeonListComponent, DungeonComponent]
})
export class DungeonModule { }
