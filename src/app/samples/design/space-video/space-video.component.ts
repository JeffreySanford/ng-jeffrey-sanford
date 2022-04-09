import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-space-video',
  templateUrl: './space-video.component.html',
  styleUrls: ['./space-video.component.scss']
})
export class SpaceVideoComponent implements AfterViewInit, AfterContentChecked {
  isSidebarClosed = true;
  color = 'white';

  constructor(private headerState: HeaderService, private elementRef: ElementRef) {}

  ngAfterContentChecked() {
    this.isSidebarClosed = this.headerState.getSidebarState();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.color;
  }
}