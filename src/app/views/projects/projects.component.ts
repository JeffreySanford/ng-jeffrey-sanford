import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private apiUrl = 'http://localhost:3000';
  data: any = {};

  projects: any = {
    "featured": [
      {
        "title": "Imagine Create Thrive",
        "location": "http://imaginecreatethrive.com",
        "description": "This is a small botique agency that can create mockups, designs, and web applciations.",
        "rank": 1,
        "url": "http://imaginecreatethrive.com/",

      },
      {
        "title": "Gracious Girls",
        "location": "http://imaginecreatethrive.com:4200",
        "description": "This is a cute organization and cleaning oritented business.",
        "rank": 2
      },
      {
        "title": "BS Native Girl",
        "location": "http://imaginecreatethrive.com:4201",
        "description": "Landing site presenting Native American are from an artist in the Pacific Northwest.",
        "rank": 3
      }
    ],
    "design" : [
      {
        "title": "Space Video",
        "description": "HTML5 audio and video",
        "teaser": "This is using the HTML5 video and audio elements.",
        "git": "https://github.com/JeffreySanford/html5-presentation",
        "rank": 1,
        "url": "projects/html5-presentation",
        "samples": "html",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Reddit",
        "description": "Displays Reddit articles",
        "teaser": "RESTful data from the angular2 reddit section.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/reddit",
        "rank": 2,
        "url": "/projects/reddit",
        "samples": "html",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Sort",
        "description": "CS Sort Algorithms",
        "teaser": "Using bootstrap, display some higher level search engine algorithms results.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions",
        "rank": 3,
        "url": "/projects/sort-functions/",
        "samples": "bootstrap",
        "imageURL": "img/bootstrap-logo.png"
      },
      {
        "title": "Layouts",
        "description": "Basic Layout using HTML5 and Jquery",
        "teaser": "These are some samples in Jquery",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions",
        "rank": 9,
        "url": "assets/samples/jquery/basic/",
        "samples": "javascript",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Tables",
        "description": "Table Modification",
        "teaser": "HTML5 design using JQuery.",
        "git": "https://github.com/JeffreySanford/samples/tree/master/jquery/table-modification",
        "rank": 10,
        "url": "assets/samples/jquery/table-modification/",
        "samples": "bootstrap",
        "imageURL": "img/bootstrap-logo.png"
      }
    ],
    "development": [
      {
        "title": "Kitchen Table",
        "description": "Recipe Articles",
        "teaser": "These are some samples development projects done in ExpressJS and Angular.",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/kitchen-table",
        "rank": 1,
        "url": "/projects/kitchen-table",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "D3JS",
        "description": "Data Visualizations",
        "teaser": "Represents your data on the front-end with engaging animations, transitions and methods.",
        "rank": 2,
        "url": "/projects/D3JS",
        "samples: ": "angular",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/D3JS",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Survey Site",
        "description": "Simple restful service for collecting surveys.",
        "teaser": "This is a expressJS application for collecting surveys.",
        "git": "https://github.com/JeffreySanford/sandbox-designs/tree/master/express/project-forms",
        "rank": 3,
        "url": "https://project-forms.herokuapp.com/",
        "samples": "express",
        "imageURL": "img/expressjs-logo.png"
      },
      {
        "title": "Angular Hero",
        "description": "Angular front-end ideas",
        "teaser": "Angular/Material design creates a front-end app that involves the user in the navigation process.",
        "url": "/projects/ng-hero-app/",
        "rank": 4,
        "samples": "angular",
        "git": "github:JeffreySanford",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Native Girl",
        "description": "Angular artist portfolio",
        "teaser": "This will give an artist the ability to cycle through their portfolio work in different catagories.",
        "rank": 5,
        "url": "/projects/native-girl/",
        "samples": "angular",
        "git": "github:JeffreySanford",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Artist Site",
        "description": "Mockup for an idea for an artist site.",
        "teaser": "These are develpment projects done in ExpressJS and Angular.",
        "git": "https://github.com/JeffreySanford/ravenwoodstudios",
        "rank": 6,
        "url": "http://ravenwoodstudios.herokuapp.com/",
        "samples": "express",
        "imageURL": "img/expressjs-logo.png"
      },
      {
        "title": "Purchasing",
        "description": "Proof of Concept",
        "teaser": "A site for a front end e-commerence package that will charge to Swipe and Paypal APIs.",
        "git": "https://github.com/JeffreySanford/subscription-project",
        "rank": 7,
        "url": "/projects/rest-express",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Weather",
        "description": "Display weather statistics",
        "teaser": "Using restful services and external API's pull weather data about a specified city.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/async-weather-reverserisk",
        "rank": 8,
        "url": "/projects/async-weather/",
        "samples": "javascript",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Car Connect",
        "description": "Artist Site",
        "teaser": "This is a angular mockup application for a business idea that a start-up had.",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/car-connection/app",
        "rank": 10,
        "url": "/projects/car-connection",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      }
    ]
  };
  url: String = "";

  constructor(@Inject(DOCUMENT) private document: any){}


  goToExternalUrl(url): void {
    this.document.location.href = url;
  }

  ngOnInit() {
  }

}
