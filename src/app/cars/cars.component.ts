import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() {
  }

  addCarStatus = '';
  inputText = '';

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  onKeyUp(event) {
    // this.inputText = (event.target as HTMLInputElement).value;
    // this.inputText = value;
    this.inputText = event.target.value;
  }

  ngOnInit() {
  }

}
