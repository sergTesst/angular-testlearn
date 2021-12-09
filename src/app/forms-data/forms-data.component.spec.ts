import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDataComponent } from './forms-data.component';

function createNewEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}


describe('FormsDataComponent', () => {
  let component: FormsDataComponent;
  let fixture: ComponentFixture<FormsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('input');
    const event = createNewEvent('input');
  
    input.value = 'Red';
    input.dispatchEvent(event);
  
    expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
  });
});
