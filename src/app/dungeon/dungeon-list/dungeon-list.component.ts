import { Component, OnInit } from '@angular/core';
import Muuri from 'muuri';
import { Dungeon } from '../dungeon.model';

@Component({
    selector: 'app-dungeon-list',
    templateUrl: './dungeon-list.component.html',
    styleUrls: ['./dungeon-list.component.css']
})
export class DungeonListComponent implements OnInit {

    public itemContainers: Array<any>;
    public columnGrids: Array<any>;
    public boardGrid: any;

    private _dungeons: Dungeon[];

    constructor() {

    }

    ngOnInit() {

        this.itemContainers = new Array<any>().slice.call(document.querySelectorAll('.board-column-content'));
        this.columnGrids = new Array<any>();

        this._dungeons = [
            new Dungeon('Cave', 3, ['sword', 'shield'] ),
            new Dungeon('Castle', 3, ['cooler sword', ' sweeter shield'] ),
            new Dungeon('Really scary cave', 3, ['coolest sword', 'sweetest shield'] )
        ];

        // Define the column grids so we can drag those
        // items around.
        this.itemContainers.forEach((container) => {

            // Instantiate column grid.
            // NOTE: if you get a constructor Typescript error, you may need to use Muuri.default
            const grid = new Muuri(container, {
                items: '.board-item',
                layoutDuration: 400,
                layoutEasing: 'ease',
                dragEnabled: true,
                dragSort: () => {
                    return this.columnGrids;
                },
                dragSortInterval: 0,
                dragContainer: document.body,
                dragReleaseDuration: 400,
                dragReleaseEasing: 'ease'
            })
                .on('dragStart', (item) => {
                    // Let's set fixed widht/height to the dragged item
                    // so that it does not stretch unwillingly when
                    // it's appended to the document body for the
                    // duration of the drag.
                    item.getElement().style.width = item.getWidth() + 'px';
                    item.getElement().style.height = item.getHeight() + 'px';
                })
                .on('dragReleaseEnd', function (item) {
                    // Let's remove the fixed width/height from the
                    // dragged item now that it is back in a grid
                    // column and can freely adjust to it's
                    // surroundings.
                    item.getElement().style.width = '';
                    item.getElement().style.height = '';
                    // Just in case, let's refresh the dimensions of all items
                    // in case dragging the item caused some other items to
                    // be different size.
                    this.columnGrids.forEach((_grid) => {
                        _grid.refreshItems();
                    });
                })
                .on('layoutStart', () => {
                    // Let's keep the board grid up to date with the
                    // dimensions changes of column grids.
                    this.boardGrid.refreshItems().layout();
                });

            // Add the column grid reference to the column grids
            // array, so we can access it later on.
            this.columnGrids.push(grid);

        });

        // Instantiate the board grid so we can drag those
        // columns around.
        this.boardGrid = new Muuri('.board', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            dragSortInterval: 0,
            dragStartPredicate: {
                handle: '.board-column-header'
            },
            dragReleaseDuration: 400,
            dragReleaseEasing: 'ease'
        });
    }

    get dungeons(): Dungeon[]{
        return this._dungeons;
    }

}