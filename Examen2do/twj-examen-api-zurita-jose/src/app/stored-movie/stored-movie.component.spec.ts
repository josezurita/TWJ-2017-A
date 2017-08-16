import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredMovieComponent } from './stored-movie.component';

describe('StoredMovieComponent', () => {
  let component: StoredMovieComponent;
  let fixture: ComponentFixture<StoredMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
