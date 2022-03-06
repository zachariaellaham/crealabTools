import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-yt-downloader',
  templateUrl: './yt-downloader.component.html',
  styleUrls: ['./yt-downloader.component.css']
})
export class YtDownloaderComponent implements OnInit {
  @ViewChild('videoInput') videoInput!: ElementRef;
  constructor() { }

  mp3:boolean = false;

  ngOnInit(): void {
  }

  downloadVideo() {
    const url = this.videoInput.nativeElement.value;
    window.location.href = `http://localhost:4000/download?URL=${url}&mp3=${this.mp3}`;
  }

  toogleMp3() {
    this.mp3 = !this.mp3;
  }
}
