import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson';

  processData = "gửi data từ App compo cho content compo";

  dataFromChild: any;
  inputdatafromForm = "đây là input từ người dùng"


}
