import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSinglePage } from './product-single.page';

describe('ProductSinglePage', () => {
  let component: ProductSinglePage;
  let fixture: ComponentFixture<ProductSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
