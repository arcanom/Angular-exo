import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-name',
  templateUrl: './your-name.component.html',
  styleUrls: ['./your-name.component.scss']
})
export class YourNameComponent implements OnInit {
modification: string = ""
test: boolean =true
name : string =""

modifie(valeur :any){

  this.name= valeur.target.value
  this.modification = this.name
  this.test = false
}

effacer(){

  this.name = ' ';
}
  constructor() { }

  ngOnInit(): void {
  }

}
