import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  oneCharacter: any;
  characterForm: FormGroup =  new FormGroup({});

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllCharacters();


  }

  listCharacters!: any;
  getAllCharacters(){

    this.apiService.getCharacters().subscribe((result) =>{
      this.listCharacters = result;
      console.log(this.listCharacters)
    })
  }

  createForm(){
    this.characterForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      thumbnail: new FormGroup({
        path: new FormControl(''),
        extension: new FormControl(''),
      }),

    })
  }

}
