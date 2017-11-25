import { Component, OnInit } from '@angular/core';
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
        "description": "This is a small botique agency that can create mockups, designs, and web applciations."
      },
      {
        "title": "Gracious Girls",
        "location": "http://imaginecreatethrive.com:4200",
        "description": "This is a cute organization and cleaning oritented business."
      },
      {
        "title": "BS Native Girl",
        "location": "http://imaginecreatethrive.com:4201",
        "description": "Landing site presenting Native American are from an artist in the Pacific Northwest."
      }
    ],
    "designProjects" : [
      {
        "title": "Space Video",
        "description": "HTML5 audio and video",
        "teaser": "This is using the HTML5 video and audio elements.",
        "git": "https://github.com/JeffreySanford/html5-presentation",
        "url": "projects/html5-presentation",
        "samples": "html",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Reddit",
        "description": "Displays Reddit articles",
        "teaser": "RESTful data from the angular2 reddit section.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/reddit",
        "url": "../development/projects/reddit",
        "samples": "html",
        "imageURL": "img/html5css3-logo.png"
      },
      {
        "title": "Tables",
        "description": "Table Modification",
        "teaser": "HTML5 design using JQuery.",
        "git": "https://github.com/JeffreySanford/samples/tree/master/jquery/table-modification",
        "url": "../samples/jquery/table-modification/",
        "samples": "bootstrap",
        "imageURL": "img/bootstrap-logo.png"
      },
      {
        "title": "Sort",
        "description": "CS Sort Algorithms",
        "teaser": "Using bootstrap, display some higher level search engine algorithms results.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions",
        "url": "../development/projects/sort-functions/",
        "samples": "bootstrap",
        "imageURL": "img/bootstrap-logo.png"
      },
      {
        "title": "Layouts",
        "description": "Basic Layout using HTML5 and Jquery",
        "teaser": "These are some samples in Jquery",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/sort-functions",
        "url": "../samples/jquery/basic/",
        "samples": "javascript",
	B
        "imageURL": "img/html5css3-logo.png"
      }
    ],
    "developmentProjects": [
      {
        "title": "Artist Site",
        "description": "Mockup for an idea for an artist site.",
        "teaser": "These are develpment projects done in ExpressJS and Angular.",
        "git": "https://github.com/JeffreySanford/ravenwoodstudios",
        "url": "http://ravenwoodstudios.herokuapp.com/",
        "samples": "express",
        "imageURL": "img/expressjs-logo.png"
      },
      {
        "title": "Survey Site",
        "description": "Simple restful service for collecting surveys.",
        "teaser": "This is a expressJS application for collecting surveys.",
        "git": "https://github.com/JeffreySanford/sandbox-designs/tree/master/express/project-forms",
        "url": "https://project-forms.herokuapp.com/",
        "samples": "express",
        "imageURL": "img/expressjs-logo.png"
      },
      {
        "title": "Car Connect",
        "description": "Artist Site",
        "teaser": "This is a angular mockup application for a business idea that a start-up had.",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/car-connection/app",
        "url": "../development/projects/car-connection",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "D3JS",
        "description": "Data Visualizations",
        "teaser": "Represents your data on the front-end with engaging animations, transitions and methods.",
        "url": "../development/projects/D3JS",
        "samples: ": "angular",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/D3JS",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Angular Hero",
        "description": "Angular front-end ideas",
        "teaser": "Angular/Material design creates a front-end app that involves the user in the navigation process.",
	B
        "url": "../development/projects/ng-hero-app/",
        "samples": "angular",
        "git": "github:JeffreySanford",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Native Girl",
        "description": "Angular artist portfolio",
        "teaser": "This will give an artist the ability to cycle through their portfolio work in different catagories.",
        "url": "../development/projects/native-girl/",
        "samples": "angular",
        "git": "github:JeffreySanford",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Kitchen Table",
        "description": "Recipe Articles",
        "teaser": "These are some samples development projects done in ExpressJS and Angular.",
        "git": "https://github.com/JeffreySanford/development/tree/master/projects/kitchen-table",
        "url": "../development/projects/kitchen-table",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Purchasing",
        "description": "Proof of Concept",
        "teaser": "A site for a front end e-commerence package that will charge to Swipe and Paypal APIs.",
        "git": "https://github.com/JeffreySanford/subscription-project",
        "url": "../development/projects/rest-express",
        "samples": "angular",
        "imageURL": "img/angularjs-logo.png"
      },
      {
        "title": "Weather",
        "description": "Display weather statistics",
        "teaser": "Using restful services and external API's pull weather data about a specified city.",
        "git": "https://github.com/JeffreySanford/development/tree/master/assessments/async-weather-reverserisk",
        "url": "../development/projects/async-weather/",
        "samples": "javascript",
        "imageURL": "img/html5css3-logo.png"
      }
    ]
  };


  constructor() {
  }
<<<<<<< HEAD
=======

>>>>>>> fabf8579bbc6bb3c7cfc42a712135cc6c5059d6a
  ngOnInit() {
  }

}
