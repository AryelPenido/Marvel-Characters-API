import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Characters: any = []
  OneCharacter: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.getAllCharacters();


  }

  getAllCharacters(){
    this.apiService.getCharacters().subscribe((result) =>{
      this.Characters = result;
      console.log(this.Characters)
    })
  }

}
