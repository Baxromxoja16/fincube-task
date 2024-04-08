import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TansportComponent } from './tansport.component';

describe('TansportComponent', () => {
  let component: TansportComponent;
  let fixture: ComponentFixture<TansportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TansportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TansportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
