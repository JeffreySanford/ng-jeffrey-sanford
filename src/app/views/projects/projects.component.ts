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
