import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonListComponent } from './dungeon-list.component';

describe('DungeonListComponent', () => {
  let component: DungeonListComponent;
  let fixture: ComponentFixture<DungeonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
