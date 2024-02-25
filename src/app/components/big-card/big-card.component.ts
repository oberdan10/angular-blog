import { Component, Input, OnInit } from '@angular/core';
declare const YT: any;

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent implements OnInit {
  player: any;
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
    this.initYoutubePlayer();
  }

  initYoutubePlayer() {

    this.player = new YT.Player('player', {

      videoId: `${this.photoCover}`, // ID do vídeo do YouTube
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        loop: 1,
        playlist: `${this.photoCover}` // Repete o vídeo
      }
    });
}}
