import { Component } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ ],
  host: {
    '[@homeTransition]': ''
  }
})
export class AppComponent {
  title = 'app';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
