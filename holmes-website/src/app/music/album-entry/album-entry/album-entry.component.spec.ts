import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumEntryComponent } from './album-entry.component';

describe('AlbumEntryComponent', () => {
  let component: AlbumEntryComponent;
  let fixture: ComponentFixture<AlbumEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
