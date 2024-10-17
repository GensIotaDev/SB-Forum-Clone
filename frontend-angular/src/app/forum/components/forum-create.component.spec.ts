import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCreateComponent } from './forum-create.component';

describe('ForumsComponent', () => {
  let component: ForumCreateComponent;
  let fixture: ComponentFixture<ForumCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
