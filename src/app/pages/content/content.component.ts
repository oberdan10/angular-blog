import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
import { RickandmortyapiService } from 'src/app/services/rickandmortyapi.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""

  person = {
    status:"",
    species:"",
    type:"",
    gender:"",
    location:""
  }

  private id:any

  constructor(
    private route:ActivatedRoute,
    private rickandmortyapi:RickandmortyapiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.rickandmortyapi.getPerson(this.id).subscribe((item) => {
      this.photoCover = item.image;
      this.contentTitle = item.name;

      this.person = {
        status: item.status,
        species: item.species,
        type: item.type,
        gender: item.gender,
        location: item.location.name
      }
      
     })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.photoCover = result.photoCover
  }
}
