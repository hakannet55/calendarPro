import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-input-text',
  template: `
    <div class="input-group">
      <label>
        <div>{{ label }}</div>
        <input
          [(ngModel)]="value"
          (change)="changed.emit(value)"
          style="width: 100%;"
          [type]="inputType"
          class="form-control"
        />
        <div *ngIf="errorMsg" class="error-text">{{ errorMsg }}</div>
      </label>
    </div>
  `,
})
export class InputTextComponent {
  @Input()
  label = 'button';

  @Input()
  extraClass = '';

  @Input()
  inputType = 'text';

  @Input()
  errorMsg = '';

  @Output()
  changed = new EventEmitter<any>();

  @Input()
  value: any;
}
