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
  @Input() typeInput: any;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  getDetails(){
    this.router.navigate(['character-details'], { state: { character: this.character} });
  }

}
