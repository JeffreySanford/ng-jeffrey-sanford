import { ChangeDetectorRef, Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationService } from './services/navigation.service';
import { Item } from './services/item';
import { HeaderService } from './header/header.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

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
    ]),
  ],
})
export class AppComponent {
  title = 'Portfolio for Jeffrey Sanford';
  showFiller = false;
  isMenuAction: boolean = false;
  isLandingPage?: boolean;
  headerState: HeaderService;
  navigation: NavigationService;

  constructor(
    navigation: NavigationService,
    headerState: HeaderService,
    private cd: ChangeDetectorRef

    ) {

      this.navigation = navigation;
      this.headerState= headerState;
    const routeItem: Item = {
      name: 'landing',
    };

    navigation.navigate(routeItem);
  }

  ngOnInit() {
    this.navigation.getPageStatus().subscribe((isLandingPage: boolean)=>{
      this.isLandingPage = isLandingPage;
      this.cd.detectChanges();
    })
  }

  
}
