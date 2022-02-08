import { Component, ElementRef, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import packageInformation from '../../../package.json'
import { SocialButton } from '../classes/social-button';

export interface Item {
  name?: string | undefined;
  url?: string  | undefined;
  icon?: string  | undefined;
}

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
  packageInformation: { name: string; version: string; scripts: { ng: string; start: string; build: string; watch: string; test: string; }; private: boolean; dependencies: { "@angular/animations": string; "@angular/cdk": string; "@angular/cli": string; "@angular/common": string; "@angular/compiler": string; "@angular/core": string; "@angular/forms": string; "@angular/material": string; "@angular/platform-browser": string; "@angular/platform-browser-dynamic": string; "@angular/router": string; rxjs: string; "set-value": string; tslib: string; "zone.js": string; }; devDependencies: { "@angular-devkit/build-angular": string; "@angular/compiler-cli": string; "@types/jasmine": string; "@types/node": string; "jasmine-core": string; karma: string; "karma-chrome-launcher": string; "karma-coverage": string; "karma-jasmine": string; "karma-jasmine-html-reporter": string; typescript: string; }; } | undefined;
  appIcons: any;


  constructor(private router: Router, private elementRef: ElementRef) {
    this.angularVersion = VERSION.full;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = this.color;

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
