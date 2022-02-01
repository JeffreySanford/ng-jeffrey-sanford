import { Component, OnInit } from '@angular/core';
import { SocialButton } from '../classes/social-button';
import { NavigationService } from '../services/navigation.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
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

export class LandingComponent implements OnInit {
  currentState = 'initial';
  projectLove: SocialButton[] | undefined;
  navigation: NavigationService;
  constructor(navigation: NavigationService) {
    this.navigation = navigation;
   }

  ngOnInit(): void {
    this.projectLove = [
      {
        name: 'GitHub',
        url: 'https://github.com/JeffreySanford',
        icon: 'github'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/jeffrey.sanford.56/',
        icon: 'facebook'
      },
      {
        name: 'Twitter',
        url: 'https://www.twiter.com/jeffrey_sanford',
        icon: 'twitter'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin'
      },
    ];
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}

