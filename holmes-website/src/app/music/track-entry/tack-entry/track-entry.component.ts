import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-entry',
  templateUrl: './track-entry.component.html',
  styleUrls: ['./track-entry.component.scss'],
})
export class TrackEntryComponent implements OnInit {
  @Input() track: any;

  title: string = '';
  coverPath: string = '';

  linkSpotify: string = '';
  linkSoundcloud: string = '';
  linkYoutube: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = this.track.key;
    this.coverPath = this.track.value.cover;

    this.linkSpotify = this.track.value.links.spotify;
    if (this.linkSpotify == '') {
      this.linkSpotify = 'spotify';
    }

    this.linkSoundcloud = this.track.value.links.soundcloud;
    if (this.linkSoundcloud == '') {
      this.linkSoundcloud = 'soundcloud';
    }

    this.linkYoutube = this.track.value.links.youtube;
    if (this.linkYoutube == '') {
      this.linkYoutube = 'youtube';
    }

    console.log(this.track);
  }
}
