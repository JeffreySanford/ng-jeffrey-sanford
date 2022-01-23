import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio for Jeffrey Sanford';
  showFiller = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, iconService: IconService) {
    iconService.registerAll(appIcons);
    this.router.navigate(['landing'], {relativeTo: this.activatedRoute})
  }
}
