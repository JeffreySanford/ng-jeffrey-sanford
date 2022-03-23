import { Component, ElementRef, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import packageInformation from '../../../package.json'
import { SocialButton } from '../classes/social-button';
import { Item } from '../services/item';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class AppFooterComponent {
  @Input() projectLove: SocialButton[] | undefined;
  @Input() color: string | undefined;
  public version: string = packageInformation.version;
  isOpen!: boolean;
  angularVersion: string;


  constructor(private router: Router, private navigation: NavigationService) {
    this.angularVersion = VERSION.full;
  }

  routeExternal(item: Item, event: Event) {
      this.navigation.navigate(item, event);
  }

  displayDevelopmentPopup() {
    console.log(packageInformation);
  }
}
