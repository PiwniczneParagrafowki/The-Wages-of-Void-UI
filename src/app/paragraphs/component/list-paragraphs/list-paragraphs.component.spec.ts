import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParagraphsComponent } from './list-paragraphs.component';

describe('ListParagraphsComponent', () => {
  let component: ListParagraphsComponent;
  let fixture: ComponentFixture<ListParagraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParagraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
