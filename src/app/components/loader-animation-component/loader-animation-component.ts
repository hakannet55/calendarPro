import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loader-animation-component',
  templateUrl: './loader-animation-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderAnimationComponent {}
