import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrouvablePage } from './introuvable.page';

describe('IntrouvablePage', () => {
  let component: IntrouvablePage;
  let fixture: ComponentFixture<IntrouvablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrouvablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrouvablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
