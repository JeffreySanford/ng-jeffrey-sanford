import { Component, OnInit } from '@angular/core';
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
  constructor(navigation: NavigationService) {
    this.navigation = navigation;
  }

  ngOnInit(): void {
    this.projectLove = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/jeffrey.sanford.56/',
        icon: 'facebook'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/JeffreySanford',
        icon: 'github'
      },
    ];

    this.color = 'black';
  }

  logAnimation($event: any) {
    console.log(`animation ${$event.phaseName}`)
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}

