import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  contactMethod = [
    {id: 1, name: 'mobile'},
    {id: 2, name: 'phone'}
  ];

  genderSelection = [
    {id: 1, type: 'Male'},
    {id: 2, type: 'Female'}
  ];

  // log(x) {
  //   console.log(x);
  // }

  submitClick(f) {
    console.log(f);
    console.log(f.value); // return as object
  }

}
