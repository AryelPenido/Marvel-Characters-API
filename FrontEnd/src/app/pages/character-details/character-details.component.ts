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
  loading:boolean = false;
  constructor(private router: Router,
              private apiService: ApiService) {

    if (this.router.getCurrentNavigation() != null) {
      this.character = this.router.getCurrentNavigation()!.extras.state;

    }

  }


  comics:any;
  type:string='comic';
  ngOnInit(): void {

    this.loading = true
    this.apiService.getComicsByCharacterId(this.character.character.id).subscribe(res=>{
      this.comics = res;
      this.loading = false;

    });





  }

}
