import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button-component',
  template: `
    <div class="{{ getClass() }}">
      <i *ngIf="icon" class="fa fa-fw fa-{{ icon }}"></i>
      <span>{{ text }}</span>
    </div>
  `,
})
export class ButtonComponent {
  @Input()
  text = 'button';

  @Input()
  extraClass = '';

  @Input()
  icon = '';

  @Input()
  btnType: 'outline-success' | 'btn-success' | 'default' | 'linkedin' | 'primary';

  getClass(): string {
    const defClassbtn = 'btn btn-default';
    const btnType = this.btnType ? 'btn-' + this.btnType : '';
    return defClassbtn + ' ' + btnType + ' ' + this.extraClass;
  }
}
