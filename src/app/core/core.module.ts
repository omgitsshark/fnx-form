import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormGeneratorComponent],
  exports: [FormGeneratorComponent]
})
export class CoreModule { }
