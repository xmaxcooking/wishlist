import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListAddItemComponent } from './wish-list-add-item.component';

describe('WishListAddItemComponent', () => {
  let component: WishListAddItemComponent;
  let fixture: ComponentFixture<WishListAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListAddItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
