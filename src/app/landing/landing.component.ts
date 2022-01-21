import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SocialButton } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('changeStarSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class LandingComponent implements OnInit {
  currentState = 'initial';
  projectLove: SocialButton[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.projectLove = [
      {
        name: 'Twitter',
        url: 'http://localhost',
        icon: 'home'
      },
      {
        name: 'GitHub',
        url: 'http://localhost',
        icon: 'home'
      },
      {
        name: 'Twitter',
        url: 'http://localhost',
        icon: 'Home'
      },
      {
        name: 'Twitter',
        url: 'http://localhost',
        icon: 'Office'
      },
    ];
  }

  changeStarSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }



}

