import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailBateauPage } from './detail-bateau.page';

describe('DetailBateauPage', () => {
  let component: DetailBateauPage;
  let fixture: ComponentFixture<DetailBateauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBateauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
