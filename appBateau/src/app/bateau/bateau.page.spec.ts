import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauPage } from './bateau.page';

describe('BateauPage', () => {
  let component: BateauPage;
  let fixture: ComponentFixture<BateauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
