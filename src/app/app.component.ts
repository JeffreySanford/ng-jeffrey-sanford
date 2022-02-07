import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from './classes/icons';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInFlyOut', [
      transition(':enter', [
        // the element receives this style immediately and then animates to the 
        // next style which is the `style({ transform: 'translateX(0)', opacity: 1 })`
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ])
  ]
})

export class AppComponent {
  title = 'Portfolio for Jeffrey Sanford';
  showFiller = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private iconService: IconService) {
    this.iconService.registerAll(appIcons);
    this.router.navigate(['landing'], {relativeTo: this.activatedRoute})
  }
}

