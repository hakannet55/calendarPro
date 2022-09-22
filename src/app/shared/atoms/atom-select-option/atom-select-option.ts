import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
  Type,
} from '@angular/core';
import { SelectionOptionModel } from '../../models/ecommon-models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'atom-select-option',
  template: `
    <div class="input-group">
      <label>
        <div>{{ label }}</div>
        <select class="form-control" style="width: 190px;height: auto;" [(ngModel)]="value" (change)="emitEvnt()">
          <option *ngIf="placeName" [value]="-1">{{ placeName }}</option>
          <option *ngFor="let item of options" [value]="item.value" [attr.selected]="value && value === item.value">
            {{ item.text || item.value }}
          </option>
        </select>
        <div *ngIf="errorMsg" class="error-text">{{ errorMsg }}</div>
      </label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtomSelectOption),
      multi: true,
    },
  ],
})
export class AtomSelectOption implements OnInit, ControlValueAccessor {
  @Input()
  label = '';

  @Input()
  extraClass = '';

  @Input()
  inputType = 'text';

  @Input()
  errorMsg = '';

  @Input()
  options: SelectionOptionModel[] = [];

  @Input()
  placeName = 'Seçiniz';

  @Output()
  changed = new EventEmitter<any>();

  @Input()
  value: any = -1;

  @Input()
  defaultValue: any;

  protected cdRef: ChangeDetectorRef;

  constructor(public injector: Injector) {
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef as Type<ChangeDetectorRef>);
  }

  ngOnInit(): void {
    if (this.value) {
      // this.value = this.options && this.options.length > 0 ? this.options[0].value : '';
    }
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(value: any): void {
    this.value = value;
    //this.onChangeCallback(value);
    this.detectChanges();
  }

  detectChanges(): void {
    this.cdRef.detach();
    this.cdRef.markForCheck();
    this.cdRef.reattach();
  }

  emitEvnt() {
    this.changed.emit(this.value);
  }
}
