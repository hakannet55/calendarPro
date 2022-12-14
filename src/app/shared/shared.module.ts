import { NgModule } from '@angular/core';
import { ButtonComponent } from './atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { AtomSelectOption, InputTextComponent } from './atoms';
import { FormsModule } from '@angular/forms';

const components = [ButtonComponent, InputTextComponent, AtomSelectOption];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [...components],
})
export class SharedModule {}
