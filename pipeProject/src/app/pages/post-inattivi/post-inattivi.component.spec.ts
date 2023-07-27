import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInattiviComponent } from './post-inattivi.component';

describe('PostInattiviComponent', () => {
  let component: PostInattiviComponent;
  let fixture: ComponentFixture<PostInattiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostInattiviComponent]
    });
    fixture = TestBed.createComponent(PostInattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
