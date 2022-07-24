import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation() != null) {
      const id = this.router.getCurrentNavigation()!.extras.state;
      console.log("id: ", id)
    }
  }
  ngOnInit(): void {
  }

}
