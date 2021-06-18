import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-metanit-form",
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `
  ],
  template: `
    <form #myForm="ngForm" novalidate>
      <div class="form-group">
        <label>Имя</label>
        <input class="form-control" name="name" [(ngModel)]="name" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input class="form-control" name="email" ngModel required email />
      </div>

      <div class="form-group">
        <label>Телефон</label>
        <input
          class="form-control"
          name="phone"
          ngModel
          required
          pattern="[0-9]{10}"
        />
      </div>

      <div class="form-group">
        <button
          [disabled]="myForm.invalid"
          class="btn btn-default"
          (click)="submit(myForm)"
        >
          Добавить
        </button>
      </div>
    </form>

    <div>Имя: {{ myForm.value.name }}</div>
    <div>Email: {{ myForm.value.email }}</div>
  `
})
export class MetanitComponent {
  name: string;
  email: string;
  phone: string;

  submit(form: NgForm) {
    console.log(form);
  }
}
