import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector:'left-menu-component',
  templateUrl:'./left-menu-component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent implements OnInit {

  ngOnInit(): void {
  }



}
