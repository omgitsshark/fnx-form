import { Component, OnInit, Input } from '@angular/core';
import { FormConfig } from '../../interfaces';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formConfig: FormConfig | null = null;


  constructor() { }

  ngOnInit() {
  }

}
