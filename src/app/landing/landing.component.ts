import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { SocialButton } from '../classes/social-button';
import { NavigationService } from '../services/navigation.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Item } from '../services/item';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('flyInFlyOut', [
      transition(':enter', [
        style({ transform: 'scale(1)', opacity: 0.5, color: 'red' }),
        animate(
          '300ms',
          style({ transform: 'scale(4)', opacity: 1, color: 'gold' })
        ),
        animate(
          '300ms',
          style({ transform: 'scale(1)', opacity: 1, color: 'red' })
        ),
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit, AfterViewInit {
  currentState = 'initial';
  projectLove: SocialButton[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford',
      icon: 'code',
      disabled: false,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sanfordjeffrey/',
      icon: 'linkedin',
      disabled: false,
    },
  ];
  navigation: NavigationService;
  color: string | undefined;

  constructor(navigation: NavigationService, private elementRef: ElementRef, private headerState: HeaderService) {
    this.navigation = navigation;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.color;
  }

  ngOnInit(): void {
    debugger
    this.color = 'black';
  }

  logAnimation($event: any) {
    console.log(`animation ${$event.phaseName}`);
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  launchPage(page?: string) {
    const routeItem: Item = {
      name: page,
    };

    this.headerState.setSidebarState(true);
    this.navigation.navigate(routeItem);
  }
}
