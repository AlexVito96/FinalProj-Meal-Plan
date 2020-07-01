import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ERP';
  myName = 'Alex Vito'

  constructor() {
    console.log('I am the constructor');

    var name: string = 'Alex Vito';

    this.hello(this.title);
    this.hello(9);
  }

  hello(name) {
    console.log(name);
  }
  
  something(){
    console.log("Btn clicked");
    this.title = 'This is amazing';
  }

}
