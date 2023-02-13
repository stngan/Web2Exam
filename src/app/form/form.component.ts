import { Component, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input("parentData") public inputdatafromForm: any
  @Output() public childEvent = new EventEmitter();


  sendInputData() {

    let userInput = {
      userName: "Ngo Song Tuyet Ngan",
      userAge: 21
    }

    this.childEvent.emit(userInput);


  }
}
