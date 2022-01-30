import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SocialButton } from '../classes/social-button';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('changeStarSize', [
      state('initial', style({
        backgroundColor: 'yellow',
        width: '600px',
        height: '600px'
      })),
      state('final', style({
        backgroundColor: 'green',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('3000ms')),
      transition('final=>initial', animate('6000ms'))
    ]),
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
        url: 'http://localhost',
        icon: 'github'
      },
      {
        name: 'Facebook',
        url: 'http://localhost',
        icon: 'facebook'
      },
      {
        name: 'Twitter',
        url: 'http://localhost',
        icon: 'twitter'
      },
      {
        name: 'Linkedin',
        url: 'http://localhost',
        icon: 'linkedin'
      },
    ];
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }



}

