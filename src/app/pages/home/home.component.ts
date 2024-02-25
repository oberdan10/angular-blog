import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from 'src/app/services/rickandmortyapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personagens:any;

  paginas: any = {
    total: 0,
    paginaAtual: 1,
  }
  
  constructor(private rickandmortyapi :RickandmortyapiService) { }

  ngOnInit(): void {
    this.rickandmortyapi.getPersons(this.paginas.paginaAtual).subscribe((item) => {
      this.personagens = item.results;
      this.paginas.total = item.info.pages;
    })
  }

 proximoCards(){
  this.paginas.paginaAtual += 1;
  this.rickandmortyapi.getPersons(this.paginas.paginaAtual).subscribe((item) => {
    this.personagens = item.results;
  })
 }
 anteriorCards(){
  this.paginas.paginaAtual -= 1;
  this.rickandmortyapi.getPersons(this.paginas.paginaAtual).subscribe((item) => {
    this.personagens = item.results;
  })
 }

}
