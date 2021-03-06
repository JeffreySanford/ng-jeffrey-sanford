import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

import { Http, Response } from '@angular/http';

import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ])
]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private apiUrl = 'http://localhost:3000';
  data: any = {};

  projects: any = {
    featured: [
      {
        title: 'Imagine Create Thrive',
        url: 'http://imaginecreatethrive.com',
        description:
          'This is a small botique agency that can create mockups, designs, and web applciations.',
        rank: 1
      },
      {
        title: 'Gracious Girls',
        url: 'http://graciousgirls.com',
        description:
          'This is a cute organization and cleaning oritented business.',
        rank: 2
      },
      {
        title: 'Kitchen Table',
        description: 'Recipe Articles',
        teaser:
          'These are some samples development projects done in ExpressJS and Angular.',
        git:
          'https://github.com/JeffreySanford/development/tree/master/projects/kitchen-table',
        rank: 1,
        url: '/assets/projects/kitchen-table',
        samples: 'angular',
        imageURL: 'img/angularjs-logo.png'
      },
      {
        title: 'Bash',
        description: 'A sharing teavel interest sit',
        teaser:
          'This is a travel sit that share experiences between users.',
        git:
          'https://github.com/JeffreySanford/bash',
        rank: 1,
        url: 'http://imaginecreatethrive.com:4200',
        samples: 'angular',
        imageURL: 'img/angularjs-logo.png'
      }
    ],
    design: [
      {
        title: 'Space Video',
        description: 'HTML5 audio and video',
        teaser: 'This is using the HTML5 video and audio elements.',
        git: 'https://github.com/JeffreySanford/html5-presentation',
        rank: 1,
        url: '/assets/projects/html5-presentation',
        samples: 'html',
        imageURL: 'img/html5css3-logo.png'
      },

      {
        title: 'Sort',
        description: 'CS Sort Algorithms',
        teaser:
          'Using bootstrap, display some higher level search engine algorithms results.',
        git:
          'https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions',
        rank: 3,
        url: '/assets/projects/sort-functions/',
        samples: 'bootstrap',
        imageURL: 'img/bootstrap-logo.png'
      },
      {
        title: 'Layouts',
        description: 'Basic Layout using HTML5 and Jquery',
        teaser: 'These are some samples in Jquery',
        git:
          'https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions',
        rank: 9,
        url: '/assets/samples/jquery/basic/',
        samples: 'javascript',
        imageURL: 'img/html5css3-logo.png'
      },
      {
        title: 'Tables',
        description: 'Table Modification',
        teaser: 'HTML5 design using JQuery.',
        git:
          'https://github.com/JeffreySanford/samples/tree/master/jquery/table-modification',
        rank: 10,
        url: '/assets/samples/jquery/table-modification/',
        samples: 'bootstrap',
        imageURL: 'img/bootstrap-logo.png'
      },
      {
        title: 'Angular Hero',
        description: 'Angular front-end ideas',
        teaser:
          'Angular/Material design creates a front-end app that involves the user in the navigation process.',
        url: '/assets/projects/ng-hero-app/',
        rank: 4,
        samples: 'angular',
        git: 'github:JeffreySanford',
        imageURL: 'img/angularjs-logo.png'
      },
      {
        title: 'Car Connect',
        description: 'Artist Site',
        teaser:
          'This is a angular mockup application for a business idea that a start-up had.',
        git:
          'https://github.com/JeffreySanford/development/tree/master/projects/car-connection/app',
        rank: 10,
        url: '/assets/projects/car-connection',
        samples: 'angular',
        imageURL: 'img/angularjs-logo.png'
      }
    ],
    development: [
      {
        title: 'Survey Site',
        description: 'Simple restful service for collecting surveys.',
        teaser: 'This is a expressJS application for collecting surveys.',
        git:
          'https://github.com/JeffreySanford/sandbox-designs/tree/master/express/project-forms',
        rank: 3,
        url: 'https://project-forms.herokuapp.com/',
        samples: 'express',
        imageURL: 'img/expressjs-logo.png'
      },
      {
        title: 'D3JS',
        description: 'Data Visualizations',
        teaser:
          'Represents your data on the front-end with engaging animations, transitions and methods.',
        rank: 2,
        url: '/assets/projects/D3JS',
        'samples: ': 'angular',
        git:
          'https://github.com/JeffreySanford/development/tree/master/projects/D3JS',
        imageURL: 'img/angularjs-logo.png'
      },

      {
        title: 'Reddit',
        description: 'Displays Reddit articles',
        teaser: 'RESTful data from the angular2 reddit section.',
        git:
          'https://github.com/JeffreySanford/development/tree/master/assessments/reddit',
        rank: 2,
        url: '/assets/projects/reddit',
        samples: 'html',
        imageURL: 'img/html5css3-logo.png'
      },
      {
        title: 'Native Girl',
        description: 'Angular artist portfolio',
        teaser:
          'This will give an artist the ability to cycle through their portfolio work in different catagories.',
        rank: 5,
        url: '/assets/projects/native-girl/',
        samples: 'angular',
        git: 'github:JeffreySanford',
        imageURL: 'img/angularjs-logo.png'
      },
      {
        title: 'Ravenwood Studios',
        description: 'Mockup for an idea for an artist site.',
        teaser: 'These are develpment projects done in ExpressJS and Angular.',
        git: 'https://github.com/JeffreySanford/ravenwoodstudios',
        rank: 6,
        url: 'http://ravenwoodstudios.herokuapp.com/',
        samples: 'express',
        imageURL: 'img/expressjs-logo.png'
      },
      {
        title: 'Weather',
        description: 'Display weather statistics',
        teaser:
          'Using restful services and external API\'s pull weather data about a specified city.',
        git:
          'https://github.com/JeffreySanford/development/tree/master/assessments/async-weather-reverserisk',
        rank: 8,
        url: '/assets/projects/async-weather/',
        samples: 'javascript',
        imageURL: 'img/html5css3-logo.png'
      }
    ]
  };
  url: String = '';
  isOpened: String;

  constructor(@Inject(DOCUMENT) private document: any) {}

  goToExternalUrl(url): void {
    this.document.location.href = url;
  }

  ngOnInit() {}
}
