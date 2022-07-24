import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  id: any;

  constructor(private router: Router,
              private apiService: ApiService) {
    if (this.router.getCurrentNavigation() != null) {
      this.id = this.router.getCurrentNavigation()!.extras.state;

    }
  }

  character:any
  ngOnInit(): void {
    this.character = this.apiService.getCharacterById(this.id)
  }

}
