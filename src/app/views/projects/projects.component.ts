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
    featured: [
      {
        id: 0,
        title: "Imagine Create Thrive",
        location: "http://imaginecreatethrive.com",
        description: "This is a small botique agency that can create mockups, designs, and web applciations."
      },
      {
        id: 1,
        title: "Gracious Girls",
        location: "http://imaginecreatethrive.com:4200",
        description: "This is a cute organization and cleaning oritented business."
      },
      {
        id: 2,
        title: "BS Native Girl",
        location: "http://imaginecreatethrive.com:4201",
        description: "Landing site presenting Native American are from an artist in the Pacific Northwest."
      }
    ]
  }

  constructor(private http: Http) {
    console.log('User accessed API.');
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
  ngOnInit() {
  }

}
