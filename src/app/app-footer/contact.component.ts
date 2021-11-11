import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeExternal(label: string, event: Event)
  {
    if(label==='twitter'){
      this.router.navigate(['https://twitter.com/jeffrey_sanford'])
    }
  }
}
