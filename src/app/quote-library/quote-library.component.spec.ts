import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLibraryComponent } from './quote-library.component';

describe('QuoteLibraryComponent', () => {
  let component: QuoteLibraryComponent;
  let fixture: ComponentFixture<QuoteLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
