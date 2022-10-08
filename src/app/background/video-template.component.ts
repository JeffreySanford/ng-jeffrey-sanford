import { AfterContentChecked, AfterContentInit, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video-template.component.html',
  styleUrls: ['./video-template.component.scss']
})
export class VideoTemplateComponent implements AfterContentChecked {
  @Input() background: boolean = false;
  @ViewChild('ref', { static: false }) ref!: ElementRef;

  videoSource = '../../assets/video/smaller-ocean-storm-sea-10hours.mp4';
  audioLevel: any;

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.ref && this.ref.nativeElement.autoplay && !this.audioLevel) {
      this.ref.nativeElement.autoplay = true;
      this.ref.nativeElement.muted = true;
      this.audioLevel = this.ref.nativeElement.muted ? 'volume_up' : 'volume_off';
    }
  }

  toggleAudio(ref: HTMLVideoElement) {
    ref.muted = !ref.muted;
    this.audioLevel = ref.muted ? 'volume_up' : 'volume_off';
  }
}
