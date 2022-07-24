import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  hoveringcharacter: boolean = false;

  @Input() character: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("input", this.character)
  }


  getDetails(){
    this.router.navigate(['character-details'], { state: { id: this.character.id } });
  }

}
