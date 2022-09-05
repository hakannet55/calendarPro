import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector:'main-layout-template-component',
  templateUrl:'./main-layout-component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {

}
