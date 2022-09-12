import { NgModule } from '@angular/core';
import { ButtonComponent } from './atoms/button/button.component';
import { CommonModule } from '@angular/common';

const components = [ButtonComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  providers: [],
  exports: [...components],
})
export class SharedModule {}
