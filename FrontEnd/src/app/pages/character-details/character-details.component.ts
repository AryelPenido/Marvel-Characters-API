import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  id: any;
  character:any;
  constructor(private router: Router,
              private apiService: ApiService) {

    if (this.router.getCurrentNavigation() != null) {
      this.character = this.router.getCurrentNavigation()!.extras.state;

    }

  }


  comics:any;
  type:string='comic';
  ngOnInit(): void {

    console.log("character",this.character);
    this.apiService.getComicsByCharacterId(this.character.character.id).subscribe(res=>{
      this.comics = res;
     console.log("this.comics", this.comics)

    });





  }

}
