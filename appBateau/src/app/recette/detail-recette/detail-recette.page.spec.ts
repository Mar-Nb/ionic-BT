import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRecettePage } from './detail-recette.page';

describe('DetailRecettePage', () => {
  let component: DetailRecettePage;
  let fixture: ComponentFixture<DetailRecettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
