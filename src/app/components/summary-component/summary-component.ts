import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector:'summary-component',
  templateUrl:'./summary-component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {

}
