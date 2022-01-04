import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import packageInformation from '../../../package.json'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  private version: string = packageInformation.version;
  isOpen!: boolean;
  angularVersion: string;
  packageInformation: { name: string; version: string; scripts: { ng: string; start: string; build: string; watch: string; test: string; }; private: boolean; dependencies: { "@angular/animations": string; "@angular/cdk": string; "@angular/cli": string; "@angular/common": string; "@angular/compiler": string; "@angular/core": string; "@angular/forms": string; "@angular/material": string; "@angular/platform-browser": string; "@angular/platform-browser-dynamic": string; "@angular/router": string; rxjs: string; "set-value": string; tslib: string; "zone.js": string; }; devDependencies: { "@angular-devkit/build-angular": string; "@angular/compiler-cli": string; "@types/jasmine": string; "@types/node": string; "jasmine-core": string; karma: string; "karma-chrome-launcher": string; "karma-coverage": string; "karma-jasmine": string; "karma-jasmine-html-reporter": string; typescript: string; }; };
  constructor(private router: Router) {
    this.angularVersion = VERSION.full;
    this.packageInformation = packageInformation;
  }

  ngOnInit(): void {
  }

  routeExternal(label: string, event: Event) {
    if (label === 'twitter') {
      this.router.navigate(['https://twitter.com/jeffrey_sanford'])
    }
  }

  displayDevelopmentPopup() {
    console.log(this.packageInformation);

  }
}
