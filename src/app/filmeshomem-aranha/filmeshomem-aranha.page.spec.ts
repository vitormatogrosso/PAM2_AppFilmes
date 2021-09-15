import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeshomemAranhaPage } from './filmeshomem-aranha.page';

describe('FilmeshomemAranhaPage', () => {
  let component: FilmeshomemAranhaPage;
  let fixture: ComponentFixture<FilmeshomemAranhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeshomemAranhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeshomemAranhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
