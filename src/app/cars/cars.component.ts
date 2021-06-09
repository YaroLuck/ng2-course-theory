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
  cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 8, name: 'item 3'}];

  addCar() {
    // this.addCarStatus = 'Машина добавлена!';
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  // onKeyUp(event) {
  //   // this.inputText = (event.target as HTMLInputElement).value;
  //   // this.inputText = value;
  //   this.inputText = event.target.value;
  // }

  ngOnInit() {
  }

}
