import { 
  Component,
  Output,
  EventEmitter } from "@angular/core";

//https://angular.io/guide/inputs-outputs
@Component({
  selector: 'app-zippy',
  template: `
    <div class="zippy">
      <div (click)="toggle()">Toggle</div>
      <div [hidden]="!visible">
        visible
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('child value open');
    } else {
      this.close.emit('child value close');
    }
  }
}