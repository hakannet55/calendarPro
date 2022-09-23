import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'left-menu-component',
  templateUrl: './left-menu-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent implements OnInit {
  @Input()
  isLogin = false;

  ngOnInit(): void {}

  clickedMenu() {
    if (window.innerWidth < 992) {
      $('#mobile-collapse').click();
    }
  }
}
