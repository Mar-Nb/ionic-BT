import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettePage } from './recette.page';

describe('RecettePage', () => {
  let component: RecettePage;
  let fixture: ComponentFixture<RecettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
