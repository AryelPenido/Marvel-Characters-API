import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {

    this.getAllCharacters();


  }

  listCharacters!: any;
  type:string = 'character'
  getAllCharacters(){
    this.loading = true;
    this.apiService.getCharacters().subscribe((result) =>{

      this.listCharacters = result;
      this.loading = false;
      console.log(this.listCharacters)
    })
  }

  searchCharacter(event: any){
    const id = event.target.value

    this.listCharacters = this.listCharacters!.filter((element: { id: number; }) => {
      return element.id == id;
    })


  }

}
