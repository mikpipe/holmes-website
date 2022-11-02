import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-entry',
  templateUrl: './album-entry.component.html',
  styleUrls: ['./album-entry.component.scss'],
})
export class AlbumEntryComponent implements OnInit {
  @Input() album: any;

  title: string = '';
  coverPath: string = '';
  tracks: string[] = [];

  linkSpotify: string = '';
  linkSoundcloud: string = '';
  linkYoutube: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = this.album.key;
    this.coverPath = this.album.value.cover;
    this.tracks = this.album.value.tracks;

    this.linkSpotify = this.album.value.links.spotify;
    this.linkSoundcloud = this.album.value.links.soundcloud;
    this.linkYoutube = this.album.value.links.youtube;
  }

  ToSpotify(){
    if (this.linkSpotify != ''){
      window.location.href = this.linkSpotify;
    }
  }

  ToSoundcloud(){
    if (this.linkSoundcloud != ''){
      window.location.href = this.linkSoundcloud;
    }
  }

  ToYoutube(){
    if (this.linkYoutube != ''){
      window.location.href = this.linkYoutube;
    }
  }
}
