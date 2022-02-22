import { Component, OnInit } from '@angular/core';
import albums from '../../assets/albums.json';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  albums = albums;

  constructor() {}

  ngOnInit(): void {}
}
