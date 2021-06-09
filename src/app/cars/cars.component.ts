import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() {
  }

  // addCarStatus = '';
  // inputText = 'defaultText';
  carName = '';
  addCarStatus = false;

  addCar() {
    // this.addCarStatus = 'Машина добавлена!';
    this.addCarStatus = true;
  }

  // onKeyUp(event) {
  //   // this.inputText = (event.target as HTMLInputElement).value;
  //   // this.inputText = value;
  //   this.inputText = event.target.value;
  // }

  ngOnInit() {
  }

}
