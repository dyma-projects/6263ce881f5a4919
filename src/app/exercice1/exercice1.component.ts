import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public title: string = "exercice1 works!";
  public name: string = "nom"
  constructor() { }

  ngOnInit(): void {
  }

  public handleInput (e:HTMLInputElement){
    e.focus();
  }

}
