import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-entry',
  templateUrl: './album-entry.component.html',
  styleUrls: ['./album-entry.component.scss'],
})
export class AlbumEntryComponent implements OnInit {
  @Input() album: any;

  albumName: string = '';
  albumCover: string = '';
  albumTracks: string[] = [];
  linkSpotify: string = '';
  linkSoundcloud: string = '';

  constructor() {}

  ngOnInit(): void {
    this.albumName = this.album.key;
    this.albumCover = this.album.value.cover;
    this.albumTracks = this.album.value.tracks;
    this.linkSpotify = this.album.value.links.spotify;
    this.linkSoundcloud = this.album.value.links.soundcloud;
  }
}
