import { Component, ElementRef, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import packageInformation from '../../../package.json'
import { SocialButton } from '../classes/social-button';
import { Item } from '../services/item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class AppFooterComponent implements OnInit {
  @Input() projectLove: SocialButton[] | undefined;
  @Input() color: string | undefined;
  public version: string = packageInformation.version;
  isOpen!: boolean;
  angularVersion: string;


  constructor(private router: Router) {
    this.angularVersion = VERSION.full;
  }

  ngOnInit(): void {
  }

  routeExternal(item: Item, event: Event) {
    this.router.navigate([item.url]);
  }

  displayDevelopmentPopup() {
    console.log(packageInformation);
  }
}
