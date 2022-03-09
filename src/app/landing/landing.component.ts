import { Component, ElementRef, OnInit } from '@angular/core';
import { SocialButton } from '../classes/social-button';
import { NavigationService } from '../services/navigation.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('flyInFlyOut', [
      transition(':enter', [
        style({ transform: 'scale(1)', opacity: .5, color: 'red' }),
        animate('300ms', style({ transform: 'scale(4)', opacity: 1, color: 'gold' })),
        animate('300ms', style({ transform: 'scale(1)', opacity: 1, color: 'red' })),
      ])
    ])
  ]
})

export class LandingComponent implements OnInit {
  currentState = 'initial';
  projectLove: SocialButton[] | undefined;
  navigation: NavigationService;
  color: string | undefined;
  constructor(navigation: NavigationService, private elementRef: ElementRef) {
    this.navigation = navigation;
  }
  ngAfterViewInit() {
    this.color = 'black';
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = this.color;
  }

  ngOnInit(): void {
    this.projectLove = [
      {
        name: 'GitHub',
        url: 'https://github.com/JeffreySanford',
        icon: 'code',
        disabled: false
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/jeffrey.sanford.56/',
        icon: 'facebook',
        disabled: true
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin',
        disabled: false
      }];
  }

  logAnimation($event: any) {
    console.log(`animation ${$event.phaseName}`)
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}

