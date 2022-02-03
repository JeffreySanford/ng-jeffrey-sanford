import { Component, OnInit } from '@angular/core';
import { SocialButton } from '../classes/social-button';
import { NavigationService } from '../services/navigation.service';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('flyInFlyOut', [
      transition(':enter', [
        style({ transform: 'scale(1)', opacity: 0, color: 'red' }),
        animate('600ms', style({ transform: 'scale(4)', opacity: 1, color: 'gold' })),
        animate('600ms', style({ transform: 'scale(1)', opacity: 1, color: 'red' })),
      ])
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
        icon: 'twitter_box'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin_box'
      },
    ];
  }

  logAnimation($event: any) {
    console.log(`animation ${$event.phaseName}`)
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}

function scale(arg0: number): string | number {
  throw new Error('Function not implemented.');
}

