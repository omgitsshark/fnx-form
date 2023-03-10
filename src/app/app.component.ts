import { Component } from '@angular/core';
import { mock, mockValidators } from './core/builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = mock;
  validators = mockValidators;
}
