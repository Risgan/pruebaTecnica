import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeroComponent } from './detalle-hero.component';

describe('DetalleHeroComponent', () => {
  let component: DetalleHeroComponent;
  let fixture: ComponentFixture<DetalleHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
