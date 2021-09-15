import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmesdemonSlayerPage } from './filmesdemon-slayer.page';

describe('FilmesdemonSlayerPage', () => {
  let component: FilmesdemonSlayerPage;
  let fixture: ComponentFixture<FilmesdemonSlayerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesdemonSlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmesdemonSlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
